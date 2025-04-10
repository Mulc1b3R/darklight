function searchSite() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    fetch('data/files.json')
        .then(response => response.json())
        .then(fileNames => {
            const matchingFiles = fileNames.filter(fileName => fileName.toLowerCase().includes(searchInput));

            if (matchingFiles.length === 0) {
                showNoResultsMessage();
            } else {
                // Fetch and process content of matching JSON files
                Promise.all(matchingFiles.map(fileName => 
                    fetch(`data/${fileName}`)
                        .then(response => response.json())
                ))
                .then(data => {
                    displayResults(data);
                })
                .catch(error => {
                    console.error('Error fetching or processing data:', error);
                    showNoResultsMessage();
                });
            }
        })
        .catch(error => {
            console.error('Error fetching file names:', error);
            showNoResultsMessage();
        });
}

function showNoResultsMessage() {
    // Display a message or perform an action to indicate no results were found
    console.log('No matching results found.');
}

function displayResults(results) {
    const divElement = document.getElementById('searchResults');
    divElement.innerHTML = ''; // Clear previous content

    results.forEach(fileResults => {
        fileResults.forEach(result => {
            divElement.innerHTML += `
                <div class="search-result">
                    <h3>${result.title}</h3>
                    <p><b>Description:</b> ${result.description}</p>
                    <p><b>Content:</b> ${result.content}</p>
                    <p><b>URL:</b> <a href="${result.url}" target="_blank">${result.url}</a></p>
                    ${result.onionUrl ? `<p><b>Onion URL:</b> <a href="${result.onionUrl}" target="_blank">${result.onionUrl}</a></p>` : ''}
                </div>
                <hr>
            `;
        });
    });
}





