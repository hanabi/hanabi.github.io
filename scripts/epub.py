import base64
import json
import os
import re
from uuid import uuid4
from ast import literal_eval
from bs4 import BeautifulSoup
from markdown import Markdown

ROOT_PATH = '../../../'
STYLE_PATH = '../../../src/css/custom.css'
CONFIG_PATH = '../../../docusaurus.config.ts'
TITLE_PAGE_PATH = '../../../src/pages/index.tsx'
SIDEBAR_CONFIG_PATH = '../../../sidebars.ts'
XHTML_TEMPLATE_PATH = '../../../static/epub/page-template.xhtml'

LOGO_PATH               = 'epub-src/OEBPS/img/logo.png'
COVER_IMG_PATH          = 'epub-src/OEBPS/img/cover.png'
COVER_PATH              = 'epub-src/OEBPS/parts/cover.xhtml'
TOC_PATH                = 'epub-src/OEBPS/parts/toc.xhtml'
CONTENT_PATH            = 'epub-src/OEBPS/content.opf'
TOC_NCX_PATH            = 'epub-src/OEBPS/toc.ncx'
EXAMPLE_PIECES_DIR      = 'epub-src/OEBPS/img/pieces'
EXAMPLE_SCREENSHOTS_DIR = 'epub-src/OEBPS/img/examples'

TABS_P = re.compile(r'(<Tabs\b[^>]*?>)((?:.|\n|\r)*?)(<\/Tabs>)')
TAB_P = re.compile(r'(<TabItem\b[^>]*?>)((?:.|\r|\n)*?)(<\/TabItem>)')
GUIDE_PROGRESS_P = re.compile(r'<BeginnersGuideProgress[^>]*?\/>')
SELF_CLOSE_MDX_P = re.compile(r'<[A-Z]\w*\s/>')
SVG_PLACEHOLDER_P = re.compile(r'\[example-svg-placeholder\]')

EPUB_ID = 'AF8C59C9-7DBC-4D40-BDEA-2CE8B997C472'
BOOK_TITLE = 'H-Group Conventions'
BOOK_AUTHOR = 'H-Group Contributors'

# TODO: Investigate what the logic behind this path compilation is.
BUILD_PATH_EXCEPTIONS = {
    'examples/5-pull-double-finesse': 'examples/pull-double-finesse',
}

CONTENT_EXCLUSIONS = ['example-images']


