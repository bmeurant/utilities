# Requires: pip install beautifulsoup4 markdownify
import os
import sys
import re
import glob
import json

from bs4 import BeautifulSoup
from markdownify import markdownify as md

CONFIG_FILE = 'config.json'

def load_config():
    """Loads configuration from config.json with error handling and warnings."""
    config = {}
    try:
        with open(CONFIG_FILE, 'r', encoding='utf-8') as f:
            config = json.load(f)
    except FileNotFoundError:
        print(f"Warning: Configuration file '{CONFIG_FILE}' not found. Relative SharePoint links will not be made absolute.")
    except json.JSONDecodeError:
        print(f"Warning: Could not decode JSON from '{CONFIG_FILE}'. Relative SharePoint links will not be made absolute.")
    
    if 'sharepoint_base_url' not in config or not config['sharepoint_base_url']:
        print(f"Warning: 'sharepoint_base_url' not found or empty in '{CONFIG_FILE}'. Relative SharePoint links will not be made absolute.")
        config['sharepoint_base_url'] = "" # Ensure it's an empty string if not set

    return config

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

def process_links(soup, base_url):
    """Finds all links and makes relative SharePoint links absolute."""
    if not base_url:
        return soup
    for a in soup.find_all('a', href=True):
        href = a['href']
        if href.startswith('/sites/'):
            a['href'] = base_url + href
    return soup

def cleanup_html_content(soup):
    """Removes useless link tags from the HTML before conversion."""
    for a in soup.find_all('a'):
        if not a.get_text(strip=True) or a.get_text(strip=True).replace('_', '') == '':
            a.decompose()
    return soup

def convert_file(html_file_path, output_dir, config, force_overwrite=False):
    """
    Converts a single HTML file to Markdown, handling title extraction,
    filename generation, and conditional overwriting.
    """
    try:
        with open(html_file_path, 'r', encoding='utf-8') as f:
            html_content = f.read()
    except FileNotFoundError:
        print(f"Error: HTML file not found at '{html_file_path}'")
        return

    title = get_html_title(html_content)
    if not title:
        print(f"Warning: No title found in '{html_file_path}'. Skipping file.")
        return

    md_file_name = generate_clean_filename(title)
    output_md_path = os.path.join(output_dir, md_file_name + '.md')

    if not force_overwrite and os.path.exists(output_md_path):
        print(f"Skipping '{html_file_path}': Output file '{output_md_path}' already exists.")
        return

    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Process HTML content (links and cleanup)
    base_url = config.get('sharepoint_base_url', '')
    process_links(soup, base_url)
    cleanup_html_content(soup)

    main_title = f"# {title}\n\n"

    rich_text_divs = soup.find_all('div', attrs={'data-sp-feature-tag': 'Rich Text Editor'})
    if not rich_text_divs:
        print(f"Warning: No 'Rich Text Editor' divs found in '{html_file_path}'. Content may be incomplete.")

    combined_html = ''.join(str(div) for div in rich_text_divs)
    markdown_content = md(combined_html, heading_style="ATX", bullets='*')

    final_markdown_content = main_title + markdown_content
    
    # Remove zero-width space characters
    final_markdown_content = final_markdown_content.replace('\u200b', '')

    final_markdown_content = re.sub(r'\n{3,}', '\n\n', final_markdown_content).strip()

    os.makedirs(output_dir, exist_ok=True)
    with open(output_md_path, 'w', encoding='utf-8') as f:
        f.write(final_markdown_content)

    print(f"Successfully converted '{html_file_path}' to '{output_md_path}'")

def main():
    """
    Main function to handle command-line arguments and trigger conversions.
    """
    config = load_config()
    # No sys.exit(1) here, as we want to proceed even if config is missing/invalid

    source_dir = "sources"
    output_dir = "output"
    
    process_all = False
    force_overwrite = False
    specific_file = None

    if len(sys.argv) == 1 or (len(sys.argv) > 1 and sys.argv[1] == 'all'):
        process_all = True
        if len(sys.argv) > 2 and sys.argv[2] == '--force':
            force_overwrite = True
    elif len(sys.argv) == 2:
        arg = sys.argv[1]
        if os.path.isfile(arg):
            specific_file = arg
        else:
            specific_file = os.path.join(source_dir, arg)
        force_overwrite = True
    
    if process_all:
        mode = "forcing overwrite" if force_overwrite else "skipping existing"
        print(f"Processing all HTML files in '{source_dir}' ({mode})...")
        html_files = glob.glob(os.path.join(source_dir, '*.html'))
        if not html_files:
            print("No HTML files found to process.")
            return
        for html_file in html_files:
            convert_file(html_file, output_dir, config, force_overwrite)
    elif specific_file:
        print(f"Processing specific file: '{specific_file}' (overwrite enabled)...")
        convert_file(specific_file, output_dir, config, force_overwrite=True)
    else:
        print("Invalid arguments. Usage:")
        print("  python html_to_md.py                       (process all, skip existing)")
        print("  python html_to_md.py all                   (process all, skip existing)")
        print("  python html_to_md.py all --force           (process all, force overwrite)")
        print("  python html_to_md.py <filename.html>       (process one file, force overwrite)")
        print("  python html_to_md.py <path/to/file.html>   (process one file, force overwrite)")
        sys.exit(1)

if __name__ == "__main__":
    main()
