
//histoire du la nav
let nav = document.querySelector("nav");
nav.innerHTML= 
`<img src="./assets/images/SIMPLONNEWS.svg" alt="logo" srcset="">

<div>
    <i class="barbuton fas fa-bars"></i>
</div>

<div class="navigationhidden">
    <a href="home.html">Home</a>
    <a href="">Log out</a>
</div>

<div class="navigationphone">
    <a href="home.html">Home</a>
    <a href="">Log out</a>
</div>`;


let barbuton = document.querySelector(".barbuton");
let navigation = document.querySelector(".navigationhidden");
barbuton.addEventListener("click" , () =>{

    if (navigation.className === "navigationhidden") {
        navigation.classList.add("navigation");
        navigation.classList.remove("navigationhidden");
      } else {
        navigation.classList.add("navigationhidden");
        navigation.classList.remove("navigation");

      }
      
})
//fin du la nav


//histoire du la footer
let footer = document.querySelector("footer");
footer.innerHTML = `
<div class="footer-right">

<a href="#"><i class="fab fa-facebook-f"></i></a>
<a href="#"><i class="fab fa-twitter"></i></a>
<a href="#"><i class="fab fa-linkedin"></i></a>
<a href="#"><i class="fab fa-whatsapp"></i></a>
<a href="#"><i class="fab fa-pinterest"></i></a>

</div>
<p>Copyrights reserved by Vincent and the theam &copy; 2021</p>
<div class="footer-left">


<div class="footer-links">
    <a href="#">Contact</a>
    <a href="#">About</a>
    <a href="#">Help</a>
    <a href="#">Contribute</a>
</div>
</div>`

//fin du la footer