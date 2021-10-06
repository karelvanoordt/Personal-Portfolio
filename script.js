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
}
]



const openButton = document.querySelector('.project-button');
const projectContainer = document.getElementById('works');
let modalBackdrop;
let modal;
function closeModal() {
  if (modalBackdrop) {
    modalBackdrop.remove();
  }
}

  //for loop to find the correct index in object array

for (let i = 0; i < details.length; i+=1) {

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
  heading.textContent = i.name; // array item for name
  modal.appendChild(heading);

  // Characteristics
  const characteristics = document.createElement('ul');
  characteristics.classList.add('characteristics-container');
  modal.appendChild(characteristics);

  const char1 = document.createElement('li');
  char1.textContent = i.characteristics[0]; //Add item from characteristics array
  char1.classList.add('char');
  characteristics.appendChild(char1);

  const char2 = document.createElement('li');
  char2.textContent = i.characteristics[1]; //Add item from characteristics array
  char2.classList.add('char');
  characteristics.appendChild(char2);

  const char3 = document.createElement('li');
  char3.textContent = i.characteristics[2]; //Add item from characteristics array
  char3.classList.add('char');
  characteristics.appendChild(char3);

  // paragraph
  const description = document.createElement('p');
  description.textContent = i.description; // Add description from object
  description.classList.add('modal-description');
  modal.appendChild(description);

  // Technologies
  const technologies = document.createElement('ul');
  technologies.classList.add('technologies-container');
  modal.appendChild(technologies);

  const techList1 = document.createElement('li');
  techList1.textContent = i.technologies[0]; //Add item from technologies array
  techList1.classList.add('techlist');
  technologies.appendChild(techList1);

  const techList2 = document.createElement('li');
  techList2.textContent = i.technologies[1]; //Add item from technologies array
  techList2.classList.add('techlist');
  technologies.appendChild(techList2);

  const techList3 = document.createElement('li');
  techList3.textContent = i.technologies[2]; //Add item from technologies array
  techList3.classList.add('techlist');
  technologies.appendChild(techList3);

  // image
  const image = document.createElement('img');
  image.classList.add('modal-image');
  image.src = i.image; // Add image
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

  // Button 2
  const button2 = document.createElement('button');
  button2.setAttribute('type', 'button');
  button2.textContent = 'See Source';
  button2.classList.add('buttonSource');
  buttonContainer.appendChild(button2);

  document.body.insertBefore(modal, projectContainer);
  
})

}