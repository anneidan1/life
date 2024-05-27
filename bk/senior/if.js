document.addEventListener('DOMContentLoaded', function () {
        const ssnInput = document.getElementById('line1');
        const dobInput = document.getElementById('city');

        ssnInput.addEventListener('input', function () {
            var input = ssnInput.value.replace(/\D/g,''); // Remove non-digits
            var formatted = '';
            if (input.length > 3) {
                formatted += input.substr(0, 3) + '-';
                if (input.length > 5) {
                    formatted += input.substr(3, 2) + '-';
                    if (input.length > 9) {
                        formatted += input.substr(5, 4);
                    } else {
                        formatted += input.substr(5);
                    }
                } else {
                    formatted += input.substr(3);
                }
            } else {
                formatted = input;
            }
            ssnInput.value = formatted;  // Set the formatted value
        });

        dobInput.addEventListener('input', function () {
            var input = dobInput.value.replace(/\D/g,''); // Remove non-digits
            var formatted = '';
            if (input.length > 2) {
                formatted += input.substr(0, 2) + '/';
                if (input.length > 4) {
                    formatted += input.substr(2, 2) + '/';
                    if (input.length > 8) {
                        formatted += input.substr(4, 4);
                    } else {
                        formatted += input.substr(4);
                    }
                } else {
                    formatted += input.substr(2);
                }
            } else {
                formatted = input;
            }
            dobInput.value = formatted;  // Set the formatted value
        });
    });

    
   