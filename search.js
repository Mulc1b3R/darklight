function searchSite() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const words = searchInput.split(' ');

    if (words.length > 3) {
        alert('Your search query contains more than three words. Please enter a keyword or consider using a voice assistant for better results.');
        return;
    }

    fetch(`data/${searchInput}.json`)
        .then(response => response.json())
        .then(data => {
            if (data.length === 0) {
                searchWikipedia(searchInput);
            } else {
                displayResults(data);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            searchWikipedia(searchInput);
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

    // Clear previous search results
    document.getElementById('searchResults').innerHTML = '';

    // Create an iframe and load the Wikipedia page
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = '60%';
    iframe.style.height = '80vh';

    document.getElementById('searchResults').appendChild(iframe);
}