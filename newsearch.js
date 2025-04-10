function searchSite() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const words = searchInput.split(' ');

    if (words.length > 3) {
        alert('Your search query contains more than three words. Please enter a keyword or consider using a voice assistant for better results.');
        return;
    }

    fetch(`data/${searchInput}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Data not found');
            }
            return response.json();
        })
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            displayOptions(searchInput);
        });
}

function displayOptions(searchInput) {
    let message = `
        <p>We hit a roadblock. Choose how to proceed:</p>
        <button onclick="getBestShot()">Best Shot</button>
        <button onclick="searchWikipedia('${searchInput}')">Wiki</button>
		<button id="clearDataButton" onclick="clearData()" style="position: absolute; top: 10px; right: 10px;">Clear Data</button>
    `;

    document.getElementById('searchResults').innerHTML = message;
	document.getElementById('clearDataButton').style.visibility = 'visible';
}

function getBestShot() {
    fetch('data/fallback.json')
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Failed to retrieve fallback data');
        })
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error('Error fetching fallback data:', error);
        });
}

function displayResults(data) {
    let resultsHtml = '';

    data.forEach(site => {
        resultsHtml += `
            <div>
                <p><b>Title:</b> ${site.title}</p>
                <p><b>Description:</b> ${site.description}</p>
                <p><b>Content:</b> ${site.content}</p>
                <p><b>URL:</b> <a href="${site.url}">${site.url}</a></p>
            </div>
            <hr>
        `;
    });

    document.getElementById('searchResults').innerHTML = resultsHtml;
}

function searchWikipedia(searchQuery) {
    const url = `https://en.wikipedia.org/wiki/${searchQuery}`;

function clearData() {
    document.getElementById('searchResults').innerHTML = '';
    
}    

    // Create an iframe and load the Wikipedia page
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = '60%';
    iframe.style.height = '80vh';

    document.getElementById('searchResults').appendChild(iframe);
}