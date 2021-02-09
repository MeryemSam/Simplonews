
//histoire du la nav
let nav = document.querySelector("nav");
nav.innerHTML= 
`<img src="./assets/images/SIMPLONNEWS.svg" alt="logo" srcset="">

<div>
    <i class="barbuton fas fa-bars"></i>
</div>

<div class="navigation">
    <a href="">Home</a>
    <a href="">Log out</a>
</div>

<div class="navigationphone">
    <a href="">Home</a>
    <a href="">Log out</a>
</div>`;


let barbuton = document.querySelector(".barbuton");
let navigation = document.querySelector(".navigation");
barbuton.addEventListener("click" , () =>{

    if (navigation.className === "navigationhidden") {
        navigation.classList.add("navigation");
        navigation.classList.remove("navigationhidden");
      } else {
        navigation.classList.add("navigationhidden");
        navigation.classList.remove("navigation");

      }
      
})
//fin de histoire du la nav