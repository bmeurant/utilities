import os
import markdown
import argparse
import re
from utils import generate_clean_filename

MARKDOWN_INPUT_DIR = "./markdown_output"
HTML_OUTPUT_DIR = "./html_output"

def convert_md_to_html(input_path=None, force_overwrite=False):
    os.makedirs(HTML_OUTPUT_DIR, exist_ok=True)

    files_to_process = [] # List of (md_full_path, html_output_filename) tuples
    is_single_file_mode = False

    if input_path:
        is_single_file_mode = True
        print(f"Processing specific file: '{input_path}' (overwrite enabled)...")
        # Single file mode
        if os.path.isabs(input_path):
            md_full_path = input_path
        elif os.path.exists(input_path): # Check if it's a relative path from CWD
            md_full_path = input_path
        else: # Assume it's a filename within MARKDOWN_INPUT_DIR
            md_full_path = os.path.join(MARKDOWN_INPUT_DIR, input_path)

        if not os.path.exists(md_full_path):
            print(f"Error: Markdown file not found: {md_full_path}")
            return

        if not md_full_path.endswith(".md"):
            print(f"Error: Provided file is not a Markdown file: {md_full_path}")
            return

        files_to_process.append((md_full_path, None)) # HTML filename will be determined later

    else:
        mode = "forcing overwrite" if force_overwrite else "skipping existing"
        print(f"Processing all Markdown files in '{MARKDOWN_INPUT_DIR}' ({mode})...")
        # All files mode
        for md_filename in os.listdir(MARKDOWN_INPUT_DIR):
            if md_filename.endswith(".md"):
                md_full_path = os.path.join(MARKDOWN_INPUT_DIR, md_filename)
                files_to_process.append((md_full_path, None)) # HTML filename will be determined later

    for i, (md_full_path, _) in enumerate(files_to_process):
        try:
            with open(md_full_path, "r", encoding="utf-8") as md_file:
                md_content = md_file.read()

            # Try to extract H1 title from Markdown content
            h1_match = re.search(r'^#\s*(.+?)\s*$\n', md_content, re.MULTILINE)
            if h1_match:
                title_for_filename = h1_match.group(1)
            else:
                # Fallback to cleaned Markdown filename if no H1 is found
                title_for_filename = os.path.basename(md_full_path).replace(".md", "")
            
            clean_html_filename = generate_clean_filename(title_for_filename) + ".html"
            html_filepath = os.path.join(HTML_OUTPUT_DIR, clean_html_filename)

            if os.path.exists(html_filepath):
                if is_single_file_mode:
                    # In single file mode, always overwrite
                    pass
                elif not force_overwrite:
                    # In all files mode, skip if file exists and --force is not used
                    print(f"Skipping '{md_full_path}': HTML file '{html_filepath}' already exists. Use --force to overwrite.")
                    continue

            html_content = markdown.markdown(md_content)

            with open(html_filepath, "w", encoding="utf-8") as html_file:
                html_file.write(html_content)
            print(f"Successfully converted '{md_full_path}' to '{html_filepath}'")
        except Exception as e:
            print(f"Error converting '{md_full_path}': {e}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Convert Markdown files to HTML.")
    parser.add_argument(
        "input_path",
        nargs="?",
        help="Optional: The path to a specific Markdown file to convert (e.g., 'my-doc.md' or 'output/my-doc.md' or '/full/path/to/my-doc.md'). If omitted, all .md files in the default input directory ('./output') will be converted."
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Force overwrite existing HTML files."
    )

    args = parser.parse_args()

    convert_md_to_html(input_path=args.input_path, force_overwrite=args.force)

