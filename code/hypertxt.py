import requests
# Change standard output encoding
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Your code with the print statement causing the UnicodeEncodeError
print('Your problematic text containing the Unicode character \u2248')

# Function to fetch HTML content of onion URL
def fetch_onion_html(onion_url):
    session = requests.session()
    session.proxies = {'http': 'socks5h://localhost:9050', 'https': 'socks5h://localhost:9050'}
    
    response = session.get(onion_url)
    
    return response.text


# Main function to copy HTML content to index.html with 'utf-8' encoding
def copy_onion_html(onion_url):
    html_content = fetch_onion_html(onion_url)
    
    with open('index.html', 'w', encoding='utf-8') as file:  # Open file with 'utf-8' encoding
        file.write(html_content)

# Add yr onion URL - e.g 'http://zqktlwi4fecvo6ri.onion/wiki/index.php/Main_Page'
onion_url = 'http://darkobds5j7xpsncsexzwhzaotyc4sshuiby3wtxslq5jy2mhrulnzad.onion/listing-category/hacking-counterfeits/'

copy_onion_html(onion_url)