import json
import os

# Create the 'output' directory if it doesn't already exist
output_dir = 'output'
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Read data from 'relay-details.json' using UTF-8 encoding
with open('relay-details.json', 'r', encoding='utf-8') as file:
    data = json.load(file)
    relays = data['relays']

    # Process each relay entry
    for relay in relays:
        nickname = relay['nickname']
        
        # Write relay data to a new JSON file based on the 'nickname'
        new_filename = os.path.join(output_dir, f"{nickname}.json")
        with open(new_filename, 'w') as outfile:
            # Write the relay data to the new JSON file
            json.dump(relay, outfile, indent=4)

print("Data extraction and saving completed.")