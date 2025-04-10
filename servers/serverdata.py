import subprocess
import json
import os

# Read list of IP addresses from 'tor.txt'
with open('tor-list.txt', 'r') as ip_file:
    ip_addresses = ip_file.read().splitlines()

# Loop through each IP address
for ip in ip_addresses:
    # Get server data from Netlas.io
    cmd = f"netlas host {ip} --format json"
    process = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    netlas_output, _ = process.communicate()
    
    if netlas_output:
        # Save the JSON data in the output folder
        new_filename = os.path.join('output', f"{ip}.json")
        with open(new_filename, 'w') as output_file:
            output_file.write(netlas_output.decode('utf-8'))
    else:
        print(f"No data received for IP {ip}")

# Notify when processing is complete
print("Data retrieval and saving completed.")