def main():
    # Update cover page with alt text.
    with open(COVER_PATH) as f:
        cover_soup = BeautifulSoup(f, 'lxml')
    cover_soup = update_cover(cover_soup)
    with open(COVER_PATH, 'w', encoding='utf-8') as f:
        f.write(cover_soup.prettify())

    # Collect toc file infos.
    with open(SIDEBAR_CONFIG_PATH, 'r') as f:
        sidebar_conf_lines = f.readlines()
    toc = parse_content_files(sidebar_conf_lines)

    # Construct map from mdx path to xhtml.
    link_map = construct_link_map(toc)

    # Collect linked file infos.
    linked_files = collect_linked_files(toc, link_map)
    linked_files_link_map = construct_link_map(linked_files)
    link_map = link_map | linked_files_link_map

    # Combine mdx and html files (for svg file) to xhtml for epub
    def write_xhtml(file_info, xhtml_str):
        with open(ROOT_PATH + file_info['xhtml'], 'w', encoding='utf-8') as f:
            f.write(xhtml_str)
    construct_epub(toc,          link_map, write_xhtml)
    construct_epub(linked_files, link_map, write_xhtml)

    # Remove unallowed SVG attributes.
    example_pieces_paths = collect_examples(EXAMPLE_PIECES_DIR)
    for path in example_pieces_paths:
        if '.svg' != os.path.splitext(path)[1]:
            continue
        piece_path = 'epub-src/OEBPS/' + path
        with open(piece_path, 'r') as f:
            soup = BeautifulSoup(f, 'lxml-xml') 
        cleaned_svg_soup = replace_unallowed_svg_attrs(soup)
        with open(piece_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_svg_soup.prettify())

    # Update content.opf with new files.
    with open(CONTENT_PATH) as f:
        content_soup = BeautifulSoup(f, 'xml')
    unneeded_parts = ['colophon', 'dedication', 'preface', 'chapter-01',
        'conclusion', 'notes']
    example_screenshot_paths = collect_examples(EXAMPLE_SCREENSHOTS_DIR)
    examples_paths = example_pieces_paths + example_screenshot_paths
    content_soup = update_content(content_soup,
                                  toc,
                                  linked_files,
                                  examples_paths,
                                  unneeded_parts)
    with open(CONTENT_PATH, 'w', encoding='utf-8') as f:
        f.write(content_soup.prettify())

    # Update TOC.ncx
    with open(TOC_NCX_PATH) as f:
        toc_ncx_soup = BeautifulSoup(f, 'lxml-xml')
    toc_ncx_soup = update_toc_ncx(toc_ncx_soup, toc)
    with open(TOC_NCX_PATH, 'w', encoding='utf-8') as f:
        f.write(toc_ncx_soup.prettify())

    # Update TOC.xhtml
    with open(TOC_PATH) as f:
        toc_soup = BeautifulSoup(f, 'lxml')
    toc_soup = update_toc(toc_soup, toc)
    with open(TOC_PATH, 'w', encoding='utf-8') as f:
        f.write(toc_soup.prettify())


def update_cover(cover_soup):
    cover_img = cover_soup.find('img')
    if cover_img:
        cover_img['alt'] = 'H-Group Conventions Cover'
    return cover_soup


def parse_content_files(sidebar_conf_lines):
    lines = sidebar_conf_lines
    for i in range(len(lines)):
        line = lines[i].strip()
        if 'mainSidebar: [' == line:
            lines = lines[i+1:]
            break
    for i in range(len(lines) - 1):
        # -1 in range call to avoid crash if no match
        prev_line = lines[len(lines) - 2 - i].strip()
        line      = lines[len(lines) - 1 - i].strip()
        if '};' == line and '],' == prev_line:
            lines = lines[:-2-i]
            break
    sidebar_str = '[' + ''.join(lines) + ']'
    sidebar_obj = literal_eval(sidebar_str)
    return [link_src_build(i) for i in sidebar_obj]


def link_src_build(sidebar_part):
    if isinstance(sidebar_part, str):
        return build_file_info(sidebar_part, True)
    elif isinstance(sidebar_part, dict):
        entry_count = len(sidebar_part.keys())
        if entry_count > 1:
            raise Exception(f'Expected 1 key-value pair, found {entry_count}.')
        for k, v in sidebar_part.items():
            folder = {
                'type': 'folder',
                'name': k,
            }
            if isinstance(v, list):
                folder ['children'] = [link_src_build(i) for i in v]
            else:
                raise Exception(
                    f'Expected list as value. Got {type(v).__name__} instead.')
            return folder
    else:
        raise Exception('Sidebar config list items may only be dict, or str.')


def collect_linked_files(toc_tree, link_map, files=[]):
    for node in toc_tree:
        if 'file' == node['type']:
            with open(ROOT_PATH + node['mdx']) as f:
                mdx_str = f.read()
            converted_html = Markdown(extensions=['extra']).convert(mdx_str)
            converted_soup = BeautifulSoup(converted_html, 'html.parser')
            for a_tag in converted_soup.find_all("a", href=True):
                href = a_tag['href']
                if href.startswith('http://') or href.startswith('https://'):
                    continue
                elif href.startswith('#'): continue # TODO: Delete and impl anchor links

                # Fix "malformed" anchor links.
                href = href.replace('/#', '#')

                # TODO: Delete next 3 lines and implement anchor links.
                anchor_parts = href.split('#')
                if len(anchor_parts) > 1 and '' != anchor_parts[0]:
                    href = anchor_parts[0]

                if href.endswith('.mdx'): href = href[:-4]

                r_href = reset_ref_root(href, node['docs_path'])

                if r_href not in link_map:
                    files.append(build_file_info(r_href, False))

        elif 'folder' == node['type']:
            collect_linked_files(node['children'], files)
    return files


