// Function to fetch and render the JSON HTML webpage template
function renderWebpage() {
    fetch('archive.json')  // Add the URL or file path of your JSON template
        .then(response => response.json())
        .then(data => {
            const htmlContent = data.webpage; // Retrieve the HTML content from JSON data

            // Render the HTML content within a specified div element
            const containerDiv = document.getElementById('rendered-content');
            containerDiv.innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Error fetching/rendering JSON HTML template: ', error);
        });
}

// Call the render function when the UI is opened or on page load
window.onload = renderWebpage;