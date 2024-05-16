const submit = document.getElementById('submit-btn');

submit.addEventListener('mousedown', () => {
    submit.classList.remove('hover:translate-x-2', 'hover:-translate-y-2', 'hover:shadow-small');
});