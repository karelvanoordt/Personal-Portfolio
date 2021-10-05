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

// const details = {
//   name: '',
//   description: '',
//   image: '',
//   technologies: [],
//   link: '',
//   source: '',
// };

const openButton = document.querySelector('.project-button');
const projectContainer = document.getElementById('works');
let modalBackdrop;
let modal;
function closeModal() {
  if (modalBackdrop) {
    modalBackdrop.remove();
  }
}

openButton.addEventListener('click', () => {
  // backdrop
  modalBackdrop = document.createElement('div');
  modalBackdrop.classList.add('modal-backdrop');
  modalBackdrop.addEventListener('click', closeModal);
  document.body.insertBefore(modalBackdrop, projectContainer);
  // Modal

  modal = document.createElement('div');
  modal.classList.add('modal');
  // Heading
  const heading = document.createElement('h3');
  heading.textContent = 'Tonic';
  modal.appendChild(heading);

  // Technologies
  const characteristics = document.createElement('ul');
  characteristics.classList.add('characteristics-container');
  modal.appendChild(characteristics);

  const char1 = document.createElement('li');
  char1.textContent = 'CANOPY';
  char1.classList.add('char');
  characteristics.appendChild(char1);

  const char2 = document.createElement('li');
  char2.textContent = 'Back End Dev';
  char2.classList.add('char');
  characteristics.appendChild(char2);

  const char3 = document.createElement('li');
  char3.textContent = '2015';
  char3.classList.add('char');
  characteristics.appendChild(char3);

  // paragraph
  const description = document.createElement('p');
  description.textContent = 'Lorem Ipsum';
  description.classList.add('modal-description');
  modal.appendChild(description);

  // Technologies
  const technologies = document.createElement('ul');
  technologies.classList.add('technologies-container');
  modal.appendChild(technologies);

  const techList1 = document.createElement('li');
  techList1.textContent = 'HTML';
  techList1.classList.add('techlist');
  technologies.appendChild(techList1);

  const techList2 = document.createElement('li');
  techList2.textContent = 'CSS';
  techList2.classList.add('techlist');
  technologies.appendChild(techList2);

  const techList3 = document.createElement('li');
  techList3.textContent = 'JAVASCRIPT';
  techList3.classList.add('techlist');
  technologies.appendChild(techList3);

  // image
  const image = document.createElement('img');
  image.classList.add('modal-image');
  image.src = 'images/work/screenshot/snapshot-1.png';
  modal.appendChild(image);
  // Buttons
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-actions');
  modal.appendChild(buttonContainer);
  // Button 1
  const button1 = document.createElement('button');
  button1.setAttribute('type', 'button');
  button1.textContent = 'See live';
  button1.classList.add('buttonLink');
  buttonContainer.appendChild(button1);

  const button2 = document.createElement('button');
  button2.setAttribute('type', 'button');
  button2.textContent = 'See Source';
  button2.classList.add('buttonSource');
  buttonContainer.appendChild(button2);

  document.body.insertBefore(modal, projectContainer);
});