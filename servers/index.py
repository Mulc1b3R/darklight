import os

folder_path = 'metrics'
output_file = 'relay-list'
invalid_files = []

# Get a list of all files in the servers folder
files = os.listdir(folder_path)

# Remove the .json extension from each file name
for file_name in files:
    if file_name.endswith('.json'):
        invalid_files.append(file_name[:-5])  # Remove the last 5 characters (.json)

# Write the modified file names to server-list.txt
output_file_path = f'{output_file}.txt'
with open(output_file_path, 'w') as f:
    f.write('\n'.join(invalid_files))

print(f'Successfully wrote the modified file names without the .json extension to {output_file_path}')