function searchSite() {
    // Get the search query input
    let searchQuery = document.getElementById('searchInput').value;

    // Assuming the JSON file has the same name as the search query
    let jsonFile = `metrics/${searchQuery}.json`;

    // Fetch the JSON file
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            displaySearchResults(data);
            addClearButton();
        })
        .catch(error => console.error('Error searching site:', error));
}

function displaySearchResults(data) {
    let searchResultsDiv = document.getElementById('searchResults');

    // Display the JSON data as formatted text
    searchResultsDiv.innerText = JSON.stringify(data, null, 2);
}

function addClearButton() {
    const searchResultsDiv = document.getElementById('searchResults');

    // Create a new button to clear data
    const clearDataButton = document.createElement('button');
    clearDataButton.innerText = 'Clear Data';
    clearDataButton.style.position = 'fixed';
    clearDataButton.style.top = '10px';
    clearDataButton.style.right = '10px';
    clearDataButton.addEventListener('click', () => {
        searchResultsDiv.innerText = ''; // Clear the data
        clearDataButton.style.display = 'none'; // Hide the clear data button
    });

    document.body.appendChild(clearDataButton);
}