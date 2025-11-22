document.getElementById("searchFrom").addEventListener("submit", async function(e) {
    e.preventDefault();

    const search = document.getElementById("query").value;
    const url = `https://api.tvmaze.com/search/shows?q=${search}`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
});
