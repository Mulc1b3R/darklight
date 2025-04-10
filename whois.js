async function searchWhois() {
    const ipAddress = document.getElementById('ipAddress').value;
    const apiUrl = `http://ip-api.com/json/${ipAddress}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        document.getElementById('result').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error("Error fetching WHOIS data:", error);
        document.getElementById('result').innerText = 'Error fetching WHOIS data.';
    }
}