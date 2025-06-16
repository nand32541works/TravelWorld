// Registration Process
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.querySelector("form[action='#']");
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const email = document.getElementById("email").value.toLowerCase();
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirm_password").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            localStorage.setItem("wanderworld_email", email);
            localStorage.setItem("wanderworld_password", password);

            alert("Registration successful! You can now login.");
            window.location.href = "login.html";
        });
    }

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const loginEmail = document.getElementById("loginEmail").value.toLowerCase();
            const loginPassword = document.getElementById("loginPassword").value;
            const storedEmail = localStorage.getItem("wanderworld_email");
            const storedPassword = localStorage.getItem("wanderworld_password");
            const message = document.getElementById("loginMessage");

            if (loginEmail === storedEmail && loginPassword === storedPassword) {
                message.style.color = "green";
                message.textContent = "Login successful! Redirecting...";
                setTimeout(() => {
                    window.location.href = "home.html"; // or your landing page after login
                }, 1500);
            } else {
                message.style.color = "red";
                message.textContent = "Invalid email or password.";
            }
        });
    }
});