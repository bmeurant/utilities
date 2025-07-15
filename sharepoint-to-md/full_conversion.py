import os
import sys
import subprocess
import argparse
from utils import generate_clean_filename, get_html_title

def run_conversion_step(script_path, args):
    """Runs a conversion script as a subprocess. Its output is already printed by the subprocess itself."""
    command = [sys.executable, script_path] + args
    process = subprocess.run(command, capture_output=False, text=True, check=False) # Set capture_output to False
    if process.stderr:
        print(process.stderr, end='')
    return process.returncode == 0

def main():
    parser = argparse.ArgumentParser(description="Perform end-to-end conversion from SharePoint HTML to clean HTML via Markdown.")
    parser.add_argument(
        "--force",
        action="store_true",
        help="Force overwrite existing Markdown and HTML files."
    )

    # Parse only the --force argument using argparse
    # Other arguments (file path or 'all') will be handled manually via sys.argv
    args, unknown_args = parser.parse_known_args()

    html_to_md_script = "html_to_md.py"
    md_to_html_script = "md_to_html.py"
    
    source_dir = "sources"
    markdown_output_dir = "markdown_output"

    process_all = False
    specific_file = None
    force_overwrite = args.force # Get force from argparse

    # Manual parsing of positional arguments (file path or 'all')
    if len(unknown_args) == 0:
        # No positional argument, default to process all
        process_all = True
    elif len(unknown_args) == 1:
        arg = unknown_args[0]
        if arg == 'all':
            process_all = True
        else:
            # Assume it's a specific file path
            if os.path.isfile(arg):
                specific_file = arg
            else:
                specific_file = os.path.join(source_dir, arg)
            # For single file, force_overwrite is always True, regardless of --force flag
            force_overwrite = True 
    else:
        print("Invalid arguments. Usage:")
        print("  python full_conversion.py                       (process all, skip existing)")
        print("  python full_conversion.py all                   (process all, skip existing)")
        print("  python full_conversion.py all --force           (process all, force overwrite)")
        print("  python full_conversion.py <filename.html>       (process one file, force overwrite)")
        print("  python full_conversion.py <path/to/file.html>   (process one file, force overwrite)")
        sys.exit(1)

    if process_all:
        # Step 1: HTML to Markdown (all files)
        html_to_md_args = ["all"] + (["--force"] if force_overwrite else [])
        if not run_conversion_step(html_to_md_script, html_to_md_args):
            print(f"Error during HTML to Markdown conversion for all files. Aborting.")
            sys.exit(1)

        # Step 2: Markdown to HTML (all files)
        # Step 2: Markdown to HTML (all files)
        md_to_html_args = ["all"] + (["--force"] if force_overwrite else [])
        if not run_conversion_step(md_to_html_script, md_to_html_args):
            print(f"Error during Markdown to HTML conversion for all files. Aborting.")
            sys.exit(1)
    
    elif specific_file:
        # Single file conversion
        html_file_path = specific_file

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
                base_name = os.path.basename(html_file_path)
                title = os.path.splitext(base_name)[0]
                print(f"Warning: No title found in '{html_file_path}'. Using filename as title: '{title}'")
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
    
    print("Full conversion process completed.")

if __name__ == "__main__":
    main()
