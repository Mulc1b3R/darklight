import requests

url = "https://onionoo.torproject.org/summary"
response = requests.get(url)

if response.status_code == 200:
    with open('tor-api.json', 'w') as file:
        file.write(response.text)
        print("JSON data saved as tor-api.json")
else:
    print("Failed to fetch JSON data")