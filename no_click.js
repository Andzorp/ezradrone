document.querySelectorAll('.no-click').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevents the click action
    });
});
