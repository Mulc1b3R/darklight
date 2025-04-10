import os
import json
from bs4 import BeautifulSoup

def extract_data(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    
    title = soup.find('h4').a.get_text().strip()
    url = soup.find('cite').get_text().strip()
    description = soup.find('p').get_text().strip()
    content = soup.find('span', class_='lastSeen').get_text().strip()
    
    data = [
        {
            "content": content,
            "description": description,
            "title": title,
            "url": url
        }
    ] 
    
    return data

def save_json_file(data, title):
    new_title = ' '.join(title.lower().split())  # Insert spaces between words and convert to lowercase
    try:
        folder_name = 'data'
        os.makedirs(folder_name, exist_ok=True)  # Create 'data' folder if it doesn't exist
        with open(os.path.join(folder_name, f"{new_title}.json"), 'w') as f:
            json.dump(data, f, indent=4)
            print(f"Saved JSON file for '{new_title}' in the '{folder_name}' folder.")
    except OSError as e:
        print(f"Error saving JSON file for {new_title}: {e}")

def main():
    with open('input.html', 'r', encoding='utf-8') as f:
        html_data = f.read()
    
    soup = BeautifulSoup(html_data, 'html.parser')
    entries = soup.find_all('li', class_='result')
    
    for entry in entries:
        try:
            data = extract_data(str(entry))
            title = data[0]["title"]  # Access the 'title' key of the first dictionary in the data list
            save_json_file(data[0], title)  # Save the data dictionary at index 0
        except Exception as e:
            print(f"Error processing entry: {e}. Moving to the next entry.")

if __name__ == "__main__":
    main()