import base64
import json
import re
from uuid import uuid4
from ast import literal_eval
from bs4 import BeautifulSoup

ROOT_PATH = '../../../'
STYLE_PATH = '../../../src/css/custom.css'
CONFIG_PATH = '../../../docusaurus.config.ts'
TITLE_PAGE_PATH = '../../../src/pages/index.tsx'
SIDEBAR_CONFIG_PATH = '../../../sidebars.ts'
XHTML_TEMPLATE_PATH = '../../../static/epub/page-template.xhtml'

LOGO_PATH = 'epub-src/OEBPS/img/logo.png'
COVER_IMG_PATH = 'epub-src/OEBPS/img/cover.png'
COVER_PATH = 'epub-src/OEBPS/parts/cover.xhtml'
CONTENT_PATH = 'epub-src/OEBPS/content.opf'

EPUB_ID = 'AF8C59C9-7DBC-4D40-BDEA-2CE8B997C472'


def main():
    # Update cover page with alt text.
    with open(COVER_PATH) as f:
        cover_soup = BeautifulSoup(f, 'xml')
    cover_soup = update_cover(cover_soup)
    with open(COVER_PATH, 'w', encoding='utf-8') as f:
        f.write(str(cover_soup))

    # Collect relevant files
    with open(SIDEBAR_CONFIG_PATH, 'r') as f:
        sidebar_conf_lines = f.readlines()
    content_files = parse_content_files(sidebar_conf_lines)

    # Combine mdx and html files (for svg file) to xhtml for epub
    for file in content_files:
        if ('file' == file['type']):
            xhtml_content, page_title = construct_xhtml(file)
            file['title'] = page_title
            with open(file['xhtml'], 'w', encoding='utf-8') as f:
                f.write(xhtml_content)

    # Update content.opf with new files.
    with open(CONTENT_PATH) as f:
        content_soup = BeautifulSoup(f, 'xml')
    content_soup = update_content(content_soup, content_files)
    with open(CONTENT_PATH, 'w', encoding='utf-8') as f:
        f.write(str(content_soup))
    # TODO: Delete unneeded parts.

    # Update TOC.ncx
    # TODO

    # Update TOC page
    # TODO


def update_cover(cover_soup):
    cover_img = cover_soup.find('img')
    if cover_img:
        cover_img['alt'] = 'H-Group Conventions Cover'
    return cover_soup


def update_toc_ncx(toc_soup):
    meta_uid = toc_soup.find('meta', {'name': 'dtb:uid'})
    if meta_uid:
        meta_uid['content'] = EPUB_ID
    return content_soup


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
    return link_src_build(sidebar_obj)


def link_src_build(sidebar_part):
    if isinstance(sidebar_part, str):
        file_id = uuid4()
        return {
            'type': 'file',
            'mdx': f'docs/{sidebar_part}.mdx',
            'html': f'build/{sidebar_part}/index.html',
            'xhtml': f'build/assets/epub/OEBPS/parts/{file_id}.xhtml',
            'id': file_id,
        }
    elif isinstance(sidebar_part, dict):
        folders = []
        for k, v in sidebar_part.items():
            curr_folder = {
                'type': 'folder',
                'name': k,
            }
            if isinstance(v, list):
                curr_folder['children'] = link_src_build(v)
            else:
                curr_folder['children'] = [link_src_build(v)]
            folders.append(curr_folder)
        return folders
    elif isinstance(sidebar_part, list):
        return [link_src_build(x) for x in sidebar_part]
    else:
        raise Exception("Sidebar config item may only be dict, list, or str.")


