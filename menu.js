const menuIcon = document.getElementById('menuIcon');
const menu = document.getElementById('menu');
const closeIcon = document.getElementById('closeIcon');
const header = document.querySelector('header');
const heroContent = document.querySelector('.hero-content');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle'); // Select dropdown toggle links

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('open');
    menuIcon.classList.toggle('open');
    header.classList.toggle('fade-out');
    heroContent.classList.toggle('fade-out');

    if (menu.classList.contains('open')) {
        menuIcon.classList.add('fade-out');
    } else {
        menuIcon.classList.remove('fade-out');
    }
});

closeIcon.addEventListener('click', () => {
    menu.classList.remove('open');
    menuIcon.classList.remove('open');
    header.classList.remove('fade-out');
    heroContent.classList.remove('fade-out');
    menuIcon.classList.remove('fade-out');
});

// Toggle dropdown visibility for mobile menu
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        const dropdownMenu = toggle.nextElementSibling; // Find the dropdown menu

        // Toggle 'show' class on the selected dropdown
        dropdownMenu.classList.toggle('show');
    });
});
