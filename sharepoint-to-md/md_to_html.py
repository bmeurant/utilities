import os
import markdown
import argparse

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

        base_md_filename = os.path.basename(md_full_path)
        html_output_filename = base_md_filename.replace(".md", ".html")
        files_to_process.append((md_full_path, html_output_filename))

    else:
        mode = "forcing overwrite" if force_overwrite else "skipping existing"
        print(f"Processing all Markdown files in '{MARKDOWN_INPUT_DIR}' ({mode})...")
        # All files mode
        for md_filename in os.listdir(MARKDOWN_INPUT_DIR):
            if md_filename.endswith(".md"):
                md_full_path = os.path.join(MARKDOWN_INPUT_DIR, md_filename)
                html_output_filename = md_filename.replace(".md", ".html")
                files_to_process.append((md_full_path, html_output_filename))

    for md_full_path, html_output_filename in files_to_process:
        html_filepath = os.path.join(HTML_OUTPUT_DIR, html_output_filename)

        should_skip = False
        if os.path.exists(html_filepath):
            if is_single_file_mode:
                # In single file mode, always overwrite, so never skip if file exists
                should_skip = False
            elif not force_overwrite:
                # In all files mode, skip if file exists and --force is not used
                should_skip = True
                print(f"Skipping '{md_full_path}': HTML file already exists. Use --force to overwrite.")

        if should_skip:
            continue

        try:
            with open(md_full_path, "r", encoding="utf-8") as md_file:
                md_content = md_file.read()

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

