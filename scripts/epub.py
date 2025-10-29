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

LOGO_PATH          = 'epub-src/OEBPS/img/logo.png'
COVER_IMG_PATH     = 'epub-src/OEBPS/img/cover.png'
COVER_PATH         = 'epub-src/OEBPS/parts/cover.xhtml'
CONTENT_PATH       = 'epub-src/OEBPS/content.opf'
TOC_PATH           = 'epub-src/OEBPS/toc.ncx'
EXAMPLE_PIECES_DIR = 'epub-src/OEBPS/img/pieces'

EPUB_ID = 'AF8C59C9-7DBC-4D40-BDEA-2CE8B997C472'
BOOK_TITLE = 'H-Group Conventions'


def main():
    # Update cover page with alt text.
    with open(COVER_PATH) as f:
        cover_soup = BeautifulSoup(f, 'xml')
    cover_soup = update_cover(cover_soup)
    with open(COVER_PATH, 'w', encoding='utf-8') as f:
        f.write(str(cover_soup))

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
    def write_xhtml(file_info, text):
        with open(ROOT_PATH + file_info['xhtml'], 'w', encoding='utf-8') as f:
            f.write(str(text))
    construct_epub(toc, link_map, write_xhtml)

    # Update content.opf with new files.
    with open(CONTENT_PATH) as f:
        content_soup = BeautifulSoup(f, 'xml')
    example_pieces_paths = collect_example_pieces()
    unneeded_parts = ['colophon', 'dedication', 'preface', 'chapter-01',
        'conclusion', 'notes']
    content_soup = update_content(content_soup,
                                  toc,
                                  linked_files,
                                  example_pieces_paths,
                                  unneeded_parts)
    with open(CONTENT_PATH, 'w', encoding='utf-8') as f:
        f.write(str(content_soup))

    # Update TOC.ncx
    with open(TOC_PATH) as f:
        toc_soup = BeautifulSoup(f, 'xml')
    toc_soup = update_toc_ncx(toc_soup, toc)
    with open(TOC_PATH, 'w', encoding='utf-8') as f:
        f.write(str(toc_soup))

    # Update TOC page
    # TODO


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
                root_capt_pattern \
                    = r'^(?!https?)(?:(?:(?:\.\.\/)?\.\.)?\/)?(.+)$'
                match = re.search(root_capt_pattern, a_tag['href'])
                if match:
                    clean_href = match.group(1)
                    # TODO: Delete next 6 lines and implement anchor links.
                    anchor_parts = clean_href.split('#')
                    if len(anchor_parts) > 1:
                        if '' != anchor_parts[0]:
                            clean_href = anchor_parts[0]
                        elif '' == anchor_parts[0]:
                            continue

                    # Strip file ending.
                    if clean_href.endswith('.mdx'):
                        clean_href = clean_href[:-4]
                    if clean_href not in link_map:
                        files.append(build_file_info(clean_href, False))
        elif 'folder' == node['type']:
            collect_linked_files(node['children'], files)
        else:
            raise Exception(f'Found unknown file type {node["type"]}.')
    return files


