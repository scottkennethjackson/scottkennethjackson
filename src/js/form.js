const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const nameStatus = document.getElementById('name-status');
const emailInput = document.getElementById('email');
const emailStatus = document.getElementById('email-status');
const messageInput = document.getElementById('message');
const messageStatus = document.getElementById('message-status');
const sentNotification = document.getElementById('sent-notification');
const submitBtn = document.getElementById('submit-btn');

let namePass = false;
let emailPass = false;
let messagePass = false;
let formPass = false;

successClasses = ['bg-green-50', 'border-green-500', 'text-green-900'];
errorClasses = ['bg-red-50', 'border-red-500', 'text-red-900'];
activeClasses = ['hover:scale-101', 'active:scale-99', 'active:brightness-90'];
inactiveClasses = ['grayscale', '!cursor-not-allowed'];
invisibility = 'invisible';
sendAnimation = 'animate__backOutRight';
replaceAnimation = 'animate__backInLeft';

function checkForm() {
    sentNotification.classList.add(invisibility);

    if (namePass && emailPass && messagePass) {
        submitBtn.classList.remove(...inactiveClasses);
        submitBtn.classList.add(...activeClasses);
        formPass = true;
    } else {
        submitBtn.classList.remove(...activeClasses);
        submitBtn.classList.add(...inactiveClasses);
        formPass = false;
    };

    return formPass;
};

nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() == '') {
        nameInput.classList.remove(...successClasses);
        nameInput.classList.add(...errorClasses);
        nameStatus.classList.remove(invisibility);
        namePass = false;

        checkForm();
    } else {
        nameInput.classList.remove(...errorClasses);
        nameInput.classList.add(...successClasses);
        nameStatus.classList.add(invisibility);
        namePass = true;

        checkForm();
    };
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
        emailStatus.classList.remove(invisibility);
        emailPass = false;

        checkForm();
    } else {
        emailInput.classList.remove(...errorClasses);
        emailInput.classList.add(...successClasses);
        emailStatus.classList.add(invisibility);
        emailPass = true;

        checkForm();
    };
});

messageInput.addEventListener('input', () => {
    if (messageInput.value.trim() == '' || messageInput.value.length < 6) {
        messageInput.classList.remove(...successClasses);
        messageInput.classList.add(...errorClasses);
        messageStatus.classList.remove(invisibility);
        messagePass = false;

        checkForm();
    } else {
        messageInput.classList.remove(...errorClasses);
        messageInput.classList.add(...successClasses);
        messageStatus.classList.add(invisibility);
        messagePass = true;

        checkForm();
    };
});

function resetForm() {
    nameInput.value = '';
    nameInput.classList.remove(...successClasses);
    namePass = false;

    emailInput.value = '';
    emailInput.classList.remove(...successClasses);
    emailPass = false;

    messageInput.value = '';
    messageInput.classList.remove(...successClasses);
    messagePass = false;

    formPass = false;
};

submitBtn.addEventListener('click', () => {
    if (formPass) {
        contactForm.classList.add(sendAnimation);
        sentNotification.classList.remove(invisibility);
        submitBtn.classList.add(...inactiveClasses);
        submitBtn.classList.remove(...activeClasses);
    };

    setTimeout(() => {
        resetForm();
    }, 500);

    setTimeout(() => {
        contactForm.classList.remove(sendAnimation);
        contactForm.classList.add(replaceAnimation);
    }, 1000);
});
