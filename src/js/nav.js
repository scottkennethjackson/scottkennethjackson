const main = document.querySelector('main');
const menuBtn = document.getElementById('menu-btn');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
const dropdown = document.getElementById('dropdown');
const darkBtn = document.getElementById('dark-btn');
const slider = document.getElementById('slider');

menuBtn.addEventListener('mouseenter', () => {
    bar1.classList.add('duration-500');
    bar2.classList.add('duration-500');
    bar3.classList.add('duration-500');
});

// When the user leaves the menu-btn, remove the duration-700 class
menuBtn.addEventListener('mouseleave', () => {
    bar1.classList.remove('duration-500');
    bar2.classList.remove('duration-500');
    bar3.classList.remove('duration-500');
});

menuBtn.addEventListener('click', () => {
    bar1.classList.toggle('rotate-45');
    bar1.classList.toggle('translate-y-2.5');
    bar2.classList.toggle('rotate-45');
    bar3.classList.toggle('-rotate-45');
    bar3.classList.toggle('-translate-y-2.5');
    dropdown.classList.toggle('translate-y-full');
});

darkBtn.addEventListener('click', () => {
    main.classList.toggle('dark');
    slider.classList.toggle('-translate-x-9');
});
