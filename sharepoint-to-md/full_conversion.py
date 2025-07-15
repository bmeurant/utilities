import os
import sys
import subprocess
import argparse
from utils import generate_clean_filename, get_html_title

def run_conversion_step(script_path, args):
    """Runs a conversion script as a subprocess and prints its output."""
    command = [sys.executable, script_path] + args
    process = subprocess.run(command, capture_output=True, text=True, check=False)
    print(process.stdout, end='')
    if process.stderr:
        print(process.stderr, end='')
    return process.returncode == 0

def main():
    parser = argparse.ArgumentParser(description="Perform end-to-end conversion from SharePoint HTML to clean HTML via Markdown.")
    parser.add_argument(
        "input_path",
        nargs="?",
        help="Optional: The path to a specific HTML file to convert (e.g., 'my-page.html' or 'sources/my-page.html' or '/full/path/to/my-page.html'). If omitted, all .html files in the default input directory ('./sources') will be converted."
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Force overwrite existing Markdown and HTML files."
    )

    args = parser.parse_args()

    html_to_md_script = "html_to_md.py"
    md_to_html_script = "md_to_html.py"
    
    source_dir = "sources"
    markdown_output_dir = "markdown_output"

    if args.input_path:
        # Single file conversion
        html_file_path = args.input_path
        if not os.path.isabs(html_file_path):
            if not os.path.exists(html_file_path): # Check if it's a relative path from CWD
                html_file_path = os.path.join(source_dir, args.input_path)

        if not os.path.exists(html_file_path):
            print(f"Error: HTML file not found: {html_file_path}")
            sys.exit(1)
        
        if not html_file_path.endswith(".html"):
            print(f"Error: Provided file is not an HTML file: {html_file_path}")
            sys.exit(1)

        # Predict the Markdown filename
        try:
            with open(html_file_path, 'r', encoding='utf-8') as f:
                html_content = f.read()
            title = get_html_title(html_content)
            if not title:
                print(f"Warning: No title found in '{html_file_path}'. Cannot predict Markdown filename. Skipping.")
                sys.exit(1)
            predicted_md_filename = generate_clean_filename(title) + '.md'
            predicted_md_path = os.path.join(markdown_output_dir, predicted_md_filename)
        except Exception as e:
            print(f"Error predicting Markdown filename for '{html_file_path}': {e}")
            sys.exit(1)

        print(f"Processing specific file: '{html_file_path}' (overwrite enabled)...")

        # Step 1: HTML to Markdown
        if not run_conversion_step(html_to_md_script, [html_file_path]):
            print(f"Error during HTML to Markdown conversion for '{html_file_path}'. Aborting.")
            sys.exit(1)

        # Step 2: Markdown to HTML
        if not run_conversion_step(md_to_html_script, [predicted_md_path]):
            print(f"Error during Markdown to HTML conversion for '{predicted_md_path}'. Aborting.")
            sys.exit(1)

    else:
        # All files conversion
        force_arg = ["--force"] if args.force else []
        mode_desc = "forcing overwrite" if args.force else "skipping existing"
        print(f"Processing all HTML files in '{source_dir}' ({mode_desc})...")

        # Step 1: HTML to Markdown (all files)
        if not run_conversion_step(html_to_md_script, ["all"] + force_arg):
            print(f"Error during HTML to Markdown conversion for all files. Aborting.")
            sys.exit(1)

        # Step 2: Markdown to HTML (all files)
        print(f"Processing all Markdown files in '{markdown_output_dir}' ({mode_desc})...")
        if not run_conversion_step(md_to_html_script, force_arg):
            print(f"Error during Markdown to HTML conversion for all files. Aborting.")
            sys.exit(1)
    
    print("Full conversion process completed.")

if __name__ == "__main__":
    main()
