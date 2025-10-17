import base64
from bs4 import BeautifulSoup

STYLE_PATH = '../../../src/css/custom.css'
CONFIG_PATH = '../../../docusaurus.config.ts'
TITLE_PAGE_PATH = '../../../src/pages/index.tsx'

LOGO_PATH = 'epub-src/OEBPS/img/logo.png'
COVER_IMG_PATH = 'epub-src/OEBPS/img/cover.png'
COVER_PATH = 'epub-src/OEBPS/parts/cover.xhtml'
CONTENT_PATH = 'epub-src/OEBPS/content.opf'

EPUB_ID = 'AF8C59C9-7DBC-4D40-BDEA-2CE8B997C472'


def main():
    # Create SVG cover from assets and config.
    # TODO: Re-enable when cairo runs.
    # cover_svg = create_cover_img()
    # svg2png(bytestring=cover_svg.encode('utf-8'), write_to=COVER_IMG_PATH)

    # Update cover page with alt text.
    with open(COVER_PATH) as f:
        cover_soup = BeautifulSoup(f, 'xml')
    cover_soup = update_cover(cover_soup)
    with open(COVER_PATH, 'w', encoding='utf-8') as f:
        f.write(str(cover_soup))

    # Update content.opf with new files.
    with open(CONTENT_PATH) as f:
        content_soup = BeautifulSoup(f, 'xml')
    content_soup = update_content(content_soup)
    with open(CONTENT_PATH, 'w', encoding='utf-8') as f:
        f.write(str(content_soup))


def create_cover_img():
    background_colour = None
    with open(STYLE_PATH, 'r') as custom_css:
        for line in custom_css:
            line = line.strip()
            if line.startswith('--ifm-color-primary: '):
                background_colour: line[21: -1]

    logo_base64 = None
    with open(LOGO_PATH, 'rb') as img_file:
        base64_bytes = base64.b64encode(img_file.read())
        logo_base64 = base64_bytes.decode('utf-8')

    title = None
    with open(CONFIG_PATH, 'r') as web_config:
        for line in web_config:
            if 'title: ' in line:
                title = line.strip()[7:-1]
    if None == title:
        title = 'H-Group Conventions'

    subtitle = None
    with open(TITLE_PAGE_PATH, 'r') as index_tsx:
        lines = index_tsx.readlines()
        for i in range(len(lines) - 1):
            line = lines[i].strip()
            if line == 'title="Home"':
                nextline = lines[i+1].strip()
                if nextline.startswith('description="'):
                    subtitle = nextline[13:-1]
    if None == subtitle:
        subtitle = 'Strategies for Hanabi, a cooperative card game of logic and reasoning.'

    height=2560
    width=1600
    return (
        f'<?xml version="1.0" encoding="UTF-8" standalone="no"?>'
        f'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}px" viewBox="0 0 {height} {width}" preserveAspectRatio="xMidYMid meet" version="1.1" style="fill-rule:evenodd; clip-rule:evenodd; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:1.5; background-color: #{background_colour};">'
        f'<image href="data:image/png;base64,{logo_base64}" x="{width/2}" y="20" width="100" preserveAspectRatio="xMidYMid meet"/>'
        f'<text x="{width/2}" y="170" font-size="48" fill="black" text-anchor="middle" font-weight="bold">{title}</text>'
        f'<text x="{width/2}" y="220" font-size="24" fill="black" text-anchor="middle">{subtitle}</text>'
        f'</svg>'
    )


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


def update_content(content_soup):
    dc_identifier = content_soup.find('dc:identifier', {'id': 'BookId'})
    if dc_identifier:
        dc_identifier.string = EPUB_ID
    return content_soup


if __name__ == '__main__':
    main()