def construct_xhtml(file_info):
    with open(ROOT_PATH + file_info['mdx']) as f:
        mdx_lines = f.readlines()

    # Pulls page title out of mdx frontmatter.
    page_title = None
    frontmatter_start_line = -1
    frontmatter_end_line = -1
    for i in range(len(mdx_lines)):
        if mdx_lines[i].startswith('---') and -1 == frontmatter_start_line:
            frontmatter_start_line = i
        elif mdx_lines[i].startswith('---') and -1 != frontmatter_start_line:
            frontmatter_end_line = i
            for j in range(i - frontmatter_start_line - 1):
                curr_line = mdx_lines[j + 1].strip()
                if curr_line.startswith('title: '):
                    page_title = curr_line[7:]

    # Strips frontmatter and import statements from mdx lines.
    for i in range(len(mdx_lines) - frontmatter_end_line - 1):
        curr_file_i = frontmatter_end_line + i + 1
        curr_line = mdx_lines[curr_file_i].strip()
        if '' != curr_line and not curr_line.startswith('import '):
            mdx_lines = mdx_lines[curr_file_i:]
            break

    # Constructs xhtml with placeholders for generated SVGs.
    with open(XHTML_TEMPLATE_PATH) as f:
        page_soup = BeautifulSoup(f, 'lxml-xml')
    chapter_div = page_soup.find('div', class_='chapter')
    # Insert page title
    page_soup.title.string = page_title
    h2_tag = page_soup.new_tag('h2')
    h2_tag.string = page_title
    chapter_div.append(h2_tag)
    i = 0
    while i < len(mdx_lines):
        cl = mdx_lines[i] # cl = current_line

        # TODO: Make local functions pure.
        def find_last_line(matcher):
            j = i + 1
            while j < len(mdx_lines):
                cl_j = mdx_lines[j]
                if not matcher(cl_j):
                    return j - 1
                    break
                j += 1
            return i
        def construct_list(last_item_index, list_tag_factory, item_denominator_stripper):
            l_stack = []
            prev_indent_level = -1
            j = i
            while j <= last_item_index:
                cl = mdx_lines[j]
                indent_level = (len(cl) - len(cl.lstrip(' '))) % 2
                if indent_level > prev_indent_level:
                    l_stack.append(list_tag_factory())
                    prev_indent_level += 1
                elif indent_level < prev_indent_level:
                    for _ in range(prev_indent_level - indent_level):
                        l_stack[-2].append(l_stack[-1])
                    prev_indent_level = indent_level
                li_tag = page_soup.new_tag('li')
                item_content = md_to_html_a_b_em(item_denominator_stripper(cl))
                li_tag.append(item_content)
                l_stack[-1].append(li_tag)
                j += 1
            while len(l_stack) > 1:
                l_stack[-2].append(l_stack[-1])
            return l_stack[-1], j

        if cl.strip().startswith('#'):
            # Convert heading.
            title_parts = cl.strip().split(' ')
            h_level = len(title_parts[0])
            title_tag = page_soup.new_tag(f'h{h_level}')
            title_tag.append(' '.join(title_parts[1:]))
            chapter_div.append(title_tag)
        elif cl.strip().startswith(('-', '*')):
            # Convert unordered list item(s).
            last_item_index \
                = find_last_line(lambda x: x.strip().startswith(('-', '*')))
            ul_list, i = construct_list(last_item_index,
                                     lambda: page_soup.new_tag('ul'),
                                     lambda l: l.strip()[2:])
            chapter_div.append(ul_list)
        elif re.match(r'^\d+\.', cl.strip()):
            # Convert ordered list item(s).
            last_item_index \
                = find_last_line(lambda x: re.match(r'^\d+\.', x.strip()))
            ol_list, i = construct_list(
                 last_item_index,
                 lambda: page_soup.new_tag('ol'),
                 lambda l: l.strip()[l.strip().find('.'):].strip()
            )
            chapter_div.append(ol_list)
        else:
            # Convert text.
            p_tag = page_soup.new_tag('p')
            p_tag['class'] = 'text'
            p_tag.append(md_to_html_a_b_em(cl))
            chapter_div.append(p_tag)
        i += 1

    # Gets generated SVGs from html soup.
    # TODO
    with open(ROOT_PATH + file_info['html']) as f:
        html_soup = BeautifulSoup(f, 'html')


    # Replaces placeholders with generated SVGs.
    # TODO

    return page_soup, page_title


def md_to_html_a_b_em(text):
    link_pattern = r'\[([^\]]*?)\]\(([^\)]*?)\)'
    link_replacement = r'<a href="\2">\1</a>'
    text = re.sub(link_pattern, link_replacement, text)
    bold_pattern = r'\*{2}([^\*]+?)\*{2}'
    bold_replacement = r'<span class="text--bold">\1</span>'
    text = re.sub(bold_pattern, bold_replacement, text)
    italic_pattern = r'[\*_]([^\*_]+?)[\*_]{2}'
    italic_replacement = r'<span class="text--em">\1</span>'
    text = re.sub(italic_pattern, italic_replacement, text)
    # Use html.parser, because lxml-xml handles strings not wrapped in content a
    # fussily.
    return BeautifulSoup(text, 'html.parser')


def update_content(content_soup, content_files):
    dc_identifier = content_soup.find('dc:identifier', {'id': 'BookId'})
    if dc_identifier:
        dc_identifier.string = EPUB_ID
    def rem_item(id_):
        item = content_soup.find('item', {'id': id})
        itemref = content_soup.find('itemref', {'idref': id})
        # TODO: Delete item and ref
    unneeded_items = ['colophon', 'dedication', 'preface', 'chapter-01',
        'conclusion', 'notes']
    for i in unneeded_items:
        rem_item(i)
    # TODO: Add items for every content_file.
    # TODO: Remove unneeded guid references and redefine Content reference to first page.

    return content_soup


if __name__ == '__main__':
    main()

