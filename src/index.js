var eHTTP = require("./http.js");
const http = new eHTTP();
const news = document.getElementById("news");
const science = document.getElementById("science");
const fashion = document.getElementById("fashion");
const books = document.getElementById("books");

const displayNews = views => {
    let output = "";
    views.results.forEach(view => {
        output += `<li class="container"><h3 style="font-weight: bold;">${view.title}</h3> <h6 style="font-weight: bold;">READ FULL ARTICLE &nbsp<a href="${view.url}">HERE</a></h6> <h5>${view.abstract}</h5><p style="bold">${view.byline}</p> <img class="card-image" height="275px" width="275px" src="${view.multimedia[3].url}"><button class="waves-effect right btn m5" style="margin: 10px;" id="readingList">
        Add To Reading List
      </button></li>`;
        news.innerHTML = output;
        const readingList = document.querySelectorAll("#readingList");
        readingList.forEach(added => {
            added.addEventListener("click", () => {
                added.textContent = "Added!";
                added.classList.add("disabled");
            });
        });
    });
};

http.get(
    "//api.nytimes.com/svc/topstories/v2/science.json?api-key=hQqyeLk1pAzFyy4eqdZWsVGpQ1W53vZl"
)
    .then(data => displayNews(data))
    .catch(err => console.log(err));
http.get(
    "//api.nytimes.com/svc/topstories/v2/books.json?api-key=hQqyeLk1pAzFyy4eqdZWsVGpQ1W53vZl"
)
    .then(data => displayNews(data))
    .catch(err => console.log(err));

const events = () => {
    science.addEventListener("click", () => {
        http.get(
            "//api.nytimes.com/svc/topstories/v2/science.json?api-key=hQqyeLk1pAzFyy4eqdZWsVGpQ1W53vZl"
        )
            .then(data => displayNews(data))
            .catch(err => console.log(err));
    });
    fashion.addEventListener("click", () => {
        http.get(
            "//api.nytimes.com/svc/topstories/v2/fashion.json?api-key=hQqyeLk1pAzFyy4eqdZWsVGpQ1W53vZl"
        )
            .then(data => displayNews(data))
            .catch(err => console.log(err));
    });
    books.addEventListener("click", () => {
        http.get(
            "//api.nytimes.com/svc/topstories/v2/books.json?api-key=hQqyeLk1pAzFyy4eqdZWsVGpQ1W53vZl"
        )
            .then(data => displayNews(data))
            .catch(err => console.log(err));
    });
};
events();
