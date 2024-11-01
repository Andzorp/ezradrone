document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const startDate = document.getElementById("start-date");

    // Real-time validation functions
    function validateName() {
        if (name.value.trim() === "") {
            name.classList.add("invalid");
            return false;
        } else {
            name.classList.remove("invalid");
            return true;
        }
    }

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            email.classList.add("invalid");
            return false;
        } else {
            email.classList.remove("invalid");
            return true;
        }
    }

    function validatePhone() {
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone.value.trim())) {
            phone.classList.add("invalid");
            return false;
        } else {
            phone.classList.remove("invalid");
            return true;
        }
    }

    function validateStartDate() {
        if (startDate.value === "") {
            startDate.classList.add("invalid");
            return false;
        } else {
            startDate.classList.remove("invalid");
            return true;
        }
    }

    // Event listeners for real-time feedback
    name.addEventListener("input", validateName);
    email.addEventListener("input", validateEmail);
    phone.addEventListener("input", validatePhone);
    startDate.addEventListener("input", validateStartDate);

    // Form submission event
    form.addEventListener("submit", function (event) {
        if (!validateName() || !validateEmail() || !validatePhone() || !validateStartDate()) {
            event.preventDefault();
            alert("Please fill in all required fields correctly.");
        }
    });
});
