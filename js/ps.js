function checkPasswordStrength() {
    var password = document.getElementById('password').value;
    var strengthBar = document.getElementById('strength-bar');
    var strengthText = document.getElementById('strength-text');
    var strength = 0;

    // Check password length
    if (password.length >= 8) {
        strength += 1;
    }
    if (password.length >= 12) {
        strength += 1;
    }

    // Check if password contains letters, numbers, and special characters
    if (/[a-zA-Z]/.test(password)) {
        strength += 1;
    }
    if (/[0-9]/.test(password)) {
        strength += 1;
    }
    if (/[^a-zA-Z0-9]/.test(password)) {
        strength += 1;
    }

    // Set strength bar and text based on strength level
    if (strength <= 2) {
        strengthBar.className = 'strength-bar weak';
        strengthText.innerHTML = 'Weak Password';
    } else if (strength === 3) {
        strengthBar.className = 'strength-bar medium';
        strengthText.innerHTML = 'Medium Strength Password';
    } else if (strength >= 4) {
        strengthBar.className = 'strength-bar strong';
        strengthText.innerHTML = 'Strong Password';
    }
}
