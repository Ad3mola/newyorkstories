var eHTTP = require("./http.js");
const http = new eHTTP;
const news = document.getElementById("news");
const button = document.getElementById("button");

button.addEventListener("click", () => {
    let output = "";
    http.get("//api.nytimes.com/svc/topstories/v2/science.json?api-key=hQqyeLk1pAzFyy4eqdZWsVGpQ1W53vZl")
        .then(data => {
            data.results.forEach((dat => {
                output += `<li class="container"><h3 style="font-weight: bold;">${dat.title}</h3> <h6 style="font-weight: bold;">READ FULL ARTICLE &nbsp<a href="${dat.url}">HERE</a></h6> <h5>${dat.abstract}</h5><p style="bold">${dat.byline}</p>  <img class="card-image" height="275px" width="275px" src="${dat.multimedia[2].url}"></li>`;
                news.innerHTML = output;
            }));
        })
        .catch(err => console.log(err));
    http.get("//api.nytimes.com/svc/topstories/v2/books.json?api-key=hQqyeLk1pAzFyy4eqdZWsVGpQ1W53vZl")
        .then(data => {
            data.results.forEach((dat => {
                output += `<li class="container"><h3 style="font-weight: bold;">${dat.title}</h3> <h6 style="font-weight: bold;">READ FULL ARTICLE &nbsp<a href="${dat.url}">HERE</a></h6> <h5>${dat.abstract}</h5><p style="bold">${dat.byline}</p> <img class="card-image" height="275px" width="275px" src="${dat.multimedia[3].url}"></li>`;
                news.innerHTML = output;
            }));
        })
        .catch(err => console.log(err));
});