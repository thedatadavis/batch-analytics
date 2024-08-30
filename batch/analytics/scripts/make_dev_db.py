import os
import shutil

# Define the paths
script_dir = os.path.dirname(os.path.abspath(__file__))
project_root = os.path.dirname(script_dir)
data_dir = os.path.join(project_root, "data")
source_db = os.path.join(data_dir, "batch.duckdb")
destination_db = os.path.join(data_dir, "dev-batch.duckdb")


try:
    # Ensure the data directory exists
    os.makedirs(data_dir, exist_ok=True)

    # Check if the source database exists
    if not os.path.exists(source_db):
        raise FileNotFoundError(f"Source database not found: {source_db}")

    # Copy the database file
    shutil.copy2(source_db, destination_db)

    print(f"Successfully duplicated {source_db} to {destination_db}")

except Exception as e:
    print(f"An error occurred: {e}")