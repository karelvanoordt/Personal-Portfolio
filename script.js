//navigation menu CORRECT
const navbarMenu = document.querySelector('.navbar-menu');
const openMenu = document.querySelector('.toolbar-button');
const menuBackdrop = document.querySelector('.menu-backdrop');
const hamburger = document.querySelector('.hamburger');

function open() {
  navbarMenu.classList.remove('display-none');
  menuBackdrop.classList.remove('display-none');
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

// preserve data in local storage
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputMsg = document.getElementById('message');

const addForm = (event) => {
  event.preventDefault();
  const data = {
    name: inputName.value,
    email: inputEmail.value,
    message: inputMsg.value,
  };
  localStorage.setItem('Form data', JSON.stringify(data));
};
form.addEventListener('change', addForm);
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('Form data') !== null) {
    const getData = JSON.parse(localStorage.getItem('Form data'));
    inputName.value = getData.name;
    inputEmail.value = getData.email;
    inputMsg.value = getData.message;
  }
});


//pop-up

const details = [{
  name: 'Tonic',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essent',
  image: 'images/work/screenshot/snapshot-1.png',
  technologies: ['html', 'css', 'javascript'],
  milestones: ['CANOPY', 'Back End Dev', '2015'],
  link: '#',
  source: '#',
}];



const openButton = document.querySelector('.project-button');
const projectContainer = document.getElementById('works');

let modalBackground;

//for loop to find the correct index in object array

  for (let i = 0; i < details.length; i += 1) {
    openButton.addEventListener('click', () => {

      
      // body.classList.add('hide-scrollbar');
      modalBackground = document.createElement('div');
      modalBackground.classList.add('modal-background');
      // backdrop.addEventListener('click', closeModal);
      document.body.insertBefore(modalBackground, projectContainer);     
      // Modal
      const modal = document.createElement('div');
      modal.classList.add('modal');
      // Heading Container
      const headingContainer = document.createElement('div');
      headingContainer.classList.add('heading-container');
      modal.appendChild(headingContainer);
      // Heading
      const heading = document.createElement('h2');
      heading.textContent = details[i].name;
      heading.classList.add('modal-heading');
      headingContainer.appendChild(heading);
      // Exit modal
      const exitModal = document.createElement('a');
      exitModal.classList.add('modal-exit');
      exitModal.textContent = 'X';
      headingContainer.appendChild(exitModal);
      // Milestones
      const milestonesGroup = document.createElement('ul');
      milestonesGroup.classList.add('milestones-container');
      modal.appendChild(milestonesGroup);
      // Milestones group
      const miles1 = document.createElement('li');
      miles1.textContent = details[i].milestones[0];
      miles1.classList.add('mileslist');
      miles1.classList.add('miles-caps')
      milestonesGroup.appendChild(miles1);

      const dot = document.createElement('img');
      dot.src = 'images/work/Icons/Counter.png';
      milestonesGroup.appendChild(dot);

      const miles2 = document.createElement('li');
      miles2.textContent = details[i].milestones[1];
      miles2.classList.add('mileslist');
      milestonesGroup.appendChild(miles2);

      const dot2 = document.createElement('img');
      dot2.src = 'images/work/Icons/Counter.png';
      milestonesGroup.appendChild(dot2);

      const miles3 = document.createElement('li');
      miles3.textContent = details[i].milestones[2];
      miles3.classList.add('mileslist');
      milestonesGroup.appendChild(miles3);
      // image container
      const imageContainer = document.createElement('div');
      imageContainer.classList.add('modal-image-container');
      modal.appendChild(imageContainer);
      // image
      const image = document.createElement('img');
      image.classList.add('modal-image');
      image.src = details[i].image;
      imageContainer.appendChild(image);
      //botom row container
      const botRow = document.createElement('div');
      botRow.classList.add('modal-bot-row');
      modal.appendChild(botRow);
      // paragraph
      const description = document.createElement('p');
      description.textContent = details[i].description;
      description.classList.add('modal-description');
      botRow.appendChild(description);
      const column2 = document.createElement('div');
      column2.classList.add('modal-col2');
  
      // Technologies
      const techGroup = document.createElement('ul');
      techGroup.classList.add('technologies-container');
      botRow.appendChild(techGroup);
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
      // Separator
      const separator = document.createElement('hr');
      botRow.appendChild(separator);
      // Buttons
      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('button-actions');
      botRow.appendChild(buttonContainer);
      // Button 1
      const button1 = document.createElement('button');
      button1.setAttribute('type', 'button');
      button1.classList.add('buttonLink');
      // button1.textContent = 'Live link';
      button1.innerHTML = 'Live Link <img src="images/work/Icons/link-icon.png">';
      button1.href = details[i].link;
      buttonContainer.appendChild(button1);
      // Button 2
      const button2 = document.createElement('button');
      button2.setAttribute('type', 'button');
      button2.classList.add('buttonSource');
      button2.href = details[i].source;
      button2.innerHTML = 'Source link <img src="images/work/Icons/github-icon.png">';
      buttonContainer.appendChild(button2);
      document.body.insertBefore(modal, projectContainer);

      exitModal.addEventListener('click', () => {
        modalBackground.remove();
        modal.remove();
      });
    });
}