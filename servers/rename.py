import json
import os

# Load 'tor-api.json' and extract the relay names and IP addresses
with open('tor-api.json', 'r') as tor_file:
    tor_data = json.load(tor_file)
    ip_to_relay = {}
    for entry in tor_data['relays']:
        relay_name = entry.get('n')
        # Handle both IPv4 and IPv6 addresses
        ip_addresses = [ip.strip('[]') for ip in entry.get('a', [])]
        for ip_address in ip_addresses:
            ip_to_relay[ip_address] = relay_name

# Path to the 'output' folder containing IP address JSON files
output_folder = 'output'

# Iterate over the JSON files in the 'output' folder
for filename in os.listdir(output_folder):
    if filename.endswith('.json'):
        # Extract the IP address from the file name
        ip_address = filename.replace('.json', '')

        if ip_address in ip_to_relay:
            relay_name = ip_to_relay[ip_address]
            new_filename = os.path.join(output_folder, f"{relay_name}.json")

            # Create a duplicate file with relay name
            with open(os.path.join(output_folder, filename), 'r') as input_file:
                try:
                    data = json.load(input_file)
                    with open(new_filename, 'w') as output_file:
                        json.dump(data, output_file, indent=4)
                except json.decoder.JSONDecodeError:
                    print(f"Error decoding JSON file: {filename}")

print("Duplicate files with relay names successfully created.")