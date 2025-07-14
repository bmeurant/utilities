# SharePoint to Markdown Converter

This script converts HTML pages exported from SharePoint into clean, readable Markdown files.

It extracts the main title and the content from the rich text editor sections of a SharePoint page and generates a Markdown file with a clean filename based on the page title.

## Prerequisites

- Python 3.x
- The script relies on the following Python libraries: `beautifulsoup4` and `markdownify`.

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

4.  **Configure SharePoint Base URL (Optional but Recommended):**
    To convert relative SharePoint links (e.g., `/sites/AAD238/...`) into absolute URLs in the generated Markdown, you can create a `config.json` file in the root directory of the project.

    **Important:** This file may contain sensitive information (like internal SharePoint URLs) and is already included in the `.gitignore` file to prevent accidental commits.

    **Example `config.json` content:**
    ```json
    {
      "sharepoint_base_url": "https://your-sharepoint-instance.com"
    }
    ```
    If `config.json` is not found, is empty, or if `sharepoint_base_url` is not specified, the script will proceed, but relative links will remain unchanged in the Markdown output.

## How to Use

### 1. Extract HTML from SharePoint

Before running the script, you need to get the HTML content from your SharePoint page:

1.  Open the desired SharePoint page in your web browser.
2.  Open the developer tools by pressing **F12**.
3.  In the 'Elements' or 'Inspector' tab, find the main application container `div`. You can search for:
    ```html
    <div class="SPPageChrome-app"
    ```
4.  Right-click on this `div` and select "Copy" -> "Copy outerHTML".
5.  Create a new `.html` file inside the `sources` directory (e.g., `sources/my-page.html`).
6.  Paste the copied HTML content into this new file and save it.

### 2. Run the Conversion Script

The script offers several modes of operation. All generated Markdown files are saved into the **`output`** directory.

#### Convert a Single File

This will process a specific file and **always overwrite** the destination file if it exists in the `output` directory. You can provide just the filename (if it's in the `sources` directory) or a full path to the file.

**Syntax:**
```bash
# If the file is in the sources/ directory
python html_to_md.py <your_filename.html>

# Or provide a full path
python html_to_md.py <path/to/your_file.html>
```

**Examples:**
```bash
# This will process sources/plans-for-securing-production.html
python html_to_md.py plans-for-securing-production.html

# This does the same thing
python html_to_md.py sources/plans-for-securing-production.html
```

#### Convert All Files

This will process all `.html` files in the `sources` directory.

-   **Default Mode (Skip Existing):** If a corresponding Markdown file already exists in the `output` directory, the script will skip it.

    **Syntax:**
    ```bash
    python html_to_md.py
    ```
    or
    ```bash
    python html_to_md.py all
    ```

-   **Force Overwrite Mode:** This will process all files and **overwrite** any existing Markdown files in the `output` directory.

    **Syntax:**
    ```bash
    python html_to_md.py all --force
    ```

## How It Works

-   **Title Extraction:** The script looks for an element with `id="title_text"` to use as the main page title (H1 in Markdown).
-   **Filename Generation:** The output filename is generated from this title (e.g., "My Awesome Page" becomes `my-awesome-page.md`). The resulting file is placed in the `output` directory.
-   **Content Extraction:** It finds all `div` elements with the attribute `data-sp-feature-tag="Rich Text Editor"` and combines their content.
-   **Link Processing:** Relative SharePoint links (starting with `/sites/`) are converted to absolute URLs using the `sharepoint_base_url` defined in `config.json`. If `config.json` is not present or configured, links remain relative.
-   **Conversion:** The extracted HTML is converted to Markdown, preserving headings, lists, bold/italic text, and links.
-   **Cleanup:** Unnecessary link artifacts are removed by cleaning the HTML before conversion.
