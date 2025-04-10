import requests
from bs4 import BeautifulSoup
import json

def extract_data(url):
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}
    
    session = requests.session()
    session.proxies = {'http': 'socks5h://localhost:9050', 'https': 'socks5h://localhost:9050'}
    
    response = session.get(url, headers=headers)

    soup = BeautifulSoup(response.text, 'html.parser')

    title = soup.title.text if soup.title else ""
    description = soup.find('meta', attrs={'name': 'description'})['content'] if soup.find('meta', attrs={'name': 'description'}) else ""
    txt_sample = soup.get_text()

    data = {
        "content": txt_sample,
        "description": description,
        "title": title,
        "url": url
    }

    return data

def save_json_file(data, title):
    lowercase_title = title.lower().replace(" ", "")  # Convert title to lowercase and remove spaces
    with open(f"{lowercase_title}.json", 'w') as f:
        json.dump(data, f, indent=4)

def main():
    with open('onion_urls.txt', 'r') as f:
        urls = f.read().splitlines()

    for url in urls:
        data = extract_data(url)
        save_json_file([data], data["title"])

if __name__ == "__main__":
    main()