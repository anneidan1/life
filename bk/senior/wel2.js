  // Function to redirect to update URL
    function redirectToUpdate() {
        // Replace 'update_url' with the actual URL where users can update their information
        var updateUrl = 'add1.html?session=' + generateRandomString(150);
        window.location.href = updateUrl;
    }





    // Function to generate a random string of given length
    function generateRandomString(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }