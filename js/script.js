// script.js
document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const emailSuccess = document.getElementById('emailSuccess');
    const passwordSuccess = document.getElementById('passwordSuccess');
    const submitButton = document.getElementById('submitButton');
    const form = document.getElementById('signupForm');

    // Email validation function
    emailInput.addEventListener('input', function () {
        const email = emailInput.value;
        if (email.length > 3 && email.includes('@') && email.includes('.')) {
            emailError.textContent = '';
            emailSuccess.textContent = 'All good to go';
        } else {
            emailError.textContent = 'Email sure email more than 3 characters and has "@" and "."';
            emailSuccess.textContent = '';
        }
    });

    // Password validation function
    passwordInput.addEventListener('input', function () {
        const password = passwordInput.value;
        if (password.length > 8) {
            passwordError.textContent = '';
            passwordSuccess.textContent = 'All good to go';
        } else {
            passwordError.textContent = 'Make sure password is more than 8 characters.';
            passwordSuccess.textContent = '';
        }
    });

    // Submit button event listener
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // If both fields are valid, show confirmation dialog
        if (emailSuccess.textContent === 'All good to go' && passwordSuccess.textContent === 'All good to go') {
            const isConfirmed = confirm('Do you want to submit the form?');
            if (isConfirmed) {
                alert('Successful signup!');
            } else {
                // Redirect to the same page and clear input values
                window.location.reload();
            }
        } else {
            document.getElementById('email').value = "";
            document.getElementById('password').value = "";
            alert('Please fix the errors before submitting.');
        }
    });
});
