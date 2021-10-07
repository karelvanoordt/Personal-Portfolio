/* eslint-disable linebreak-style */
const navbarMenu = document.querySelector('.navbar-menu');
const openMenu = document.querySelector('.toolbar-button');
const backdrop = document.querySelector('.backdrop');
const hamburger = document.querySelector('.hamburger');

function open() {
  navbarMenu.classList.remove('display-none');
  backdrop.classList.remove('display-none');
  hamburger.classList.add('display-none');
}

openMenu.addEventListener('click', open);

const closeMenu = document.querySelector('.exit-link');

function close() {
  navbarMenu.classList.add('display-none');
  hamburger.classList.remove('display-none');
}

closeMenu.addEventListener('click', close);

const links = document.querySelectorAll('.menu-option');

for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', () => {
    navbarMenu.classList.add('display-none');
  });
}

const form = document.querySelector('.contact-form');
const errorMsg = document.getElementById('text');
const email = document.getElementById('email');

form.addEventListener('submit', (event) => {
  const pattern = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  if (email.value.match(pattern)) {
    errorMsg.innerHTML = 'This is a valid Email';
    errorMsg.style.color = '#00ff00';
  } else {
    event.preventDefault();
    errorMsg.innerHTML = 'Not a valid Email';
    errorMsg.style.color = '#ff0000';
  }
});
