document.getElementById("searchFrom").addEventListener("submit", async function(e) {
    e.preventDefault();

    const search = document.getElementById("query").value;
    const url = `https://api.tvmaze.com/search/shows?q=${search}`;
    const response = await fetch(url);
    const data = await response.json();

    const results = document.getElementById("results");
    results.innerHTML = '';

    data.forEach(tv => {
        const article = document.createElement("article");

        const h2 = document.createElement("h2");
        h2.textContent = tv.show.name;
        article.appendChild(h2);

        const a = document.createElement("a");
        a.href = tv.show.url;
        a.target = "_blank";
        a.textContent = "Show details";
        article.appendChild(a);

        const img = document.createElement("img");
        img.src = tv.show.image
            ? tv.show.image.medium
            :"https://placehold.co/210x295?text=Not%20Found";
        img.alt = tv.show.name;
        article.appendChild(img);

        const div = document.createElement("div");
        div.innerHTML = tv.show.summary || "No summary avaible";
        article.appendChild(div);

        results.append(article);

    });
});

