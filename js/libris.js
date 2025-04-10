// Function to search the database and display results
function searchSite() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();
	logSearchQuery(searchQuery); 
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = ''; // Clear previous results
	
	function logSearchQuery(query) {
    const timestamp = new Date().toLocaleString();
    const logEntry = { query: query, timestamp: timestamp };
    
    let searches = JSON.parse(localStorage.getItem('searches')) || [];
    searches.push(logEntry);
    localStorage.setItem('searches', JSON.stringify(searches));
}

function displaySearchHistory() {
    const searches = JSON.parse(localStorage.getItem('searches')) || [];

    const historyDiv = document.getElementById('searchHistory');
    historyDiv.innerHTML = ''; // Clear previous search history

    searches.forEach(search => {
        const historyEntry = document.createElement('div');
        historyEntry.textContent = `Query: ${search.query} - Searched at: ${search.timestamp}`;
        historyDiv.appendChild(historyEntry);
    });
}

displaySearchHistory();  // Call this function to display search history when the page loads

    fetch('libris.json')
        .then(response => response.json())
        .then(data => {
            const results = data.filter(entry =>
                entry.title.toLowerCase().includes(searchQuery) ||
                entry.author.toLowerCase().includes(searchQuery) ||
                entry.book_no === searchQuery
            );

            if (results.length === 0) {
                resultsDiv.textContent = 'No results found.';
                return;
            }

            results.forEach(result => {
                const resultDiv = document.createElement('div');
                resultDiv.innerHTML = `<strong>Title:</strong> ${result.title}<br>
                                       <strong>Author:</strong> ${result.author}<br>
                                       <strong>Subtitle:</strong> ${result.subtitle}<br>
                                       <strong>URL:</strong> <a href="${result.url}" target="_blank">${result.url}</a><br>
                                       <strong>Book No:</strong> ${result.book_no}<br>
                                       <strong>Download:</strong> <a href="${result.download}" target="_blank">Download</a><br><br>`;
                resultsDiv.appendChild(resultDiv);
            });
        })
        .catch(error => {
            resultsDiv.textContent = 'Error loading data. Please try again.';
        });
}