const hamburgerToggle = document.querySelector('.hamburger-container');
const menu = document.querySelector('.menu-list');

hamburgerToggle.addEventListener('click', () =>{
    menu.classList.toggle('active');
});

const experienceToggle =  document.querySelector('.experience');
const display = document.querySelector('.experience-container');

experienceToggle.addEventListener('click', () =>{
    display.classList.toggle('experience-active');
});