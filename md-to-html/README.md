# Markdown to HTML Converter

This script converts Markdown files into clean HTML files. The converted HTML files are saved into the `html_output` directory.

## Prerequisites

- Python 3.x
- The script relies on the following Python libraries: `markdown`.

## Setup

1.  **Clone the repository or download the script.**

2.  **Create and activate a virtual environment (recommended):**
    ```bash
    python3 -m venv .venv
    source .venv/bin/activate
    ```

3.  **Install the required dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

## How to Use

The script offers several modes of operation. All generated HTML files are saved into the **`html_output`** directory.

### Convert a Single File

This will process a specific Markdown file and **always overwrite** the destination HTML file if it exists in the `html_output` directory. You can provide just the filename (if it's in the `sources_dir` directory) or a full path to the file.

**Syntax:**
```bash
# If the file is in the sources_dir/ directory
python md_to_html.py <your_filename.md>

# Or provide a full path
python md_to_html.py <path/to/your_file.md>
```

**Examples:**
```bash
# This will process markdown_output/plans-for-securing-production.md
python md_to_html.py plans-for-securing-production.md --sources_dir markdown_output

# This does the same thing
python md_to_html.py markdown_output/plans-for-securing-production.md
```

### Convert All Files

This will process all `.md` files in the `sources_dir` directory.

-   **Default Mode (Skip Existing):** If a corresponding HTML file already exists in the `html_output` directory, the script will skip it.

    **Syntax:**
    ```bash
    python md_to_html.py
    ```

-   **Force Overwrite Mode:** This will process all files and **overwrite** any existing HTML files in the `html_output` directory.

    **Syntax:**
    ```bash
    python md_to_html.py --force
    ```

-   **Custom Sources Directory:** You can specify a different sources directory using the `--sources_dir` argument. By default, the script looks for files in the `markdown_output` directory.

    **Syntax:**
    ```bash
    python md_to_html.py all --sources_dir <your_custom_directory>
    ```

### How It Works

-   **Input Directory:** Reads all `.md` files from the `sources_dir` directory (defaults to `./markdown_output`).
-   **Output Directory:** Creates an `html_output` directory if it doesn't exist.
-   **Conversion:** Uses the `markdown` library to convert each Markdown file to HTML.
-   **Filename Generation:** The output filename is generated from the H1 title found in the Markdown content. If no H1 title is present, a cleaned version of the Markdown filename is used. The `.md` extension is converted to `.html` for the output files.
