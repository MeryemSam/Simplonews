let firstname = document.querySelector("#firstname");
let lastname = document.querySelector("#lastname");
let mailadress = document.querySelector("#email");
let passwordfix = document.querySelector("#password");
let singup = document.querySelector("#signupbutton");

   

singup.addEventListener("click" , createuser);

function createuser(first,last,pass,mail) {

    var first = firstname.value ;
    var last = lastname.value ;
    var mail = mailadress.value ;
    var pass = passwordfix.value ;
    
    let fetch_config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
    
            {
                "firstName": first,
                "lastName": last,
                "email": mail,
                "password": pass,
            }
        )
    }
    
    // Initialise la requete http avec l'url de la ressource et les configurations définis ci-dessus
    fetch("https://simplonews.brianboudrioux.fr/users", fetch_config)
    .then(function (response) {
    
        // On appelle la method json a partir de l'objet response pour parser les données renvoyer par l'API
        response.json()
            .then(function (data) {
                if (response.status == 400) {
                    console.log(data);
                    // gestion erreur données envoyer a la requette
                }
                else if (response.status == 403) {
                    console.log(data);
                    // gestion erreur authentification
                }
                else {
                    console.log(data);
                    // ici on peut exploiter nos donnée
                    console.log("scuss");
                }
            })
            .catch(function (data_parsing_error) {
                console.log(data_parsing_error);
            })
    })
    .catch(function(server_errors) {
        // Cas erreur server (API)
        console.log(server_errors);
    })
}
