import os
import json

# Function to list onion URLs from JSON files in the data folder along with file names
def show_data_folder_directory():
    path = "data/"
    file_list = os.listdir(path)

    with open("data.html", "w", encoding="utf-8") as file:
        file.write("<!DOCTYPE html>\n<html>\n<head>\n<title>Data Folder Directory</title>\n</head>\n<body>\n<h1>Data Folder Directory</h1>\n<ul>\n")
        
        for filename in file_list:
            if filename.endswith('.json'):
                with open(os.path.join(path, filename), 'r', encoding='utf-8') as json_file:
                    data = json.load(json_file)
                    for item in data:
                        if 'url' in item:
                            url = item['url']
                            file.write(f"<li>{filename}: <a href=\"{url}\">{url}</a></li>\n")
        
        file.write("</ul>\n</body>\n</html>")

# Call the function to read JSON files, extract onion URLs, and create hyperlinks with corresponding file names in data.html
show_data_folder_directory()