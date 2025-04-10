import json

# Read input JSON file
input_file = 'tor-api.json'
with open(input_file, 'r') as file:
    data = json.load(file)

# Extract IP addresses from the JSON data
ip_addresses = [relay['a'][0] for relay in data['relays']]

# Write IP addresses to output file
output_file = 'IP_addresses.json'
with open(output_file, 'w') as file:
    json.dump(ip_addresses, file)

print('Successfully extracted IP addresses and saved to IP_addresses.json')