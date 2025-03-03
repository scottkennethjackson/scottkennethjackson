const main = document.querySelector('main');
const darkBtn = document.getElementById('dark-btn');
const slider = document.getElementById('slider');

darkBtn.addEventListener('click', () => {
    main.classList.toggle('dark');
    slider.classList.toggle('-translate-x-9');
});
