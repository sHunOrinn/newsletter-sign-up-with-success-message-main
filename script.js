const signUpBtn = document.querySelector('button[type="submit"]');
const dismissBtn = document.querySelector('.success-message button');

function showSuccessMessage() {
    const successMessage = document.querySelector('.success-message');
    const signUpForm = document.querySelector('.sign-up-form');
    signUpForm.style.display = 'none';
    successMessage.style.display = 'block';
}

function hideSignUpForm() {
    const successMessage = document.querySelector('.success-message');
    const signUpForm = document.querySelector('.sign-up-form');
    signUpForm.style.display = '';
    successMessage.style.display = 'none';
}

function addSubmitEvent() {
    const signUpBtn = document.querySelector('button[type="submit"]');
    if (signUpBtn) {
        signUpBtn.addEventListener('click', function (e) {
            e.preventDefault();
            showSuccessMessage();
        });
    }
}

function addDismissEvent() {
    const dismissBtn = document.querySelector('.success-message button');
    if (dismissBtn) {
        dismissBtn.addEventListener('click', function () {
            hideSignUpForm();
        });
    }
}

function init() {
    addSubmitEvent();
    addDismissEvent();
}

document.addEventListener('DOMContentLoaded', function () {
    init();
});
