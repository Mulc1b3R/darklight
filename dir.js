function showTop50Data() {
    fetch('data/top50.json')
        .then(response => response.json())
        .then(data => {
            let top50Content = '<ul>';

            data.forEach(item => {
                top50Content += `<li><h3>${item.title}</h3><p>${item.description}</p><p>${item.content}</p><a href="${item.url}" target="_blank">Learn more</a></li>`;
            });

            top50Content += '</ul>';

            document.getElementById('top50Content').innerHTML = top50Content; // Assuming there is a <div> element with id 'top50Content'
        })
        .catch(error => {
            console.error('Error fetching top 50 data:', error);
        });
}