const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const nameStatus = document.getElementById('name-status');
const emailInput = document.getElementById('email');
const emailStatus = document.getElementById('email-status');
const messageInput = document.getElementById('message');
const messageStatus = document.getElementById('message-status');
const statusNotification = document.getElementById('status-notification');
const submitBtn = document.getElementById('submit-btn');

let namePass = false;
let emailPass = false;
let messagePass = false;
let formPass = false;

successClasses = ['bg-green-50', 'border-green-500', 'text-green-900'];
errorClasses = ['bg-red-50', 'border-red-500', 'text-red-900'];
activeClasses = [];
inactiveClasses = ['grayscale'];
sendAnimation = ['animate__animated animate__backOutRight'];
replaceAnimation = ['animate__animated animate__backInLeft'];

function checkForm() {
    if (namePass && emailPass && messagePass) {
        submitBtn.classList.remove(...inactiveClasses);
        submitBtn.classList.add(...activeClasses);
        formPass = true;
    } else {
        submitBtn.classList.remove(...activeClasses);
        submitBtn.classList.add(...inactiveClasses);
        formPass = false;
    }

    return formPass;
};

nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() == '') {
        nameInput.classList.remove(...successClasses);
        nameInput.classList.add(...errorClasses);
        nameStatus.classList.remove('invisible');
        namePass = false;

        checkForm();
    } else {
        nameInput.classList.remove(...errorClasses);
        nameInput.classList.add(...successClasses);
        nameStatus.classList.add('invisible');
        namePass = true;

        checkForm();
    }
});

function validateEmail() {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailInput.value.match(validRegex)) {
        return true;
    } else {
        return false;
    };
};

emailInput.addEventListener('input', () => {
    validateEmail();

    if (emailInput.value.trim() == '' || validateEmail() == false) {
        emailInput.classList.remove(...successClasses);
        emailInput.classList.add(...errorClasses);
        emailStatus.classList.remove('invisible');
        emailPass = false;

        checkForm();
    } else {
        emailInput.classList.remove(...errorClasses);
        emailInput.classList.add(...successClasses);
        emailStatus.classList.add('invisible');
        emailPass = true;

        checkForm();
    }
});

messageInput.addEventListener('input', () => {
    if (messageInput.value.trim() == '' || messageInput.value.length < 6) {
        messageInput.classList.remove(...successClasses);
        messageInput.classList.add(...errorClasses);
        messageStatus.classList.remove('invisible');
        messagePass = false;

        checkForm();
    } else {
        messageInput.classList.remove(...errorClasses);
        messageInput.classList.add(...successClasses);
        messageStatus.classList.add('invisible');
        messagePass = true;

        checkForm();
    }
});

submitBtn.addEventListener('click', () => {
    console.log(formPass)
    if (formPass) {
        submitBtn.classList.add(...sendAnimation);
    };
});
