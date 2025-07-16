import os
import sys
import subprocess
import argparse
from utils import generate_clean_filename, get_html_title

def run_conversion_step(script_path, args):
    """Runs a conversion script as a subprocess, streaming its output directly."""
    command = [sys.executable, script_path] + args
    process = subprocess.run(command, stdout=sys.stdout, stderr=sys.stderr, text=True, check=False)
    return process.returncode == 0, process.stdout, process.stderr

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

    sharepoint_to_md_script = "sharepoint_to_md.py"
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
        print(f"Starting full conversion for all files...")
        # Step 1: SharePoint HTML to Markdown (all files)
        sharepoint_to_md_args = ["all"] + (["--force"] if force_overwrite else [])
        success, stdout, stderr = run_conversion_step(sharepoint_to_md_script, sharepoint_to_md_args)
        if not success:
            print(f"Error during SharePoint HTML to Markdown conversion for all files. Aborting.\n{stderr}")
            sys.exit(1)
        print(f"SharePoint HTML to Markdown conversion completed for all files.")

        # Step 2: Markdown to HTML (all files)
        md_to_html_args = ["all"] + (["--force"] if force_overwrite else []) + ["--sources_dir", markdown_output_dir]
        success, stdout, stderr = run_conversion_step(md_to_html_script, md_to_html_args)
        if not success:
            print(f"Error during Markdown to HTML conversion for all files. Aborting.\n{stderr}")
            sys.exit(1)
        print(f"Markdown to HTML conversion completed for all files.")
    
    elif specific_file:
        print(f"Starting full conversion for specific file: '{specific_file}'...")
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

        # Step 1: SharePoint HTML to Markdown
        success, stdout, stderr = run_conversion_step(sharepoint_to_md_script, [html_file_path])
        if not success:
            print(f"Error during SharePoint HTML to Markdown conversion for '{html_file_path}'. Aborting.\n{stderr}")
            sys.exit(1)
        if stdout:
            for line in stdout.splitlines():
                print(line)
        print(f"SharePoint HTML to Markdown conversion completed for '{html_file_path}'.")

        # Step 2: Markdown to HTML
        md_to_html_args = [predicted_md_path] + ["--sources_dir", markdown_output_dir]
        success, stdout, stderr = run_conversion_step(md_to_html_script, md_to_html_args)
        if not success:
            print(f"Error during Markdown to HTML conversion for '{predicted_md_path}'. Aborting.\n{stderr}")
            sys.exit(1)
        if stdout:
            for line in stdout.splitlines():
                print(line)
        print(f"Markdown to HTML conversion completed for '{predicted_md_path}'.")
    
    print("Full conversion process completed.")

if __name__ == "__main__":
    main()
