const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

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
submitBtn.addEventListener('mousedown', () => {
    submitBtn.classList.remove('hover:translate-x-2', 'hover:-translate-y-2', 'hover:shadow-small');
    submitBtn.classList.add('bg-activeyellow');
});

// When the contact-form animation ends, apply active styling
function reactivate() {
    document.querySelector('#contact-form').addEventListener('animationend', () => {
        submitBtn.classList.remove('bg-activeyellow');
        submitBtn.classList.add('hover:translate-x-2', 'hover:-translate-y-2', 'hover:shadow-small');  
    });
};


// When the user clicks the submit-btn and the form is valid, trigger the send animation
/*submitBtn.addEventListener('click', () => {
    cssClasses = ['animate__animated', 'animate__backOutRight'];
    document.querySelector('#contact-form').classList.add(...cssClasses);
    setTimeout(() => {
        document.querySelector('#contact-form').classList.remove(...cssClasses);
        animateCSS('#contact-form', 'backInLeft');
        reactivate();
    }, 900);
});*/

// When the user clicks the submit-btn and the form is invalid, trigger the rejected animation
/*submitBtn.addEventListener('click', () => {
    animateCSS('#contact-form', 'headShake');
    reactivate();
});*/


// Break

// When the user clicks the submit-btn, validate the form and handle accordingly
//$(function() {
$('contact-form').on('submit', (e) => {     // #contact-form?
    e.preventDefault();
    
    const name = $('#name').val();
    const email = $('#email').val();
    const message = $('#message').val();
    const submit = $('#submit-btn').val;
    $('#status-notification').load('../php/mail.php', {
        name: name,
        email: email,
        message: message,
        submit: submit,
    });
});
//});