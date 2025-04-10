import json

# Load 'tor-api.json' and extract the first 50 IP addresses
with open('tor-api.json', 'r') as tor_file:
    tor_data = json.load(tor_file)
    
    # Extracting the first 50 IP addresses
    ip_addresses = [ip for entry in tor_data['relays'] for ip in entry.get('a', [])][:14]

# Write the IP addresses to 'tor-list.txt'
with open('tor-list.txt', 'w') as output_file:
    for ip_address in ip_addresses:
        output_file.write(ip_address + '\n')

print("IP addresses written to 'tor-list.txt' successfully.")