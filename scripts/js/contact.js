const contactForm = document.getElementById('contact-form');
const submit = document.getElementById('submit-btn');

// Add and remove animation classes automatically
const animateCSS = (element, animation, prefix = 'animate__') => new Promise((resolve) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, clean the classes and resolve the Promise
    function handleAnimationEnd(e) {
        e.stopPropagation();
        node.classList.remove(`${prefix}animated`, animationName);
        resolve('Animation ended');
    };

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
});

// When the user clicks the submit-btn, apply inactive styling 
submit.addEventListener('mousedown', () => {
    submit.classList.remove('hover:translate-x-2', 'hover:-translate-y-2', 'hover:shadow-small');
    submit.classList.add('bg-activeyellow');
});

// When the user clicks the submit-btn and the form is valid, trigger the send animation
submit.addEventListener('click', () => {
    cssClasses = ['animate__animated', 'animate__backOutRight'];
    document.querySelector('#contact-form').classList.add(...cssClasses);
    setTimeout(() => {
        document.querySelector('#contact-form').classList.remove(...cssClasses);
        animateCSS('#contact-form', 'backInLeft');
        // When the animation ends, apply active styling
        document.querySelector('#contact-form').addEventListener('animationend', () => {
            submit.classList.remove('bg-activeyellow');
            submit.classList.add('hover:translate-x-2', 'hover:-translate-y-2', 'hover:shadow-small');  
        });
    }, 900);
});

// When the user clicks the submit-btn and the form is invalid, trigger the rejected animation
submit.addEventListener('click', () => {
    animateCSS('#contact-form', 'headShake')
});