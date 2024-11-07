document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".how-it-works-card");
    const section = document.querySelector(".how-it-works");
    const ctaButtons = document.querySelector(".cta-buttons");
    const ctaText = document.querySelector(".cta-text");
    let currentStep = 0;
    let hasAnimated = false;

    // Determine if screen is small (e.g., mobile view with stacked layout)
    function isSmallScreen() {
        return window.innerWidth <= 768;
    }

    function animateCard(step) {
        step.classList.add("active"); // Raise card into view
        setTimeout(() => {
            step.classList.remove("active"); // Lower card after delay
        }, isSmallScreen() ? 2000 : 3000); // Shorter time on smaller screens
    }

    function animateSequence() {
        if (isSmallScreen()) {
            // If on a small screen, show all cards together for a unified look
            steps.forEach(step => step.classList.add("all-raised"));
            setTimeout(() => {
                ctaButtons.classList.add("raised"); // Animate buttons to center
                ctaText.classList.add("raised"); // Animate text to fade in and move up
            }, 500); // Delay for smoother transition after cards finish
        } else {
            // Sequential animation on larger screens
            if (currentStep < steps.length) {
                animateCard(steps[currentStep]);
                currentStep += 1;
                setTimeout(animateSequence, 3500); // Wait before moving to the next card
            } else {
                steps.forEach(step => step.classList.add("all-raised"));
                setTimeout(() => {
                    ctaButtons.classList.add("raised"); // Animate buttons to center
                    ctaText.classList.add("raised"); // Animate text to fade in and move up
                }, 500); // Delay for smoother transition after cards finish
            }
        }
    }

    // Observer for starting the animation when the section comes into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
                steps.forEach(step => step.classList.add("visible")); // Fade in each step
                setTimeout(() => {
                    animateSequence();
                }, 600); // Start raise/lower after fade-in
                hasAnimated = true; // Prevent re-triggering
            }
        });
    });

    observer.observe(section); // Only observe the "how-it-works" section

    // Adjust animations if the window is resized (e.g., rotating a mobile device)
    window.addEventListener("resize", () => {
        if (hasAnimated && isSmallScreen()) {
            // If already animated on a larger screen, reset for a small screen
            steps.forEach(step => step.classList.add("all-raised"));
            ctaButtons.classList.add("raised");
            ctaText.classList.add("raised");
        }
    });
});
