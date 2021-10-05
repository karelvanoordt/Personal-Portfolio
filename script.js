

const navbarMenu = document.querySelector('.navbar-menu');



const openMenu = document.querySelector('.toolbar-button');
openMenu.addEventListener('click', open);

const closeMenu = document.querySelector('.exit-link');
closeMenu.addEventListener('click',close);

function open() {
  navbarMenu.classList.remove('display-none');
}

function close() {
  navbarMenu.classList.add('display-none');
}

const links = document.querySelectorAll('.menu-option');

for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', () => {
    navbarMenu.classList.add('display-none');
  })
}
