import re
from bs4 import BeautifulSoup

def generate_clean_filename(title):
    """Generates a clean, URL-friendly filename from a title."""
    filename = title.lower()
    filename = re.sub(r'[\s\W_]+', '-', filename, flags=re.UNICODE)
    return filename.strip('-')

def get_html_title(html_content):
    """Extracts the page title from the HTML content."""
    soup = BeautifulSoup(html_content, 'html.parser')
    title_tag = soup.find(id='title_text')
    if title_tag:
        return title_tag.get_text(strip=True)
    return None
