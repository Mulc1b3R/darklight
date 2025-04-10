function clearData() {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // Clear the search results content

    const top50Content = document.getElementById('top50Content');
    top50Content.innerHTML = ''; // Clear the top 50 content
}

function createClearButton() {
    const clearButton = document.createElement('button');
    clearButton.innerText = 'Clear Data';
    clearButton.onclick = clearData;
    clearButton.style.position = 'fixed';
    clearButton.style.top = '50%';
    clearButton.style.left = '50%';
    clearButton.style.transform = 'translate(-50%, -50%)';
    
    document.body.appendChild(clearButton);
}

// Check if there is content in search results or top50Content to create and show the "Clear Data" button
const searchResults = document.getElementById('searchResults');
const top50Content = document.getElementById('top50Content');

if (searchResults.textContent.trim().length > 0 || top50Content.textContent.trim().length > 0) {
    createClearButton();
}