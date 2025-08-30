let signUpBtn;
let dismissBtn;

function showSuccessMessage() {
    const successMessage = document.querySelector('.success-message');
    const signUpForm = document.querySelector('.sign-up-form');
    signUpForm.style.display = 'none';
    successMessage.style.display = 'block';
}

function hideSignUpForm() {
    const successMessage = document.querySelector('.success-message');
    const signUpForm = document.querySelector('.sign-up-form');
    const emailInput = document.querySelector('input[type="email"]');
    emailInput.value = '';
    signUpForm.style.display = '';
    successMessage.style.display = 'none';
}

function isValidEmail(email) {
    // Regex kiểm tra email cơ bản
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showEmailError() {
    const emailInput = document.querySelector('input[type="email"]');
    const errorLabel = document.querySelector('.email-error');
    if (errorLabel) {
        errorLabel.textContent = 'Valid email required';
        errorLabel.style.display = 'inline';
    }
    emailInput.style.borderColor = 'var(--primary-red)';
    emailInput.style.backgroundColor = '#ffeaea';
    emailInput.style.color = 'var(--primary-red)';
}

function clearEmailError() {
    const emailInput = document.querySelector('input[type="email"]');
    const errorLabel = document.querySelector('.email-error');
    if (errorLabel) {
        errorLabel.textContent = '';
        errorLabel.style.display = 'none';
    }
    emailInput.style.borderColor = '';
    emailInput.style.backgroundColor = '';
    emailInput.style.color = '';
}

function addSubmitEvent() {
    if (signUpBtn) {
        signUpBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const emailInput = document.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            if (!isValidEmail(email)) {
                showEmailError();
                emailInput.focus();
                return;
            }
            clearEmailError();
            showSuccessMessage();
        });
    }
}

function addDismissEvent() {
    if (dismissBtn) {
        dismissBtn.addEventListener('click', function () {
            hideSignUpForm();
        });
    }
}

function init() {
    signUpBtn = document.querySelector('button[type="submit"]');
    dismissBtn = document.querySelector('.success-message button');
    addSubmitEvent();
    addDismissEvent();
}

document.addEventListener('DOMContentLoaded', function () {
    init();
});