def build_file_info(docs_path, in_toc):
    build_path = docs_path
    if docs_path in BUILD_PATH_EXCEPTIONS:
        build_path = BUILD_PATH_EXCEPTIONS[docs_path]

    # Adding 'a' to file id, because epub requires manifest item ids to
    # start with a letter.
    file_id = 'a' + str(uuid4())
    return {
        'type': 'file',
        'docs_path': docs_path,
        'mdx': f'docs/{docs_path}.mdx',
        'html': f'build/{build_path}/index.html',
        'xhtml': f'build/assets/epub/epub-src/OEBPS/parts/{file_id}.xhtml',
        'id': file_id,
        'in_toc': in_toc,
    }


def construct_link_map(toc, link_map={}):
    for item in toc:
        if 'file' == item['type']:
            link_map[item['docs_path']] = f'{item['id']}.xhtml'
        elif 'folder' == item ['type']:
            construct_link_map(item['children'], link_map)
    return link_map


def construct_epub(toc_tree, link_map, write):
    for entry in toc_tree:
        if 'file' == entry['type']:
            xhtml_content, page_title = construct_xhtml(entry, link_map)
            entry['title'] = page_title
            write(entry, xhtml_content)
        elif 'folder' == entry['type']:
            construct_epub(entry['children'], link_map, write)


