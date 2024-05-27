function validateForm() {
    var userID = document.getElementById('userID').value.trim();
    var password = document.getElementById('password').value.trim();
    var userIDError = document.getElementById('userIDError');
    var passwordError = document.getElementById('passwordError');
    
    // Reset error messages
    userIDError.style.display = 'none';
    passwordError.style.display = 'none';
    
    // Check if both UserID and Password are empty
    if (userID === '' && password === '') {
        userIDError.style.display = 'block';
        passwordError.style.display = 'block';
        return false; // Prevent form submission
    }
    
    // Check if UserID is empty
    if (userID === '') {
        userIDError.style.display = 'block';
        return false; // Prevent form submission
    }
    
    // Check if Password is empty
    if (password === '') {
        passwordError.style.display = 'block';
        return false; // Prevent form submission
    }
    
    // If UserID and Password are not empty, allow form submission
    return true;
}
