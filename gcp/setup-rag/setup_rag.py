import os
import argparse
from dotenv import load_dotenv, set_key
import vertexai
from vertexai.preview import rag

def init_vertexai(project_id: str, region: str):
    """
    Initializes the Vertex AI SDK.
    """
    print(f"Initializing Vertex AI for project {project_id} in {region}...")
    vertexai.init(project=project_id, location=region)

def create_rag_corpus(display_name: str):
    """
    Creates a new RAG Corpus using the high-level Vertex AI SDK.
    """
    print(f"Creating RAG Corpus '{display_name}'...")
    try:
        rag_corpus = rag.create_corpus(display_name=display_name)
        print(f"Successfully created RAG Corpus.")
        print(f"  - Name: {rag_corpus.name}")
        corpus_id = rag_corpus.name.split('/')[-1]
        set_key(dotenv_path, "RAG_CORPUS_ID", corpus_id)
        print(f"Successfully updated .env with RAG_CORPUS_ID='{corpus_id}'")

    except Exception as e:
        print(f"An error occurred: {e}")

def import_files_to_corpus(project_id: str, location: str, corpus_id: str, gcs_bucket: str, chunk_size: int):
    """
    Imports files from a GCS bucket into a RAG Corpus.
    """
    full_corpus_resource_name = f"projects/{project_id}/locations/{location}/ragCorpora/{corpus_id}"
    print(f"Importing files from gs://{gcs_bucket} into Corpus: {full_corpus_resource_name}...")
    
    gcs_uri = f"gs://{gcs_bucket}/"
    
    try:
        rag.import_files(
            full_corpus_resource_name,
            [gcs_uri],
            chunk_size=chunk_size
        )
        print("Import operation started successfully. This process runs in the background.")
        print("You can monitor the progress in the GCP Console in Vertex AI -> RAG Engine.")

    except Exception as e:
        print(f"An error occurred during import: {e}")

def main():
    # Load environment variables from .env file in the current directory
    load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), '.env'))

    project_id = os.getenv("GOOGLE_CLOUD_PROJECT")
    vertex_ai_region = os.getenv("VERTEX_AI_REGION")
    gcs_bucket = os.getenv("GCS_BUCKET_NAME")
    rag_corpus_id = os.getenv("RAG_CORPUS_ID")

    if not all([project_id, vertex_ai_region]):
        print("Error: GOOGLE_CLOUD_PROJECT and VERTEX_AI_REGION must be set in rag/.env")
        return

    init_vertexai(project_id, vertex_ai_region)

    parser = argparse.ArgumentParser(description="Setup script for Vertex AI RAG Engine using the high-level SDK.")
    subparsers = parser.add_subparsers(dest="command", required=True)

    create_parser = subparsers.add_parser("create-corpus", help="Create a new RAG Corpus.")
    create_parser.add_argument("--display-name", default="new-rag-corpus", help="Display name for the new corpus.")

    import_parser = subparsers.add_parser("import-files", help="Import files from GCS into a RAG Corpus.")
    import_parser.add_argument("--chunk-size", type=int, default=500, help="The size of each chunk in characters.")

    args = parser.parse_args()

    if args.command == "create-corpus":
        create_rag_corpus(args.display_name)
    
    elif args.command == "import-files":
        if not gcs_bucket or not rag_corpus_id:
            print("Error: GCS_BUCKET_NAME and RAG_CORPUS_ID must be set in rag/.env for importing.")
            return
        import_files_to_corpus(project_id, vertex_ai_region, rag_corpus_id, gcs_bucket, args.chunk_size)

if __name__ == "__main__":
    main()