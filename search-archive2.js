   async function fetchCDXData() {
            const query = document.getElementById('searchInput').value;
            const url = `http://web.archive.org/cdx/search/cdx?url=${query}&output=json&limit=3`;

            const link = `<a href="#" onclick="fetchData('${url}')">Click here to fetch JSON data for ${query}</a>`;
            document.getElementById('searchResults').innerHTML = link;
        }

       
    