document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById('menuIcon');
    const menu = document.getElementById('menu');
    const closeIcon = document.getElementById('closeIcon');
    const header = document.querySelector('header');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle'); // Select all dropdown toggles

    if (menuIcon && menu && closeIcon && header) {
        // Open menu and fade out header
        menuIcon.addEventListener('click', () => {
            menu.classList.add('open'); // Show the menu
            menu.classList.remove('closing'); // Ensure closing class is removed
            header.classList.add('fade-out'); // Fade out header (logo and icon)
        });

        // Close menu and reintroduce header
        closeIcon.addEventListener('click', () => {
            menu.classList.add('closing'); // Add closing effect to menu
            setTimeout(() => {
                menu.classList.remove('open'); // Hide the menu after fade-out
                header.classList.remove('fade-out'); // Fade header back in
                menu.classList.remove('closing'); // Reset closing effect
            }, 600); // Match timeout with the CSS transition duration
        });
    } else {
        console.warn('Menu elements are missing. Please check the HTML structure.');
    }

    // Toggle visibility for each dropdown menu
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            const dropdownMenu = toggle.nextElementSibling;
            if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
                dropdownMenu.classList.toggle('show'); // Toggle the 'show' class
            }
        });
    });
});
