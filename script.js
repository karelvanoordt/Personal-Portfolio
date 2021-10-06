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
}git 

closeMenu.addEventListener('click', close);

const links = document.querySelectorAll('.menu-option');

for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', () => {
    navbarMenu.classList.add('display-none');
  });
}

// Email Validation

function validation() {
  const form = document.querySelector('.contact-form');
  const email = document.getElementById('email').value;
  const text = document.getElementById('text');
  const pattern = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;


  if (email.match(pattern)) {
    form.classList.add('valid');
    form.classList.remove('invalid');
    text.innerHTML = 'Valid Email';
    text.style.color = '#00ff00';
  } else {
    form.classList.add('invalid');
    form.classList.remove('valid');
    text.innerHTML = 'Invalid Email';
    text.style.color = '#ff0000';


  }
  // if (email === '') {
  //   form.classList.remove('invalid');
  //   form.classList.remove('valid');
  //   text.innerHTML = '';
  // }
}