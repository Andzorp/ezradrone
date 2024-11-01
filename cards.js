document.querySelectorAll('.toggle-btn').forEach((button) => {
    button.addEventListener('click', (e) => {
        const droneItem = e.target.closest('.drone-item');
        const info = droneItem.querySelector('.drone-info');
        const isOpen = info.classList.contains('open');

        // Close any open items
        document.querySelectorAll('.drone-info').forEach((el) => {
            el.classList.remove('open');
        });
        document.querySelectorAll('.toggle-btn').forEach((btn) => {
            btn.textContent = '+';
        });

        // Toggle selected item
        if (!isOpen) {
            info.classList.add('open');
            button.textContent = '-';
        } else {
            info.classList.remove('open');
            button.textContent = '+';
        }
    });
});
