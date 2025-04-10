 document.getElementById("fetchNewsButton").addEventListener("click", function() {
        fetchNews();
    });

    function fetchNews() {
        const apiKey = "XnmZbwL6vTyAKkkS8ZN6ddP44w7ivpFK";
        const apiUrl = `https://financialmodelingprep.com/api/v3/fmp/articles?page=0&size=&apikey=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => displayNews(data))
            .catch(error => console.error('Error fetching news:', error));
    }

    function displayNews(data) {
        const news = data.content; // Accessing the "content" array from the JSON response
        const newsContentDiv = document.getElementById("newsContent");
        newsContentDiv.innerHTML = '';

        if (Array.isArray(news)) {
            news.forEach(article => {
                const articleDiv = document.createElement("div");
                articleDiv.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>Date: ${article.date}</p>
                    <p>${article.content}</p>
                    <p>Tickers: ${article.tickers}</p>
                    <img src="${article.image}" alt="Article Image">
                    <a href="${article.link}" target="_blank">Read More</a>
                    <p>Author: ${article.author}</p>
                    <p>Site: ${article.site}</p>
                    <hr>
                `;
                newsContentDiv.appendChild(articleDiv);
            });
        } else {
            newsContentDiv.innerHTML = "No news articles available.";
        }
    }