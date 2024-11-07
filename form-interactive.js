document.addEventListener("DOMContentLoaded", function() {
    const contactPreference = document.getElementById("contact-preference");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");

    // Hide phone and email initially if "No Preference" is selected
    if (contactPreference.value === "no-preference") {
        phoneInput.parentElement.style.display = "none";
        emailInput.parentElement.style.display = "none";
    }

    contactPreference.addEventListener("change", function() {
        // Show or hide fields based on the selected contact preference
        if (contactPreference.value === "phone") {
            phoneInput.parentElement.style.display = "block";
            emailInput.parentElement.style.display = "none";
        } else if (contactPreference.value === "email") {
            phoneInput.parentElement.style.display = "none";
            emailInput.parentElement.style.display = "block";
        } else {
            phoneInput.parentElement.style.display = "none";
            emailInput.parentElement.style.display = "none";
        }
    });
});