def build_file_info(docs_path, in_toc):
    # Adding 'a' to file id, because epub requires manifest item ids to
    # start with a letter.
    file_id = 'a' + str(uuid4())
    return {
        'type': 'file',
        'docs_path': docs_path,
        'mdx': f'docs/{docs_path}.mdx',
        'html': f'build/{docs_path}/index.html',
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
        else:
            raise Exception(f'Found unknown file type {file["type"]}.')
    return link_map


def construct_epub(toc_tree, link_map, write):
    for entry in toc_tree:
        if 'file' == entry['type']:
            xhtml_content, page_title = construct_xhtml(entry, link_map)
            entry['title'] = page_title
            write(entry, xhtml_content)
        elif 'folder' == entry['type']:
            construct_epub(entry['children'], link_map, write)
        else:
            raise Exception(f'Found unknown file type {file["type"]}.')


def construct_xhtml(file_info, link_map):
    with open(ROOT_PATH + file_info['mdx']) as f:
        mdx_lines = f.readlines()

    # Pulls page title out of mdx frontmatter.
    page_title = extract_frontmatter_title(mdx_lines)
    # Strips frontmatter and import statements from mdx lines.
    mdx_lines = strip_non_md_start(mdx_lines)

    # Create page soup.
    with open(XHTML_TEMPLATE_PATH) as f:
        page_soup = BeautifulSoup(f, 'lxml-xml')
    chapter_div = page_soup.find('div', class_='chapter')
    # Insert page title
    page_soup.title.string = page_title
    h2_tag = page_soup.new_tag('h2')
    h2_tag.string = page_title
    chapter_div.append(h2_tag)

    # Get compiled example images.
    with open(ROOT_PATH + file_info['html']) as f:
        html_soup = BeautifulSoup(f, 'lxml')
    svgs = html_soup.find_all('svg', {'xmlns': 'http://www.w3.org/2000/svg',
                                  'class': 'example'})
    for svg in svgs:
        svg.attrs.pop('baseprofile')
        for image in svg.find_all('image'):
            image['xlink:href'] = '..' + image['xlink:href']
    if None == svgs: svgs = []

    # Replace MDX tags with md compatibles
    mdx_source = ''.join(mdx_lines)
    # Removes <Tabs> and inserts page-break between contents of <TabItems>.
    tabs_pattern = re.compile(r'(<Tabs\b[^>]*?>)((?:.|\n|\r)*?)(<\/Tabs>)')
    tab_pattern = re.compile(r'(<TabItem\b[^>]*?>)([^<]*?)(<\/TabItem>)')
    page_break = '<div style="page-break: after;"></div>'
    for tabs_open_tag, tabs_content, tabs_close_tag in tabs_pattern.findall(
        mdx_source):
        mdx_source = mdx_source.replace(tabs_open_tag, '', 1)
        for tab_open_tag, tab_content, tab_close_tag in tab_pattern.findall(
            tabs_content):
            mdx_source = mdx_source.replace(tab_open_tag, '', 1)
            mdx_source = mdx_source.replace(tab_close_tag, page_break, 1)
        # Removes last page break, to avoid double page break.
        mdx_source = ''.join(mdx_source.rsplit(page_break, 1))
        mdx_source = mdx_source.replace(tabs_close_tag, '', 1)
    # Removes BeginnersGuideProgress
    guide_progress_pattern = re.compile(r'<BeginnersGuideProgress[^>]*?\/>')
    mdx_source = re.sub(guide_progress_pattern, '', mdx_source)

    # Replaces remaining mdx tags with compiled example SVGs.
    self_close_mdx_pattern = re.compile(r'<[A-Z]\w*\s/>')
    mdx_matches = self_close_mdx_pattern.findall(mdx_source)
    if len(mdx_matches) > len(svgs):
        raise Exception(f'Unexpected MDX tag found. Have {len(svgs)} SVGs to'
            + ' insert, but found {len(mdx_matches)} MDX tags, namely:'
            + ' {mdx_matches}.')
    else:
        i = 0
        for mdx_tag in mdx_matches:
            mdx_source = mdx_source.replace(mdx_tag, str(svgs[i]))
            i += 1

    # Insert converted html.
    converted_html = Markdown(extensions=['extra']).convert(mdx_source)
    converted_soup = BeautifulSoup(converted_html, 'html.parser')
    chapter_div.append(converted_soup)

    # Map doc links to xhtml file.
    for a_tag in chapter_div.find_all("a", href=True):
        # TODO: Delete following if and impelement anchor links.
        if '#' in a_tag['href']:
            a_tag.replace_with(a_tag.text)
            continue

        href = a_tag['href']
        r_href = None
        if href.startswith('https://') or href.startswith('http://'):
            continue
        # Removing relative path information, since I'm working with root.
        elif href.startswith('../../'): r_href = href[6:]
        elif href.startswith('../'):    r_href = href[3:]
        elif href.startswith('/'):      r_href = href[1:]
        else:                           r_href = href
        # Strip file ending.
        if r_href.endswith('.mdx'): r_href = r_href[:-4]

        if r_href in link_map:
            a_tag['href'] = link_map[r_href]
    return page_soup, page_title


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
    for i in range(fm_end, len(lines)):
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


def collect_example_pieces():
    paths = []
    for root, _, files in os.walk(EXAMPLE_PIECES_DIR):
        for file in files:
            folder = root.split('/', 2)[2]
            paths.append(f'{folder}/{file}')
    return paths


def update_content(content_soup, toc, linked_files, example_pieces_paths, unneeded_items):
    dc_identifier = content_soup.find('dc:identifier', {'id': 'BookId'})
    if dc_identifier:
        dc_identifier.string = EPUB_ID
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
                spine.append(itemref)
            elif 'folder' == toc_item['type']:
                add_pages(toc_item['children'])
            else:
                raise Exception('Found unknown type "{toc_item["type"]}".')
    add_pages(toc)
    add_pages(linked_files)

    media_type_map = {'svg': 'image/svg+xml',
                      'png': 'image/png',
                      'jpg': 'image/jpeg',
                      'jpeg': 'image/jpeg'}
    for path in example_pieces_paths:
        item = content_soup.new_tag('item')
        item['id'] = path
        item['href'] = path
        file_t = path.rsplit('.', 1)[1].lower()
        if file_t not in media_type_map:
            raise Exception(f'Found unexpected file type {file_t}. Expected'
                + ' one of {media_type_map.keys()}.')
        item['media-type'] = media_type_map[file_t]
        manifest.append(item)

    guide = content_soup.find('guide')
    content_start_reference = content_soup.new_tag('reference')
    content_start_reference['type'] = 'text'
    content_start_reference['title'] = 'Content'
    content_start_reference['href'] = f'parts/{toc[0]["id"]}.xhtml'
    guide.append(content_start_reference)

    return content_soup


def update_toc_ncx(toc_soup, toc_items):
    # TODO: Build toc.
    meta_uid = toc_soup.find('meta', {'name': 'dtb:uid'})
    if meta_uid:
        meta_uid['content'] = EPUB_ID
    return toc_soup


if __name__ == '__main__':
    main()

