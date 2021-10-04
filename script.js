


let toolbar = document.querySelector('.toolbar-button');

toolbar.addEventListener('click', mobileMenu);

function mobileMenu () {
    if (toolbar.classList.toggle('active')) {
       let layout = document.getElementById("navbar-mobile");
        let toolbarButton = document.getElementById("hamburger");
        let mobileLogo = document.getElementById("mobile-logo");

        mobileLogo.style.display = 'none';
       toolbarButton.style.display ='none';

        layout.innerHTML += 
        `<nav class="menu">
        <div class="nav-container">
          <a class="exit-link" href="#" id="exit-link">
            <img class="exit-img" src="images/mobile-menu/exit-icon.png" alt="exit" id="exit-menu">
          </a>

          <ul class="menu-items">
            <li ><a class="menu-option" href="#portfolio-header">Portfolio</a></li>
            <li ><a class="menu-option" href="#about">About</a></li> 
            <li ><a class="menu-option" href="#contact-container">Contact</a></li> 
          </ul>
        </div>
        </nav>`

}else {
  console.log('click here');
}

}

let mobileNav = document.querySelectorAll('.menu-items');
mobileNav.forEach(n => n.addEventListener("click", mobilecloseMenu));
let menu = document.querySelector('.menu');


function mobilecloseMenu() {
  
  if(x.classList.toggle('active')){
    let x= document.getElementById('exit-link');
   
   
    
  }
}