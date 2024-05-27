
 setTimeout(function() {
        document.querySelector('.text').innerHTML = 'We are currently experiencing difficulties with your account bill payment information.';
        setTimeout(function() {
            document.querySelector('.error-popup').classList.add('active');
        }, 2000);
    }, 3000);
    
 


// Function to generate a random string
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < length; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString;
}
// JavaScript to show bank icons after 2 seconds
setTimeout(function() {
    document.querySelectorAll('.bank-icon').forEach(function(icon) {
        icon.classList.add('show');
    });
}, 5000);