def construct_xhtml(file_info, link_map):
    with open(ROOT_PATH + file_info['mdx']) as f:
        mdx_lines = f.readlines()

    # Pulls page title out of mdx frontmatter.
    page_title = extract_frontmatter_title(mdx_lines)
    # Strips frontmatter and import statements from mdx lines.
    mdx_lines = strip_non_md_start(mdx_lines)

    # Create page soup.
    with open(XHTML_TEMPLATE_PATH) as f:
        page_soup = BeautifulSoup(f, 'lxml')
    chapter_div = page_soup.find('div', class_='chapter')
    # Insert page title
    page_soup.title.string = page_title
    h2_tag = page_soup.new_tag('h2')
    h2_tag.string = page_title
    chapter_div.append(h2_tag)

    if file_info['docs_path'] in CONTENT_EXCLUSIONS:
        p = page_soup.new_tag('p')
        p.append('This content is not avaiable in the epub version due to ')
        p.append('formatting complications. Please view the content at ')
        a = page_soup.new_tag('a')
        a['href'] = f'https://hanabi.github.io{file_info["docs_path"]}'
        a.string = f'https://hanabi.github.io{file_info["docs_path"]}</a>'
        p.append(a)
        p.append('.')
        chapter_div.append(p)
        return page_soup.prettify(), page_title

    # Get compiled example images.
    with open(ROOT_PATH + file_info['html']) as f:
        html_soup = BeautifulSoup(f, 'lxml')
    svgs = html_soup.find_all('svg', {'xmlns': 'http://www.w3.org/2000/svg',
                              'class': 'example'})

    # Replace MDX tags with md compatibles
    mdx_source = ''.join(mdx_lines)
    # Removes <Tabs> and inserts page-break between contents of <TabItems>.
    page_break = '<div style="page-break: after;"></div>'
    for tabs_open_tag, tabs_content, tabs_close_tag in TABS_P.findall(
        mdx_source):
        mdx_source = mdx_source.replace(tabs_open_tag, '', 1)
        for tab_open_tag, tab_content, tab_close_tag in TAB_P.findall(
            tabs_content):
            mdx_source = mdx_source.replace(tab_open_tag, '', 1)
            mdx_source = mdx_source.replace(tab_close_tag, page_break, 1)
        # Removes last page break, to avoid double page break.
        mdx_source = ''.join(mdx_source.rsplit(page_break, 1))
        mdx_source = mdx_source.replace(tabs_close_tag, '', 1)
    # Removes BeginnersGuideProgress
    mdx_source = re.sub(GUIDE_PROGRESS_P, '', mdx_source)

    # Prepare SVG replacement for html soup.
    mdx_matches = SELF_CLOSE_MDX_P.findall(mdx_source)
    if len(mdx_matches) > len(svgs):
        raise Exception(f'Unexpected MDX tag found. Have {len(svgs)} SVGs to'
            + f' insert, but found {len(mdx_matches)} MDX tags, namely:'
            + f' {mdx_matches}.')
    else:
        i = 0
        for mdx_tag in mdx_matches:
            mdx_source = mdx_source.replace(mdx_tag, '[example-svg-placeholder]')
            i += 1

    # Convert to html.
    converted_html = Markdown(extensions=['extra']).convert(mdx_source)
    # Use html.parser instead of lxml to avoid nested <html>, and <body> tags.
    converted_soup = BeautifulSoup(converted_html, 'html.parser')

    # Insert converted md into page soup.
    chapter_div.append(converted_soup)

    # Fit image into page.
    for svg in svgs:
        svg['class'] = svg.get('class', []) + ['img--full-width']

    # Remove unsupported SVG attrs.
    for svg in svgs:
        replace_unallowed_svg_attrs(svg)

    # Fix rel SVG links.
    for svg in svgs:
        for image in svg.find_all('image'):
            image['xlink:href'] = '..' + image['xlink:href']
        invalid_tags = [
            tag for tag in svg.find_all(id=True)
            if not re.match(r'^[A-Za-z_][A-Za-z0-9._-]*$', tag['id'])
        ]
        for tag in invalid_tags:
            tag['id'] = '_' + tag['id']

    # Insert example SVGs into soup.
    svg_placeholders = chapter_div.find_all(string=SVG_PLACEHOLDER_P)
    i = 0
    for p in svg_placeholders:
        wrapper = p.find_parent()
        wrapper.replace_with(svgs[i])
        i += 1

    # Map doc links to xhtml file.
    for a_tag in chapter_div.find_all('a', href=True):
        # TODO: Delete following if and impelement anchor links.
        if '#' in a_tag['href']:
            a_tag.replace_with(a_tag.text)
            continue

        href = a_tag['href']
        if href.startswith('https://') or href.startswith('http://'):
            continue

        if href.endswith('.mdx'): href = href[:-4]

        r_href = reset_ref_root(href, file_info['docs_path'])

        if r_href in link_map:
            a_tag['href'] = link_map[r_href]

    # Fix example image links.
    for img_tag in chapter_div.find_all('img', src=True):
        if img_tag['src'].startswith('/img/examples/'):
            img_tag['src'] = '..' + img_tag['src']

    # Prepares soup for writing.
    page_str = page_soup.prettify()

    # Fixes svg issues.
    # The fixing of the svgs must happen in the string. Otherwise it will be
    # screwed up by bs4 when prettifying.
    repl_list = [['baseprofile', 'baseProfile'], ['viewbox', 'viewBox'],
        ['feflood', 'feFlood'], ['feoffset', 'feOffset'],
        ['femorphology', 'feMorphology'], ['femerge', 'feMerge'],
        ['fecomponenttransfer', 'feComponentTransfer'], ['fefunca', 'feFuncA'],
        ['fefuncb', 'feFuncB'], ['fefuncg', 'feFuncG'], ['fefuncr', 'feFuncR'],
        ['femergenode', 'feMergeNode'], ['feMergenode', 'feMergeNode'],
        ['lineargradient', 'linearGradient'],
        ['fecolormatrix', 'feColorMatrix']]
    for repl in repl_list:
        page_str = page_str.replace(repl[0], repl[1])

    return page_str, page_title


