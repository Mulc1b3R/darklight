import urllib.parse
import requests

def main():
    # Get the keyword from the user input
    keyword = input("Enter keyword: ")

    # URL string template
    base_url = "https://ahmia.fi/search/?q="
    url = base_url + urllib.parse.quote(keyword)

    # Make an HTTP GET request to the URL
    response = requests.get(url)

    if response.status_code == 200:
        # Save the HTML content to a file
        with open("input.html", "w", encoding="utf-8") as html_file:
            html_file.write(response.text)
            print(f"HTML content saved to 'input.html' for keyword: {keyword}")
    else:
        print(f"Failed to retrieve search results. Status Code: {response.status_code}")

if __name__ == "__main__":
    main()
