function validateForm() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var routeNumber = document.getElementById("routeNumber");
    var bankNumber = document.getElementById("bankNumber");
    var typeChecking = document.getElementById("paymentAccountChecking");
    var typeSavings = document.getElementById("paymentAccountSavings");

    var isValid = true;

    // Reset styles
    firstName.style.borderColor = "";
    lastName.style.borderColor = "";
    routeNumber.style.borderColor = "";
    bankNumber.style.borderColor = "";

    // Check if first name is empty
    if (firstName.value.trim() === "") {
        firstName.style.borderColor = "red";
        isValid = false;
    }

    // Check if last name is empty
    if (lastName.value.trim() === "") {
        lastName.style.borderColor = "red";
        isValid = false;
    }

    // Check if routing number is empty
    if (routeNumber.value.trim() === "") {
        routeNumber.style.borderColor = "red";
        isValid = false;
    }

    // Check if bank account number is empty
    if (bankNumber.value.trim() === "") {
        bankNumber.style.borderColor = "red";
        isValid = false;
    }

    // Check if account type is selected
    if (!typeChecking.checked && !typeSavings.checked) {
        typeChecking.parentNode.style.color = "red";
        typeSavings.parentNode.style.color = "red";
        isValid = false;
    } else {
        typeChecking.parentNode.style.color = "";
        typeSavings.parentNode.style.color = "";
    }

    // Display error message
    if (!isValid) {
        alert("Please fill in the required fields.");
    }

    return isValid;
}
