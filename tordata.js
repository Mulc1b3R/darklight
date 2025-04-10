 document.getElementById('loadTorDataButton').addEventListener('click', () => {
        fetch('tor-api.json')
            .then(response => response.json())
            .then(data => {
                document.getElementById('torDataDisplay').innerText = JSON.stringify(data, null, 2);

                // Create a new button to clear data
                const clearDataButton = document.createElement('button');
                clearDataButton.innerText = 'Clear Data';
                clearDataButton.style.position = 'fixed';
                clearDataButton.style.top = '10px';
                clearDataButton.style.right = '10px';
                clearDataButton.addEventListener('click', () => {
                    document.getElementById('torDataDisplay').innerText = ''; // Clear the data
                    clearDataButton.style.display = 'none'; // Hide the clear data button
                });
                document.body.appendChild(clearDataButton);
            })
            .catch(error => console.error("Error fetching data:", error));
    });

    window.onscroll = function() {
        if (document.getElementById('torDataDisplay').innerText !== '') {
            const clearDataButton = document.querySelector('#torDataDisplay button');
            if (clearDataButton) {
                clearDataButton.style.top = (window.pageYOffset + 10) + 'px';
            }
        }
    };