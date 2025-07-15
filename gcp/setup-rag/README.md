# RAG Engine Setup

This directory contains the necessary scripts and documentation to set up the Retrieval-Augmented Generation (RAG) components on Google Cloud Platform (GCP) using the **Vertex AI RAG Engine**.

## Prerequisites

Before proceeding, ensure you have:
-   A Google Cloud Project configured.
-   The `gcloud` CLI authenticated and configured for your project.
-   The following GCP APIs enabled in your project:
    -   Vertex AI API (`aiplatform.googleapis.com`)
    -   Cloud Storage API (`storage.googleapis.com`)
-   The service account or user executing the script must have the following IAM roles:
    -   `Vertex AI User` (`roles/aiplatform.user`)
    -   `Storage Object Viewer` (`roles/storage.objectViewer`) to read files from the bucket.
-   Your HTML corpus files uploaded to a Google Cloud Storage (GCS) bucket. The name of this bucket should be configured in `.env` as `GCS_BUCKET_NAME`.
-   Python 3.8 or higher.

## Configuration

All GCP-related configurations for the RAG setup are managed in the `.env` file located in this directory (`.env`).

```bash
# Example .env content:
# GOOGLE_CLOUD_PROJECT="fra-ai-testing-noprod"
# VERTEX_AI_REGION="europe-west3"          # Specific region for Vertex AI APIs
# GCS_BUCKET_NAME="mts-trusted-services-td-corpus"     # e.g., ask-dt-corpus-bucket
# RAG_CORPUS_ID="your-rag-corpus-id"         # This will be automatically populated by the setup script
```

---

## Setup Steps

This section details how to use the `setup_rag.py` script to create and populate your RAG Corpus.

### `setup_rag.py` Script Overview

The `setup_rag.py` script is a Python utility designed to automate the interaction with the Vertex AI RAG Engine API. It provides two main commands:

*   `create-corpus`: Creates a new RAG Corpus in your specified Vertex AI region.
*   `import-files`: Imports HTML files from a GCS bucket into an existing RAG Corpus, triggering the automatic chunking, embedding, and indexing process.

### Step 1: Install Dependencies

The script requires the Google Cloud AI Platform and `python-dotenv` libraries. A `requirements.txt` file is provided in this directory.

```bash
pip install -r requirements.txt
```

### Step 2: Create the RAG Corpus

This command creates a new, empty RAG Corpus in Vertex AI. You need to run this only once per corpus.

```bash
python setup_rag.py create-corpus --display-name="Your Corpus Display Name"
```

*   **`--display-name` (optional):** A human-readable name for your corpus. Defaults to "new-rag-corpus".

Upon successful creation, the script will output the **Corpus Name** (e.g., `projects/YOUR_PROJECT_NUMBER/locations/YOUR_REGION/ragCorpora/YOUR_CORPUS_ID`) and the **numeric Corpus ID**. The script will automatically update your `.env` file with the `RAG_CORPUS_ID`.

### Step 3: Import Files into the Corpus

Once the corpus is created and its ID is configured in `.env` (automatically by the `create-corpus` command), use this command to import your HTML files from the GCS bucket into the RAG Corpus. This process triggers the full processing pipeline (chunking, embedding, indexing) on the RAG Engine.

```bash
python setup_rag.py import-files --chunk-size=500
```

*   **`--chunk-size` (optional):** The desired size of each text chunk in characters. Defaults to `500`. A smaller `chunk-size` can improve precision for very specific queries, while a larger `chunk-size` might be more suitable for long documents and more general queries. Experiment to find the optimal value for your data. The RAG Engine will handle the actual chunking based on this hint.

This command will start the import process in the background. It can take some time depending on the volume of your data. You can monitor the progress in the GCP Console under **Vertex AI -> RAG Engine**.

#### Manual Alternative (GCP Console)

If you prefer a visual interface for creating the corpus and importing documents:

1.  **Navigate to Vertex AI -> RAG Engine**
    *   In the Google Cloud Console, go to the "Vertex AI" section.
    *   In the navigation pane, find "RAG Engine".

2.  **Create a New Corpus**
    *   Click on **"Create Corpus"**.
    *   **Name**: Enter your desired display name (e.g., `mts-ts-td-corpus`).
    *   Click **"Create"**.

3.  **Import Documents**
    *   Once the corpus is created, select it from the list.
    *   Go to the **"Documents"** or **"Files"** tab.
    *   Click **"Import Documents"**.
    *   **Source**: Select **"Google Cloud Storage"**.
    *   **GCS URI**: Enter the path to your files, e.g., `gs://mts-trusted-services-td-corpus/`.
    *   Click **"Import"**.

## Troubleshooting

Here are some common issues and how to address them:

*   **`Permission denied` or `API not enabled`:**
    *   Verify that the necessary IAM permissions are granted to the service account or user executing the script.
    *   Ensure that all required GCP APIs (Vertex AI API, Cloud Storage API) are enabled in your Google Cloud Project. You can check and enable them in the GCP Console.
*   **`Bucket not found`:**
    *   Double-check that the `GCS_BUCKET_NAME` in your `.env` file is correct and that the specified Google Cloud Storage bucket exists and is accessible.
*   **Import process status:**
    *   The `import-files` command initiates an asynchronous operation. To monitor its progress and status, navigate to **Vertex AI -> RAG Engine** in the GCP Console, select your corpus, and go to the "Documents" tab.

## Project Structure

The directory should have the following structure:

```
.
├── .env                  # Environment variables configuration file
├── README.md             # This documentation file
├── requirements.txt      # Python dependencies
└── setup_rag.py          # The automation script
```

## Next Steps

Once your RAG corpus is created and the files are successfully imported and processed, it is ready to be used with a RAG model in Vertex AI. Refer to the official Vertex AI documentation for details on how to integrate your RAG corpus with your applications and models for enhanced retrieval-augmented generation capabilities.