const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const basicInputs = document.querySelectorAll('#name, #message');
const allInputs = document.querySelectorAll('input, textarea');
const submitBtn = document.getElementById('submit-btn');
const statusNotification = document.getElementById('status-notification');

successClasses = ['border-mediumgreen', 'focus:border-mediumgreen', 'focus:ring-mediumgreen', 'bg-lightgreen', 'text-darkgreen'];
errorClasses = ['border-mediumred', 'focus:border-mediumred', 'focus:ring-mediumred', 'bg-lightred', 'text-darkred'];

// Check name and message input values and apply appropriate styling
basicInputs.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.value.trim() == '') {
            input.classList.remove(...successClasses);
            input.classList.add(...errorClasses);
        } else {
            input.classList.remove(...errorClasses);
            input.classList.add(...successClasses);
        };
    });
});

// Validate email and return a boolean value
function validateEmail() {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.value.match(validRegex)) {
        return true;
    } else {
        return false
    };
};

// Check email input value and apply appropriate styling
emailInput.addEventListener('input', () => {
    validateEmail();

    if (email.value.trim() == '' || validateEmail() == false) {
        email.classList.remove(...successClasses);
        email.classList.add(...errorClasses);
    } else {
        email.classList.remove(...errorClasses);
        email.classList.add(...successClasses);
    };
});

// When the user presses the submit-btn, apply inactive styling 
submitBtn.addEventListener('mousedown', () => {
    submitBtn.classList.remove('hover:translate-x-2', 'hover:-translate-y-2', 'hover:shadow-small');
    submitBtn.classList.add('bg-activeyellow');
});

// If the user leaves the submit-btn mid-press, apply active styling
submitBtn.addEventListener('mouseleave', () => {
    submitBtn.classList.remove('bg-activeyellow');
    submitBtn.classList.add('hover:translate-x-2', 'hover:-translate-y-2', 'hover:shadow-small');
});

// Send email and notify the user
function sendEmail() {
    statusNotification.innerHTML = 'Message sent! Thank you';
    setTimeout(() => {
        statusNotification.innerHTML = '';
    }, 2000);
};

// Check the form and handle accordingly
function validateForm() {
    let namePass = false;
    let emailPass = false;
    let messagePass = false;

    // Get input values
    function getValue(inputID) {
        return document.getElementById(inputID).value;
    };

    // Validate email and check input value pass/fail states
    validateEmail();
    
    if (getValue('name').trim() == '') {
        nameInput.classList.remove(...successClasses);
        nameInput.classList.add(...errorClasses);
    } else {
        namePass = true;
        nameInput.classList.remove(...errorClasses);
        nameInput.classList.add(...successClasses);
    };

    if (getValue('email').trim() == '' || validateEmail() == false) {
        emailInput.classList.remove(...successClasses);
        emailInput.classList.add(...errorClasses);
    } else {
        emailPass = true;
        emailInput.classList.remove(...errorClasses);
        emailInput.classList.add(...successClasses);
    };

    if (getValue('message').trim() == '') {
        messageInput.classList.remove(...successClasses);
        messageInput.classList.add(...errorClasses);
    } else {
        messagePass = true;
        messageInput.classList.remove(...errorClasses);
        messageInput.classList.add(...successClasses);
    };

    // Add and remove animation classes automatically
    const animateCSS = (element, animation, prefix = 'animate__') => new Promise((resolve) => {
        const animationName = `${prefix}${animation}`;
        const animationTime = `${prefix}faster`;
        const node = document.querySelector(element);
    
        node.classList.add(`${prefix}animated`, animationName, animationTime);
    
        // When the animation ends, clean the classes and resolve the Promise
        function handleAnimationEnd(e) {
            e.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName, animationTime);
            resolve('Animation ended');
        };
    
        node.addEventListener('animationend', handleAnimationEnd, {once: true});
    });
    
    // When the contact-form animation ends, apply active styling to the submit-btn
    function reactivate() {
        contactForm.addEventListener('animationend', () => {
            submitBtn.disabled = false;
            submitBtn.classList.remove('bg-activeyellow');
            submitBtn.classList.add('hover:translate-x-2', 'hover:-translate-y-2', 'hover:shadow-small');  
        });
    };
    
    // Apply the fail animation to the contact-form
    function errorAnimation() {
        animateCSS('#contact-form', 'headShake');
        if (!namePass && !messagePass && !emailPass) {
            statusNotification.innerHTML = 'Please fill in empty fields and enter a valid email address';
        } else if ((namePass && !messagePass) && !emailPass) {
            statusNotification.innerHTML = 'Please fill in empty field and enter a valid email address';
        } else if ((!namePass && messagePass) && !emailPass) {
            statusNotification.innerHTML = 'Please fill in empty field and enter a valid email address';
        } else if ((namePass && messagePass) && !emailPass) {
            statusNotification.innerHTML = 'Please enter a valid email address';
        } else if ((namePass && !messagePass) && emailPass) {
            statusNotification.innerHTML = 'Please fill in empty field';
        } else if ((!namePass && messagePass) && emailPass) {
            statusNotification.innerHTML = 'Please fill in empty field';
        } else {
            statusNotification.innerHTML = 'Please fill in empty fields';
        }
        setTimeout(() => {
            reactivate();
        }, 500);
    };
    
    // Apply the pass animation to the contact-form
    function successAnimation() {
        submitBtn.disabled = true;
        cssClasses = ['animate__animated', 'animate__backOutRight'];
        contactForm.classList.add(...cssClasses);
        setTimeout(() => {
            contactForm.classList.remove(...cssClasses);
            allInputs.forEach((input) => {
                input.value = "";
                input.classList.remove(...successClasses)
            });
            animateCSS('#contact-form', 'backInLeft');
            reactivate();
        }, 400);
    };

    if (!namePass || !emailPass || !messagePass) {
        errorAnimation();
    } else {
        successAnimation();
        sendEmail();
    };
};

// When the user releases the submit-btn, validate the form
submitBtn.addEventListener('mouseup', () => {
    validateForm();
});