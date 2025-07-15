import os
import sys
import re
import glob
import json

from bs4 import BeautifulSoup
from markdownify import markdownify as md
from utils import generate_clean_filename, get_html_title

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
    """Removes useless link tags and cleans link text from the HTML before conversion."""
    for a in soup.find_all('a'):
        # Clean link text: remove special characters and newlines
        cleaned_text = re.sub(r'[^\w\s-]', '', a.get_text(strip=True)).replace('\n', ' ').strip()
        if not cleaned_text:
            a.decompose() # Remove if text becomes empty after cleaning
        else:
            a.string = cleaned_text # Update the link text
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
        # Use filename as title if no title is found in HTML
        base_name = os.path.basename(html_file_path)
        title = os.path.splitext(base_name)[0]
        print(f"Warning: No title found in '{html_file_path}'. Using filename as title: '{title}'")

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

    def filter_content_divs(tag):
        if tag.name == 'div':
            # Check for data-sp-feature-tag
            feature_tag = tag.get('data-sp-feature-tag')
            if feature_tag and (feature_tag == 'Rich Text Editor' or feature_tag.startswith('QuickLinksWebPart')):
                return True
            # Check for data-viewport-id
            viewport_id = tag.get('data-viewport-id')
            if viewport_id and viewport_id.startswith('CanvasImg'):
                return True
        return False

    content_divs = soup.find_all(filter_content_divs)
    if not content_divs:
        print(f"Warning: No relevant content divs found in '{html_file_path}'. Content may be incomplete.")

    combined_html = ''.join(str(div) for div in content_divs)
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
    OUTPUT_DIR = "./markdown_output"
    
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
            convert_file(html_file, OUTPUT_DIR, config, force_overwrite)
    elif specific_file:
        print(f"Processing specific file: '{specific_file}' (overwrite enabled)...")
        convert_file(specific_file, OUTPUT_DIR, config, force_overwrite=True)
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
