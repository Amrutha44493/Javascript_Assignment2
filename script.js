function validateLoginForm() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        document.getElementById("loginEmail").focus();
        return false;
    }

    if (password.trim() === "") {
        alert("Please enter your password.");
        document.getElementById("loginPassword").focus();
        return false;
    }

    if (!isValidPassword(password)) {
        alert("Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, and one number.");
        document.getElementById("loginPassword").focus();
        return false;
    }

    alert("Login successful!");
    return true;
}

function validateSignUpForm() {
    let email = document.getElementById("signupEmail").value;
    let phone = document.getElementById("signupPhone").value;
    let password = document.getElementById("signupPassword").value;

    if (email.trim() === "") {
        alert("Please enter a valid email address.");
        document.getElementById("signupEmail").focus();
        return false;
    }

    if (!validateEmail(email)) {
        alert("Invalid email format. Please enter a valid email address.");
        document.getElementById("signupEmail").focus();
        return false;
    }

    if (phone.trim() === "") {
        alert("Please enter your phone number.");
        document.getElementById("signupPhone").focus();
        return false;
    }

    if (!validatePhone(phone)) {
        alert("Please enter a valid phone number in one of the accepted formats: XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX, or XXXXXXXXXX.");
        document.getElementById("signupPhone").focus();
        return false;
    }

    if (password.trim() === "") {
        alert("Please enter your password.");
        document.getElementById("signupPassword").focus();
        return false;
    }

    validatePasswordStrength(password); 

    if (!isValidPassword(password)) {
        alert("Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, and one number.");
        document.getElementById("signupPassword").focus();
        return false;
    }

    alert("Sign-up successful!");
    return true;
}

function validateEmail(email) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePhone(phone) {
    let phonePattern = /^(?:\d{10}|\d{3}[-.\s]?\d{3}[-.\s]?\d{4})$/;
    return phonePattern.test(phone);
}

function isValidPassword(password) {
    let strongPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return strongPattern.test(password);
}

function validatePasswordStrength(password) {
    let strengthIndicator = document.getElementById("signupPasswordStrength");

    if (!strengthIndicator) {
        strengthIndicator = document.createElement("div");
        strengthIndicator.id = "signupPasswordStrength";
        let parentElement = document.getElementById("signupPassword").parentElement;
        parentElement.appendChild(strengthIndicator);
    }

    if (password.length < 8) {
        strengthIndicator.textContent = "Poor";
        strengthIndicator.style.color = "red";
    } else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
        strengthIndicator.textContent = "Strong";
        strengthIndicator.style.color = "green";
    } else {
        strengthIndicator.textContent = "Medium";
        strengthIndicator.style.color = "orange";
    }
}
