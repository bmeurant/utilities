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

The script offers several modes of operation. All generated Markdown files are saved into the **`markdown_output`** directory.

#### Convert a Single File

This will process a specific file and **always overwrite** the destination file if it exists in the `markdown_output` directory. You can provide just the filename (if it's in the `sources` directory) or a full path to the file.

**Syntax:**
```bash
# If the file is in the sources/ directory
python sharepoint_to_md.py <your_filename.html>

# Or provide a full path
python sharepoint_to_md.py <path/to/your_file.html>
```

**Examples:**
```bash
# This will process sources/plans-for-securing-production.html
python sharepoint_to_md.py plans-for-securing-production.html

# This does the same thing
python sharepoint_to_md.py sources/plans-for-securing-production.html
```

#### Convert All Files

This will process all `.html` files in the `sources` directory.

-   **Default Mode (Skip Existing):** If a corresponding Markdown file already exists in the `markdown_output` directory, the script will skip it.

    **Syntax:**
    ```bash
    python sharepoint_to_md.py
    ```
    or
    ```bash
    python sharepoint_to_md.py all
    ```

-   **Force Overwrite Mode:** This will process all files and **overwrite** any existing Markdown files in the `markdown_output` directory.

    **Syntax:**
    ```bash
    python sharepoint_to_md.py all --force
    ```

-   **Custom Sources Directory:** You can specify a different sources directory using the `--sources_dir` argument. By default, the script looks for files in the `sources` directory.

    **Syntax:**
    ```bash
    python sharepoint_to_md.py all --sources_dir <your_custom_directory>
    ```

## How It Works

-   **Title Extraction:** The script looks for an element with `id="title_text"` to use as the main page title (H1 in Markdown). **If no title is found, the script will use the source HTML filename (without its extension) as the title.**
-   **Filename Generation:** The output filename is generated from this title (e.g., "My Awesome Page" becomes `my-awesome-page.md`). The resulting file is placed in the `markdown_output` directory.
-   **Content Extraction:** It finds all `div` elements with the attribute `data-sp-feature-tag` set to `"Rich Text Editor"` or starting with `"QuickLinksWebPart"`, **as well as `div` elements with `data-viewport-id` starting with `"CanvasImg"`**, and combines their content.
-   **Link Processing:** Relative SharePoint links (starting with `/sites/`) are converted to absolute URLs using the `sharepoint_base_url` defined in `config.json`. If `config.json` is not present or configured, links remain relative. **Additionally, special characters and newlines are removed from link text during this process.**
-   **Conversion:** The extracted HTML is converted to Markdown, preserving headings, lists, bold/italic text, and links.
-   **Cleanup:** Unnecessary link artifacts are removed by cleaning the HTML before conversion.

## Markdown to HTML Conversion

For converting the generated Markdown files back to HTML, please refer to the [md-to-html](https://github.com/bmeurant/utilities/blob/main/md-to-html/README.md) utility.

A setup script is provided to fetch the latest version of the `md_to_html.py` script.

```bash
./setup.sh
```

## End-to-End Conversion (full_conversion.py)

This script provides a complete end-to-end conversion workflow: from raw SharePoint HTML (in the `sources` directory) to clean Markdown (in `markdown_output`), and then to clean HTML (in `html_output`). It orchestrates the `html_to_md.py` and `md_to_html.py` scripts.

### How to Use

**Important:** This script uses `md_to_html.py`, which is fetched from another project. Before running the end-to-end conversion, you must download this script using `setup.sh`.

1.  **Make the setup script executable** (if you haven't already):
    ```bash
    chmod +x setup.sh
    ```

2.  **Run the script** to download `md_to_html.py`:
    ```bash
    ./setup.sh
    ```

Once `md_to_html.py` is present, you can run the full conversion. This script supports the same command-line options as `sharepoint_to_md.py` for consistency.

#### Convert a Single File

This will process a specific HTML file from the `sources` directory, convert it to Markdown, and then convert the resulting Markdown to HTML. It **always overwrites** the destination Markdown and HTML files if they exist.

**Syntax:**
```bash
# If the file is in the sources/ directory
python full_conversion.py <your_filename.html>

# Or provide a full path
python full_conversion.py <path/to/your_file.html>
```

**Examples:**
```bash
# This will process sources/plans-for-securing-production.html
python full_conversion.py plans-for-securing-production.html

# This does the same thing
python full_conversion.py sources/plans-for-securing-production.html
```

#### Convert All Files

This will process all `.html` files in the `sources` directory, convert them to Markdown, and then convert the resulting Markdown files to HTML.

-   **Default Mode (Skip Existing):** If corresponding Markdown or HTML files already exist, the script will skip them unless `--force` is used.

    **Syntax:**
    ```bash
    python full_conversion.py
    ```
    or
    ```bash
    python full_conversion.py all
    ```

-   **Force Overwrite Mode:** This will process all files and **overwrite** any existing Markdown and HTML files.

    **Syntax:**
    ```bash
    python full_conversion.py all --force
    ```

### How It Works

-   **Orchestration:** Calls `sharepoint_to_md.py` first, then `md_to_html.py`.
-   **Argument Passing:** Passes the relevant arguments (like `--force`) to the underlying scripts.
-   **Filename Prediction:** For single file conversions, it predicts the Markdown filename based on the HTML title (or the source filename if no title is found) to correctly pass it to `md_to_html.py`.