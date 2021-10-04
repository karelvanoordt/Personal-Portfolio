


let toolbar = document.querySelector('.toolbar-button');

toolbar.addEventListener('click', mobileMenu);

function mobileMenu () {
    if (toolbar.classList.toggle('active')) {
       let layout = document.getElementById("hamburger");
        let toolbarButton = document.getElementById("toolbar-button");
        let mobileLogo = document.getElementById("mobile-logo");

        mobileLogo.style.display = 'none';
        toolbarButton.innerHTML =
        `<a class="toolbar-button" href=# id="hamburger">
        <img src="images/mobile-menu/exit.png" alt="exit">
      </a>`;



        layout.innerHTML += 
        `<div class="background">
        <a class="exit-link">
            <img class="exit-img" src="images/mobile-menu/exit.png" alt="exit">
        </a>

        <ul class="menu-items">
           <li class="menu-option"><a href="#">Portfolio</a></li>
           <li class="menu-option"><a href="#">About</a></li> 
           <li class="menu-option"><a href="#">Contact</a></li> 
        </ul>
        </div>`


 


}
}