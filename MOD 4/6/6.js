document.getElementById("jokeForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const search = document.getElementById("search").value;
    const url = `https://api.chucknorris.io/jokes/search?query=${search}`;
    const response = await fetch(url);
    const data = await response.json();

    const results = document.getElementById("results");
    results.innerHTML = "";

    data.result.forEach(jokeObj => {
        const article = document.createElement("article");
        const p = document.createElement("p");
        p.textContent = jokeObj.value;

        article.appendChild(p);
        results.appendChild(article);
    });
});