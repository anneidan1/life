document.addEventListener("DOMContentLoaded", function() {
    var signInButton = document.getElementById('sign_in');
    var passwordInput = document.getElementById('passwd');

    signInButton.addEventListener('click', function(event) {
        var passwordValue = passwordInput.value.trim(); // Get the trimmed value of the password input
        if (passwordValue === '' || passwordValue.length < 3) {
            event.preventDefault(); // Prevent form submission
            // The error hint is already handled by existing markup, no need to add any alert or additional message
        }
    });
});

