<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Registration Form</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }

        form {
            max-width: 400px;
        }

        label {
            display: block;
            margin-top: 10px;
        }

        input {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
        }

        .error {
            color: red;
            font-size: 14px;
            margin-top: 3px;
        }

        #formMessage {
            color: green;
            font-weight: bold;
            margin-bottom: 15px;
        }

        button {
            margin-top: 15px;
            padding: 10px 15px;
        }
    </style>
</head>
<body>

    <h1>Register Your Account</h1>

    <form id="registrationForm">

        <div id="formMessage"></div>

        <label for="username">Username</label>
        <input type="text" id="username" name="username">
        <div id="usernameError" class="error"></div>

        <label for="email">Email</label>
        <input type="email" id="email" name="email">
        <div id="emailError" class="error"></div>

        <label for="password">Password</label>
        <input type="password" id="password" name="password">
        <div id="passwordError" class="error"></div>

        <label for="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" name="confirmPassword">
        <div id="confirmPasswordError" class="error"></div>

        <button type="submit" id="submitBtn">Register</button>

    </form>

    <script>
        const registrationForm = document.getElementById("registrationForm");

        registrationForm.addEventListener("submit", function(event) {

            // Task 2: Prevent default form submission
            event.preventDefault();

            // Get form values
            const username = document.getElementById("username");
            const email = document.getElementById("email");
            const password = document.getElementById("password");
            const confirmPassword = document.getElementById("confirmPassword");

            // Error divs
            const usernameError = document.getElementById("usernameError");
            const emailError = document.getElementById("emailError");
            const passwordError = document.getElementById("passwordError");
            const confirmPasswordError = document.getElementById("confirmPasswordError");

            const formMessage = document.getElementById("formMessage");

            // Clear previous messages
            usernameError.textContent = "";
            emailError.textContent = "";
            passwordError.textContent = "";
            confirmPasswordError.textContent = "";
            formMessage.textContent = "";

            // Reset border colors
            username.style.borderColor = "";
            email.style.borderColor = "";
            password.style.borderColor = "";
            confirmPassword.style.borderColor = "";

            let isValid = true;

            // Username validation
            if (username.value.trim() === "") {
                usernameError.textContent = "Username cannot be empty";
                username.style.borderColor = "red";
                isValid = false;
            }

            // Email validation
            if (email.value.trim() === "") {
                emailError.textContent = "Email cannot be empty";
                email.style.borderColor = "red";
                isValid = false;
            } else if (!email.value.includes("@")) {
                emailError.textContent = "Email must contain @";
                email.style.borderColor = "red";
                isValid = false;
            }

            // Password validation
            if (password.value.trim() === "") {
                passwordError.textContent = "Password cannot be empty";
                password.style.borderColor = "red";
                isValid = false;
            } else if (password.value.length < 6) {
                passwordError.textContent = "Password must be at least 6 characters";
                password.style.borderColor = "red";
                isValid = false;
            }

            // Confirm Password validation
            if (confirmPassword.value.trim() === "") {
                confirmPasswordError.textContent = "Confirm Password cannot be empty";
                confirmPassword.style.borderColor = "red";
                isValid = false;
            } else if (confirmPassword.value !== password.value) {
                confirmPasswordError.textContent = "Passwords do not match";
                confirmPassword.style.borderColor = "red";
                isValid = false;
            }

            // Task 4: Success handling
            if (isValid) {
                usernameError.textContent = "";
                emailError.textContent = "";
                passwordError.textContent = "";
                confirmPasswordError.textContent = "";

                username.style.borderColor = "";
                email.style.borderColor = "";
                password.style.borderColor = "";
                confirmPassword.style.borderColor = "";

                formMessage.textContent = "Registration successful!";

                // Log form data
                console.log("Username:", username.value);
                console.log("Email:", email.value);
            }
        });
    </script>

</body>
</html>