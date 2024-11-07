// Fade-in on scroll for general elements, excluding "how-it-works"
const fadeInElements = document.querySelectorAll('.fade-in:not(.how-it-works .step)');

function handleScroll() {
    fadeInElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
}

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check in case elements are already in view
handleScroll();
