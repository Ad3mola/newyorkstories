var eHTTP = require("./http.js");
const http = new eHTTP();
const news = document.getElementById("news");
const science = document.getElementById("science");
const fashion = document.getElementById("fashion");
const books = document.getElementById("books");

let loading = `<div class="container">
<div class="loader-container">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(255, 255, 255); display: block; shape-rendering: auto;" width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<circle cx="50" cy="50" fill="none" stroke="#26a69a" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
</circle></svg></div></div>`;

news.innerHTML = loading;
let bookmarkList =
  localStorage.getItem("bookmark-list") === null
    ? []
    : JSON.parse(localStorage.getItem("bookmark-list"));

const displayNews = (views) => {
  let output = "";
  views.results.forEach((view) => {
    output += `<li class="container each-news-component"><h4 style="font-weight: bold;">${view.title}</h4> <h6 style="font-weight: bold;">READ FULL ARTICLE &nbsp<a href="${view.url}">HERE</a></h6> <h5>${view.abstract}</h5><p style="bold">${view.byline}</p> <img class="card-image" height="275px" width="275px" src="${view.multimedia[3].url}" alt="article image"><button class="waves-effect right btn m5" style="margin: 10px;" id="readingList">
        Add To Reading List
      </button> <div class="clear"></div></li> `;
    news.innerHTML = output;
    const readingList = document.querySelectorAll("#readingList");
    readingList.forEach((added) => {
      added.addEventListener("click", (e) => {
        const title = e.target.parentElement.firstChild.textContent;
        const viewUrl =
          e.target.parentElement.firstChild.nextElementSibling.firstChild
            .nextElementSibling.href;
        const abstract =
          e.target.parentElement.firstChild.nextElementSibling
            .nextElementSibling.textContent;
        const byline =
          e.target.parentElement.firstChild.nextElementSibling
            .nextElementSibling.nextElementSibling.textContent;
        const imageUrl =
          e.target.parentElement.firstChild.nextElementSibling
            .nextElementSibling.nextElementSibling.nextElementSibling.src;
        const article = {
          title,
          viewUrl,
          imageUrl,
          abstract,
          byline,
        };

        const seen = bookmarkList.find(
          (each) => article.title.toLowerCase() === each.title.toLowerCase()
        );
        if (seen) {
          bookmarkList = bookmarkList.filter(
            (each) => each.title.toLowerCase() !== seen.title.toLowerCase()
          );
          bookmarkList = [...bookmarkList, article];
          localStorage.setItem("bookmark-list", JSON.stringify(bookmarkList));
          added.textContent = "already Added!";
          added.classList.add("disabled");
          setTimeout(() => {
            added.textContent = "Add To Reading List";
            added.classList.remove("disabled");
          }, 1000);
        } else {
          bookmarkList = [...bookmarkList, article];
          localStorage.setItem("bookmark-list", JSON.stringify(bookmarkList));
          added.textContent = "Added!";
          added.classList.add("disabled");
        }
      });
    });
  });
};

http
  .get(
    "//api.nytimes.com/svc/topstories/v2/science.json?api-key=hQqyeLk1pAzFyy4eqdZWsVGpQ1W53vZl"
  )
  .then((data) => displayNews(data))
  .catch((err) => console.log(err));
http
  .get(
    "//api.nytimes.com/svc/topstories/v2/books.json?api-key=hQqyeLk1pAzFyy4eqdZWsVGpQ1W53vZl"
  )
  .then((data) => displayNews(data))
  .catch((err) => console.log(err));

const events = () => {
  science.addEventListener("click", () => {
    news.innerHTML = loading;
    http
      .get(
        "//api.nytimes.com/svc/topstories/v2/science.json?api-key=hQqyeLk1pAzFyy4eqdZWsVGpQ1W53vZl"
      )
      .then((data) => displayNews(data))
      .catch((err) => console.log(err));
  });
  fashion.addEventListener("click", () => {
    news.innerHTML = loading;
    http
      .get(
        "//api.nytimes.com/svc/topstories/v2/fashion.json?api-key=hQqyeLk1pAzFyy4eqdZWsVGpQ1W53vZl"
      )
      .then((data) => displayNews(data))
      .catch((err) => console.log(err));
  });
  books.addEventListener("click", () => {
    news.innerHTML = loading;
    http
      .get(
        "//api.nytimes.com/svc/topstories/v2/books.json?api-key=hQqyeLk1pAzFyy4eqdZWsVGpQ1W53vZl"
      )
      .then((data) => displayNews(data))
      .catch((err) => console.log(err));
  });
};
events();
