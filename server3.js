function searchSite() {
    const searchName = document.getElementById("searchInput").value.toLowerCase();
    const searchResults = document.getElementById('searchResults');

    fetch(`servers/${searchName}.json`)
        .then(response => {
            if (!response.ok) {
                return searchWhois(searchName); // Perform WHOIS lookup as fallback
            }
            return response.json();
        })
        .then(data => {
            searchResults.innerHTML = ''; // Clear previous search results
            
            // Format JSON content for better readability
            const contentDiv = document.createElement('pre');
            contentDiv.textContent = JSON.stringify(data, null, 2); // Using spacing of 2 for indentation
            searchResults.appendChild(contentDiv);
        })
        .catch(error => {
            console.error("Error searching for the file or loading data:", error);
            searchResults.textContent = "Error in data retrieval.";
        });
}

async function searchWhois(ipAddress) {
    const apiUrl = `http://ip-api.com/json/${ipAddress}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const whoisResults = document.getElementById('whoisResults');
        whoisResults.innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error("Error fetching WHOIS data:", error);
        const whoisResults = document.getElementById('whoisResults');
        whoisResults.innerText = 'Error fetching WHOIS data.';
    }
}