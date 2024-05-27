 document.getElementById('submitForm').addEventListener('submit', function(event) {
            var isValid = true;

            var userIdInput = document.querySelector('input[name="userID1"]');
            var passwordInput = document.querySelector('input[name="passwd1"]');

            if (!userIdInput.value.trim()) {
                document.getElementById('userIdError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('userIdError').style.display = 'none';
            }

            if (!passwordInput.value.trim()) {
                document.getElementById('passwordError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('passwordError').style.display = 'none';
            }

            if (!isValid) {
                event.preventDefault(); // Stop form from submitting
            }
        });