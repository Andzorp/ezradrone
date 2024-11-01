// Fade-in on scroll
const fadeInElements = document.querySelectorAll('.fade-in');

function handleScroll() {
    fadeInElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) { // Trigger earlier as it approaches view
            el.classList.add('visible');
        }
    });
}

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check in case elements are already in view
handleScroll();
