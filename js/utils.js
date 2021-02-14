// LOGOUT
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

// redirectToLoginPage()