import json

# Read relay names from the text file
with open('relay-list.txt', 'r') as file:
    relay_names = [line.strip() for line in file]

# Create JSON data structure
json_data = {
    "relays": relay_names
}

# Write JSON data to a json file
with open('relay_list.json', 'w') as json_file:
    json.dump(json_data, json_file, indent=4)

print("JSON file 'relay_list.json' has been created.")