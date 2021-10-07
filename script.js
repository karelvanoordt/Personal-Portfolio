/* eslint-disable linebreak-style */

//navigation menu
const navbarMenu = document.querySelector('.navbar-menu');
const openMenu = document.querySelector('.toolbar-button');
const modalBackdrop = document.querySelector('.backdrop');
const hamburger = document.querySelector('.hamburger');

function open() {
  navbarMenu.classList.remove('display-none');
  modalBackdrop.classList.remove('display-none');
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

//validation form

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

//pop-up

const details = [{
  name: 'Tonic',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  image: 'images/work/screenshot/snapshot-1.png',
  technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
  characteristics: ['CANOPY', 'Back End Dev', '2015'],
  link: '#',
  source: '#',
},

{
  name: 'Multi Post Stories',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  image: 'images/work/screenshot/snapshot-2.png',
  technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
  characteristics: ['CANOPY', 'Back End Dev', '2015'],
  link: '#',
  source: '#',
},

{
  name: 'Tonic',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  image: 'images/work/screenshot/snapshot-3.png',
  technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
  characteristics: ['CANOPY', 'Back End Dev', '2015'],
  link: '#',
  source: '#',
},

{
  name: 'Multi Post Stories ',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  image: 'images/work/screenshot/snapshot-4.png',
  technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
  characteristics: ['CANOPY', 'Back End Dev', '2015'],
  link: '#',
  source: '#',
},
];



const openButton = document.querySelectorAll('.project-button');
const projectContainer = document.getElementById('works');

let modalBackground;

//for loop to find the correct index in object array

  for (let i = 0; i < details.length; i += 1) {
    openButton.addEventListener('click', () => {
      modalBackground = document.createElement('div');
      modalBackground.classList.add('modal-background');
      // backdrop.addEventListener('click', closeModal);
      document.body.insertBefore(modalBackground, projectContainer);
      // Modal
      const modal = document.createElement('div');
      modal.classList.add('modal');
      // Heading
      const heading = document.createElement('h2');
      heading.textContent = details[i].name;
      modal.appendChild(heading);
      // Technologies
      const techGroup = document.createElement('ul');
      techGroup.classList.add('technologies-container');
      modal.appendChild(techGroup);
      // Tech groups
      const techList1 = document.createElement('li');
      techList1.textContent = details[i].technologies[0];
      techList1.classList.add('techlist');
      techGroup.appendChild(techList1);
      const techList2 = document.createElement('li');
      techList2.textContent = details[i].technologies[1];
      techList2.classList.add('techlist');
      techGroup.appendChild(techList2);
      const techList3 = document.createElement('li');
      techList3.textContent = details[i].technologies[2];
      techList3.classList.add('techlist');
      techGroup.appendChild(techList3);
      // paragraph
      const description = document.createElement('p');
      description.textContent = details[i].description;
      description.classList.add('modal-description');
      modal.appendChild(description);
      // image
      const image = document.createElement('img');
      image.classList.add('modal-image');
      image.src = details[i].image;
      modal.appendChild(image);
      // Buttons
      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('button-actions');
      modal.appendChild(buttonContainer);
      // Button 1
      const button1 = document.createElement('button');
      button1.setAttribute('type', 'button');
      button1.classList.add('buttonLink');
      button1.textContent = 'Live link';
      button1.href = details[i].link;
      buttonContainer.appendChild(button1);
      // Button 2
      const button2 = document.createElement('button');
      button2.setAttribute('type', 'button');
      button2.classList.add('buttonSource');
      button2.href = details[i].source;
      button2.textContent = 'Source link';
      buttonContainer.appendChild(button2);
      document.body.insertBefore(modal, projectContainer);
    });
  }