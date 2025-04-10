import json
import os

folder_path = "data"

# Check if the folder 'data' exists
if not os.path.exists(folder_path):
    print("Folder 'data' does not exist.")
    exit()

# Iterate through JSON files in the 'data' folder
for filename in os.listdir(folder_path):
    if filename.endswith('.json'):
        file_path = os.path.join(folder_path, filename)
        
        with open(file_path, 'r') as file:
            data = json.load(file)
        
        # Add square brackets to the content of the file
        data_with_brackets = [data]
        
        with open(file_path, 'w') as file:
            json.dump(data_with_brackets, file, indent=4)
        
        print(f"Square brackets added to '{filename}' JSON file.")