from bs4 import BeautifulSoup

front_page_title = None
with open('../../../docusaurus.config.ts', 'r') as web_config:
    for line in web_config:
        if 'title: ' in line:
            front_page_title = line.strip()[7:-1]

with open('epub-src/OEBPS/parts/cover.xhtml') as file:
    soup = BeautifulSoup(file, 'xml')

