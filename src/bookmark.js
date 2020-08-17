const news = document.getElementById("news");

let bookmarkList =
  localStorage.getItem("bookmark-list") === null
    ? []
    : JSON.parse(localStorage.getItem("bookmark-list"));

const displayNews = () => {
  if (bookmarkList.length) {
    console.log(bookmarkList);
    let output = "";
    bookmarkList.reverse().forEach((view) => {
      output += `<li class="container each-news-component"><h4 style="font-weight: bold;">${view.title}</h4> <h6 style="font-weight: bold;">READ FULL ARTICLE &nbsp<a href="${view.viewUrl}">HERE</a></h6> <h5>${view.abstract}</h5><p style="bold">${view.byline}</p> <img class="card-image" height="275px" width="275px" src="${view.imageUrl}"><button class="waves-effect right btn m5" style="margin: 10px;" id="readingList">
        remove from list
      </button> <div class="clear"></div></li> `;
      news.innerHTML = output;
      const readingList = document.querySelectorAll("#readingList");
      readingList.forEach((added) => {
        added.addEventListener("click", (e) => {
          const title = e.target.parentElement.firstChild.textContent;
          const seen = bookmarkList.find(
            (each) => title.toLowerCase() === each.title.toLowerCase()
          );
          if (seen) {
            bookmarkList = bookmarkList.filter(
              (each) => each.title.toLowerCase() !== seen.title.toLowerCase()
            );
            e.target.parentElement.remove();
            localStorage.setItem("bookmark-list", JSON.stringify(bookmarkList));
            if (!bookmarkList.length) {
              news.innerHTML = `<div class="container no-article"><h5 class="center">No bookmarked articles yet...</h5></div>`;
            }
          }
        });
      });
    });
  } else {
    news.innerHTML = `<div class="container no-article"><h5 class="center">No bookmarked articles yet...</h5></div>`;
  }
};

displayNews();
