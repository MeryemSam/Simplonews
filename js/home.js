// import * as script from 'js/script.js';

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTUsImZpcnN0TmFtZSI6bnVsbCwibGFzdE5hbWUiOm51bGwsImVtYWlsIjoib3dvVXNlckB0ZXN0LmZyIiwicGFzc3dvcmQiOiIkMmIkMTAkak45SkhRbmhkUVZ1ekszZndwRGJRZWxMUjg3OU9zeHFSdkR1TXVULlZwdGdHNlZTOTkxWnUiLCJjcmVhdGVkQXQiOiIyMDIxLTAyLTEwVDEzOjMwOjQ4LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTAyLTEwVDEzOjMwOjQ4LjAwMFoiLCJpYXQiOjE2MTI5NjM5ODB9.JYF5P8FTHl3UHszkjC613vztA9bCFqKglo6p3P_bW0o";
let fetch_config = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
    }
}

// Initialise la requete http avec l'url de la ressource et les configurations définis ci-dessus
fetch("https://simplonews.brianboudrioux.fr/articles", fetch_config)
.then(function (response) {
    
    // On appelle la method json a partir de l'objet response pour parser les données renvoyer par l'API
    response.json()
    .then(function (data) {
        if (response.status == 400) {
            console.log(data);
            // gestion erreur données envoyer a la requette
        } else if (response.status == 403) {
            console.log(data);
            // gestion erreur authentification
        } else {
            console.log(data);
            // ici on peut exploiter nos donnée
            let homesection = document.querySelector(".homesection");
            let arr = data["articles"];
            let str = "";
                    for (let i = 0; i < arr.length; i++) {
                        
                        str +=
                        `
                        <div class="post" id="${data["articles"][i]["id"]}">
                        <img src="${data["articles"][i]["img"]}">
                        <div class="titreandresum">
                        <h2>${data["articles"][i]["title"]}</h2>
                        <h4>${data["articles"][i]["author"]}</h4>
                        <p>${data["articles"][i]["resume"]}</p>
                        </div>
                        </div>
                        `
                        
                    }
                    
                    homesection.innerHTML = str;
                    
                    let post = document.querySelectorAll(".post");
                    console.log(post);
                    
                    post.forEach(element => {
                        element.addEventListener("click" , () => {
                            var mainid = element.id;
                            console.log(mainid);

                            document.location.href="./article.html"; 
                            sessionStorage.setItem("passid", mainid);
                        })
    
                    });
                }
            })
            .catch(function (data_parsing_error) {
                console.log(data_parsing_error);
            })
        })
        .catch(function (server_errors) {
            // Cas erreur server (API)
            console.log(server_errors);
        })
        
        