def extract_frontmatter_title(lines):
    fm_start, fm_end = find_frontmatter_delimiters(lines)
    page_title = None
    frontmatter_start_line = -1
    frontmatter_end_line = -1
    for line in lines[fm_start + 1:fm_end]:
        if line.strip().startswith('title: '):
            return line.strip()[7:]
    return None


def strip_non_md_start(lines):
    fm_start, fm_end = find_frontmatter_delimiters(lines)
    # Strips imports
    for i in range(fm_end + 1, len(lines)):
        line = lines[i].strip()
        if '' != line and not line.startswith('import '):
            lines = lines[i:]
            break
    return lines


def find_frontmatter_delimiters(lines):
    start_line = -1
    end_line   = -1
    for i in range(len(lines)):
        if lines[i].startswith('---') and -1 == start_line:
            start_line = i
        elif lines[i].startswith('---') and -1 != start_line:
            end_line = i
    return start_line, end_line


def collect_examples(base_dir):
    paths = []
    for root, _, files in os.walk(base_dir):
        for file in files:
            folder = root.split('/', 2)[2]
            paths.append(f'{folder}/{file}')
    return paths


def replace_unallowed_svg_attrs(soup):
    rem_list = ['paint-order']
    for rem in rem_list:
        for tag in soup.find_all(attrs={'paint-order': True}):
            tag.attrs.pop(rem)
    return soup


def reset_ref_root(ref, from_doc_path):
    parent_path_parts = from_doc_path.split('/')[:-1]

    while True:
        root_ref = None
        if ref.startswith('https://') or ref.startswith('http://'): return ref
        elif ref.startswith('../'):
            back_c = ref.count('../')
            root_ref = '/'.join(parent_path_parts[:-back_c] \
                                + [ref[back_c * 3:]])
        elif ref.startswith('/'): root_ref = ref[1:]
        else:                     root_ref = '/'.join(parent_path_parts + [ref])

        if os.path.isfile(ROOT_PATH + 'docs/' + root_ref + '.mdx'):
            return root_ref
        elif ref.count('../') < len(parent_path_parts):
            ref = '../' + ref
        else:
            raise Exception(f'Found reference "{ref}" in file ' \
                + f'"{from_doc_path}", which doesn\'t exist.')


def update_content(content_soup, toc, linked_files, examples_paths, unneeded_items):
    content_soup.find('dc:identifier', {'id': 'BookId'}).string = EPUB_ID
    content_soup.find('dc:title').string = BOOK_TITLE
    dc_creator = content_soup.find('dc:creator')
    dc_creator.string = BOOK_AUTHOR
    dc_creator['opf:file-as'] = BOOK_AUTHOR
    def rem_item(id_):
        item = content_soup.find('item', {'id': id_})
        itemref = content_soup.find('itemref', {'idref': id_})
        reference = content_soup.find('reference', {'href': f'parts/{id_}.xhtml'})
        for tag in [item, itemref, reference]:
            if None != tag:
                tag.decompose()
    for i in unneeded_items:
        rem_item(i)

    manifest = content_soup.find('manifest')
    spine    = content_soup.find('spine')
    def add_pages(toc):
        for toc_item in toc:
            if 'file' == toc_item['type']:
                item = content_soup.new_tag('item')
                item['id']         = toc_item['id']
                item['href']       = f'parts/{toc_item["id"]}.xhtml'
                item['media-type'] = 'application/xhtml+xml'
                manifest.append(item)

                itemref = content_soup.new_tag('itemref')
                itemref['idref'] = toc_item['id']
                if not toc_item['in_toc']:
                    itemref['linear'] = 'no'
                spine.append(itemref)
            elif 'folder' == toc_item['type']:
                add_pages(toc_item['children'])
    add_pages(toc)
    add_pages(linked_files)

    media_type_map = {'svg': 'image/svg+xml',
                      'png': 'image/png',
                      'jpg': 'image/jpeg',
                      'jpeg': 'image/jpeg'}
    for path in examples_paths:
        item = content_soup.new_tag('item')
        item['id'] = path.replace('/', '_')
        item['href'] = path
        file_t = path.rsplit('.', 1)[1].lower()
        if file_t not in media_type_map:
            raise Exception(f'Found unexpected file type {file_t}. Expected'
                + f' one of {media_type_map.keys()}.')
        item['media-type'] = media_type_map[file_t]
        manifest.append(item)

    guide = content_soup.find('guide')
    content_start_reference = content_soup.new_tag('reference')
    content_start_reference['type'] = 'text'
    content_start_reference['title'] = 'Content'
    content_start_reference['href'] = f'parts/{toc[0]["id"]}.xhtml'
    guide.append(content_start_reference)

    return content_soup


