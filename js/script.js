// SEARCH BAR
let searchBar = document.querySelector("#site-search")
let articlesDisplayArea = document.querySelector("body section")
let searchButton = document.querySelector("button")
    // searchBar.addEventListener('input', isStringInArticleTitle)
searchButton.addEventListener('click', isStringInArticleTitle)


function isStringInArticleTitle(string) {
    // if (string not in articleDatabase)

    // if (string not in articleDatabase) {
    //     article.display = none;
    // }
    // if (string in articleDatabase) {
    //     article.display = block
    // }
    updateArticlesDisplayed(string)

}

function updateArticlesDisplayed(textInput, displayArea = articlesDisplayArea) {

    displayArea.textContent = textInput.target.value;
}


// check articles with "textInput" part of str in their name and display then on screen