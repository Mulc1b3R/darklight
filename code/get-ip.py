import json
import requests
import os
import time

# Function to query WHOIS API for a given IP address
def fetch_whois_data(ip_address):
    try:
        api_url = f"http://ip-api.com/json/{ip_address}"
        response = requests.get(api_url)
        response.raise_for_status()  # Raise exception for bad response status
        data = response.json()
        return data
    except (requests.exceptions.HTTPError, json.JSONDecodeError) as e:
        print(f"Error fetching WHOIS data for {ip_address}: {str(e)}")
        return None

# Read Tor IP addresses from 'IP_addresses.json'
with open('IP_addresses.json', 'r') as file:
    tor_ips = json.load(file)

# Create the output folder if it doesn't exist
output_folder = 'output'
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Query WHOIS API for each Tor IP address with a delay of 2 seconds between requests
for ip_address in tor_ips:
    whois_data = fetch_whois_data(ip_address)
    
    if whois_data:
        output_file = os.path.join(output_folder, f"{ip_address}.json")
        with open(output_file, 'w') as file:
            json.dump(whois_data, file)
    
    time.sleep(2)  # Introduce a delay of 2 seconds between API calls

print("WHOIS data for Tor IP addresses saved successfully in the output folder.")