def update_toc_ncx(soup, toc):
    soup.find('meta', {'name': 'dtb:uid'})['content'] = EPUB_ID
    soup.find('docTitle').find('text').string = BOOK_TITLE
    soup.find('docAuthor').find('text').string = BOOK_AUTHOR

    navmap = soup.find('navMap')
    navmap.append(create_ncx_navpoint(1, 'Cover', 'parts/cover.xhtml'))
    navpoint_tree, _, depth = construct_navpoint_tree(toc, play_order_start=2)
    navmap.append(navpoint_tree)

    soup.find('meta', {'name': 'dtb:depth'})['content'] = str(depth)

    return soup


def construct_navpoint_tree(toc, play_order_start=1, depth=1):
    play_order = play_order_start
    soup = BeautifulSoup('', 'lxml-xml')
    for item in toc:
        if 'file' == item['type']:
            soup.append(create_ncx_navpoint(play_order, item['title'],
                                            f'parts/{item["id"]}.xhtml'))
            play_order += 1
        elif 'folder' == item['type']:
            before_play_order = play_order
            children_soup, play_order, depth = construct_navpoint_tree(
                item['children'], play_order, 1 + depth)
            first_content_src = children_soup.find('content')['src']
            navpoint = create_ncx_navpoint(before_play_order, item['name'],
                                           first_content_src, True)
            navpoint.append(children_soup)
            soup.append(navpoint)
    return soup, play_order, depth


def create_ncx_navpoint(play_order, label, content_src, is_parent=False):
    soup = BeautifulSoup('', 'lxml-xml')

    xmlified_id = content_src.replace('/', '_')
    if is_parent:
        xmlified_id = 'p' + xmlified_id
    navpoint = soup.new_tag('navPoint', id=xmlified_id,
                            playOrder=str(play_order))

    navlabel = soup.new_tag("navLabel")
    text = soup.new_tag("text")
    text.string = label
    navlabel.append(text)

    content = soup.new_tag("content", src=content_src)

    navpoint.append(navlabel)
    navpoint.append(content)
    return navpoint


def update_toc(soup, toc):
    body = soup.find('body')
    body.append(construct_toc_tree(toc))
    return soup


def construct_toc_tree(toc):
    soup = BeautifulSoup('', 'lxml-xml')
    ul = soup.new_tag('ul', attrs={'class': 'toc'})
    for item in toc:
        if 'file' == item['type']:
            ul.append(create_toc_li(item['title'], f'{item["id"]}.xhtml'))
        elif 'folder' == item['type']:
            group_li = soup.new_tag('li')
            group_li.string = item['name']
            group_li.append(construct_toc_tree(item['children']))
            ul.append(group_li)
    return ul


def create_toc_li(label, href):
    soup = BeautifulSoup('', 'lxml')

    li = soup.new_tag('li')
    a = soup.new_tag('a', href=href)
    a.string = label
    li.append(a)

    return li


if __name__ == '__main__':
    main()

