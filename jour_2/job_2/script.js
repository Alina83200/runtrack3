const button = document.getElementById("button");
const article = document.getElementById("article");

button.addEventListener("click", function () {
  if (article.style.display === "none") {
    article.style.display = "block"; 
  } else {
    article.style.display = "none"; 
  }
});
