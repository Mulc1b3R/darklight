import re
import json

# Function to extract URLs starting with 'http://' from input.html and write them to output.json in the specified format
def extract_http_urls(input_file, output_file):
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            html_content = f.read()

            # Regular expression to find URLs starting with 'http://'
            http_urls = re.findall(r'http://\S+', html_content)

            # Group URLs by 'hostname' as a placeholder
            data = {'hostname': http_urls}

            # Write the extracted URLs to output file in JSON format
            with open(output_file, 'w', encoding='utf-8') as out_f:
                json.dump(data, out_f, indent=4)

            return True

    except Exception as e:
        return False, str(e)

# Main function
if __name__ == "__main__":
    input_file = 'input.html'
    output_file = 'output.json'

    success = extract_http_urls(input_file, output_file)

    if success:
        print(f'URLs extracted from {input_file} and saved in JSON format to {output_file}.')
    else:
        print(f'An error occurred during extraction.')