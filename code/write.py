import json
import os

folder_path = "data"
output_file = "passwords.json"

# Check if the folder 'data' exists
if not os.path.exists(folder_path):
    print("Folder 'data' does not exist.")
    exit()

data_to_write = []

# Iterate through JSON files in the 'data' folder
for filename in os.listdir(folder_path):
    if filename.endswith('.json'):
        file_path = os.path.join(folder_path, filename)
        
        with open(file_path, 'r') as file:
            data = json.load(file)
            
            for entry in data:
                data_entry = {
                    "content": entry["content"],
                    "description": entry["description"],
                    "title": entry["title"],
                    "url": entry["url"]
                }
                
                data_to_write.append(data_entry)

# Write the extracted data to 'search.json' in JSON format
with open(output_file, 'w') as output:
    json.dump(data_to_write, output, indent=4)

print(f"Data from 'data' folder has been written to json file.")