

    function displayErrorMessage(inputElement, errorMessage) {
        var errorSpan = document.createElement('span');
        errorSpan.textContent = errorMessage;
        errorSpan.style.color = 'red';
        errorSpan.classList.add('error-message');
        inputElement.parentNode.appendChild(errorSpan);
    }

    function clearErrorMessages() {
        var errorSpans = document.querySelectorAll('.error-message');
        errorSpans.forEach(function(span) {
            span.remove();
        });
    }

    // Add event listeners to clear error messages when inputs are filled or selected
    document.addEventListener('DOMContentLoaded', function () {
        var inputs = document.querySelectorAll('input, select');
        inputs.forEach(function(input) {
            input.addEventListener('change', function() {
                clearErrorMessages();
            });
        });
    });