var passid = sessionStorage.getItem("passid");
var token = sessionStorage.getItem("token");
let passIdDuplicate = passid

console.log('Current article number: ' + passIdDuplicate);



let fetch_config = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
    }
}

// Initialise la requete http avec l'url de la ressource et les configurations définis ci-dessus
fetch("https://simplonews.brianboudrioux.fr/articles", fetch_config)
    .then(function(response) {

        // On appelle la method json a partir de l'objet response pour parser les données renvoyer par l'API
        response.json()
            .then(function(data) {
                if (response.status == 400) {
                    console.log(data);
                    // gestion erreur données envoyer a la requette
                } else if (response.status == 403) {
                    console.log(data);
                    // gestion erreur authentification
                } else {
                    console.log(data);
                    var data_articlesArray = data["articles"];


                    function generateArticle() {
                        // ici on peut exploiter nos donnée
                        let article = document.querySelector(".articlesection");
                        article.innerHTML =
                            `
                        <article>
                        <div>
                            <h2 class="articleTitle">${data["articles"][passIdDuplicate]["title"]}</h2>
                            <p class="authorName">${data["articles"][passIdDuplicate]["author"]}</p>
                            </div>
                        <section>
                            <img class="articleImage" src="${data["articles"][passIdDuplicate]["img"]}" alt="${data["articles"][passIdDuplicate]["title"]}">
                            <p class="reume">${data["articles"][passIdDuplicate]["resume"]}</p>
                            <p class="articleText"> ${data["articles"][passIdDuplicate]["content"]}
                            </p>
        
                        </section>
                            <div class="previousAndNextButtonsContainer">
                                <button class="previousArticle">Previous Article</button>
                                <button class="nextArticle">Next Article</button>
                            </div>
                            <a href="home.html" class="longbutton">Accueil</a>
                        
                        </article>
                        
                        
                        `


                        let previousArticleButton = document.querySelector(".previousArticle")
                        let nextArticleButton = document.querySelector(".nextArticle")
                        previousArticleButton.addEventListener("click", changeCurrentArticleOnButtonClick)
                        nextArticleButton.addEventListener("click", changeCurrentArticleOnButtonClick)

                        function changeCurrentArticleOnButtonClick(eventListenerCallback) {
                            let clickedElement = eventListenerCallback.target;

                            if (clickedElement.className == "nextArticle") { // next button
                                if (passIdDuplicate == data_articlesArray.length) // if at last article, set current article to array[0]
                                    passIdDuplicate = 0
                                else {
                                    passIdDuplicate++;
                                }
                            } else if (clickedElement.className == "previousArticle") { // previous button 
                                // if at first article, set current article to last index array

                                if (passIdDuplicate == 0)
                                    passIdDuplicate = data_articlesArray.length - 1
                                    // passIdDuplicate = data_articlesArray.length
                                else {
                                    passIdDuplicate--;
                                }
                            }

                            console.log('Article position in array: ' + passIdDuplicate + ` / (${passIdDuplicate+1})` + ' | ID: ' + data["articles"][passIdDuplicate]["id"]);
                            generateArticle()
                            window.scrollTo(0, 0);

                        }
                    }
                    // NEXT AND PREVIOUS ARTICLE 

                    generateArticle()

                }
            })
            .catch(function(data_parsing_error) {
                console.log(data_parsing_error);
            })
    })
    .catch(function(server_errors) {
        // Cas erreur server (API)
        console.log(server_errors);
    })




window.onload = setupDisconnectFunction()

function disconnectUserAndRedirectToLoginPage() {

    sessionStorage.clear()
    document.location.href = "./index.html";
}

function setupDisconnectFunction() {
    let disconnectButton = document.querySelectorAll(".disconnectButton")
    disconnectButton.forEach(element => {
        element.addEventListener("click", disconnectUserAndRedirectToLoginPage)
    });


}

function redirectToLoginPage() {
    let tokenCheck = sessionStorage.getItem("token")


    if (tokenCheck == null) {
        disconnectUserAndRedirectToLoginPage()
    }
}

redirectToLoginPage()