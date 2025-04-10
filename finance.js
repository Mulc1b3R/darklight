function displayFinanceData() {
    const tickerSymbol = document.getElementById('tickerSymbol').value;
    
    // First URL for CSV download
    const csvUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${tickerSymbol}&apikey=7VCWJA7XJBF1VT7P&datatype=csv`;
    
    // Second URL for JSON data display
    const jsonUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${tickerSymbol}&apikey=7VCWJA7XJBF1VT7P`;

    const linkDiv = document.getElementById('financeLink');
    linkDiv.innerHTML = `<a href="${csvUrl}" target="_blank">Click to download - ${tickerSymbol}.csv historical market data</a>`;

    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            const jsonDataDiv = document.getElementById('jsonData');
            jsonDataDiv.innerHTML = '<h2>JSON Data:</h2><pre>' + JSON.stringify(data, null, 2) + '</pre>';
        })
        .catch(error => console.error("Error fetching JSON data:", error));
}