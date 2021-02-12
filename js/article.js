var passid = sessionStorage.getItem("passid");
var token = sessionStorage.getItem("token");
// console.log(passid);
let passIdDuplicate = passid



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
                            let articlesArray = data["articles"];

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
                        <button class="switchArticleButtons previousArticle">Previous Article</button>
                        <a href="home.html" class="longbutton">Accueil</a>
                        <button class="switchArticleButtons nextArticle">Next Article</button>
                        
                        </article>

                   
                        `
                                    // NEXT AND PREVIOUS ARTICLE 
                                let previousArticleButton = document.querySelector(".previousArticle")
                                let nextArticleButton = document.querySelector(".nextArticle")

                                function changeCurrentArticleToNext() {
                                    if (passIdDuplicate < articlesArray.length)
                                        passIdDuplicate++;
                                    else {
                                        passIdDuplicate = 0
                                    }

                                    console.log(passIdDuplicate);
                                    generateArticle()
                                }


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


                                console.log(passIdDuplicate);
                                generateArticle()
                            }
                            previousArticleButton.addEventListener("click", changeCurrentArticleToPrevious)
                            nextArticleButton.addEventListener("click", changeCurrentArticleToNext)

                        }
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