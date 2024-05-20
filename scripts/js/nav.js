const navbar = document.getElementById('navbar');
const menuBtn = document.getElementById('menu-btn');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
const dropdown = document.getElementById('dropdown');
const navMenu = document.getElementById('nav-menu');
const sectionLink = document.querySelectorAll('.section-link');
const duration = 700;

// When the user enters the menu-btn, add the duration-700 class
menuBtn.addEventListener('mouseenter', () => {
    bar1.classList.add('duration-700');
    bar2.classList.add('duration-700');
    bar3.classList.add('duration-700');
});

// When the user leaves the menu-btn, remove the duration-700 class
menuBtn.addEventListener('mouseleave', () => {
    bar1.classList.remove('duration-700');
    bar2.classList.remove('duration-700');
    bar3.classList.remove('duration-700');
});

// When the user clicks the menu-btn, rotate bars and display the dropdown
menuBtn.addEventListener('click', () => {
    bar1.classList.toggle('rotate-45');
    bar1.classList.toggle('translate-y-2');
    bar2.classList.toggle('rotate-45');
    bar3.classList.toggle('-rotate-45');
    bar3.classList.toggle('-translate-y-2');
    dropdown.classList.toggle('translate-y-full');
    navMenu.classList.remove('hidden');
});

// When the user leaves the navbar, reset the menu-btn and dropdown
navbar.addEventListener('mouseleave', () => {
    bar1.classList.remove('rotate-45');
    bar1.classList.remove('translate-y-2');
    bar2.classList.remove('rotate-45');
    bar3.classList.remove('-rotate-45');
    bar3.classList.remove('-translate-y-2');
    dropdown.classList.remove('translate-y-full');
    setTimeout(() => {
        navMenu.classList.add('hidden');
    }, duration);
});

// When the user clicks a section-link, reset the menu-btn and dropdown
sectionLink.forEach(link => link.addEventListener('click', () => {
    bar1.classList.remove('rotate-45');
    bar1.classList.remove('translate-y-2');
    bar2.classList.remove('rotate-45');
    bar3.classList.remove('-rotate-45');
    bar3.classList.remove('-translate-y-2');
    dropdown.classList.remove('translate-y-full');
    setTimeout(() => {
        navMenu.classList.add('hidden');
    }, duration);
}));