let firstname = document.querySelector("#firstname");
let lastname = document.querySelector("#lastname");
let mailadress = document.querySelector("#email");
let passwordfix = document.querySelector("#password");
let singup = document.querySelector("#signupbutton");
let errorme = document.querySelector(".errorme");
let errormessgage = document.querySelector(".errormessgage");
let close = document.querySelector(".errormessgage i")


close.addEventListener("click", () => {
    errormessgage.style.display = "none";

})

singup.addEventListener("click", (event) => {
    if (
        firstname.value == "" ||
        lastname.valuet == "" ||
        mailadress.value == "" ||
        passwordfix.value == ""
    ) {
        errorme.textContent = "Veuillez remplir les champs requis.";
        errormessgage.style.display = "block";

        return 0
    } else {


        let fetchConfig = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(

                {
                    "firstName": firstname.value,
                    "lastName": lastname.valuet,
                    "email": mailadress.value,
                    "password": passwordfix.value,
                }
            )
        }

        // Initialise la requete http avec l'url de la ressource et les configurations définis ci-dessus
        fetch("https://simplonews.brianboudrioux.fr/users", fetchConfig)
            .then(function(response) {

                // On appelle la method json a partir de l'objet response pour parser les données renvoyer par l'API
                response.json()
                    .then(function(data) {
                        if (response.status == 400) {
                            console.log(data);
                            errorme.textContent = "Il existe déjà un compte avec cet email."

                            if (firstname.value == null || firstname.value == "" || lastname.value == null || lastname.value == "" || mailadress.value == null || mailadress.value == "" || passwordfix.value == null || passwordfix.value == "") {
                                errorme.textContent = "Veuillez remplir les champs requis.";
                            }
                            // gestion erreur données envoyer a la requette
                            errormessgage.style.display = "block";
                        } else if (response.status == 403) {
                            console.log(data);
                            // gestion erreur authentification
                            errorme.innerHTML = data["error"];
                            // errorme.innerHTML = "Le mot de passe ne correspond pas a celui défini lors de la creation de votre compte."


                            errormessgage.style.display = "block";
                        } else {
                            console.log(data);
                            // ici on peut exploiter nos donnée
                            console.log("sccusse");
                            errormessgage.style.display = "block";
                            errormessgage.classList.add("greenmessage");
                            errormessgage.classList.remove("errormessgage");
                            errorme.textContent = "Succès ! Redirection vers la page de connexion dans 3 secondes.";

                            setInterval(() => {
                                document.location.href = "./index.html";
                            }, 3000);
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
    }
})