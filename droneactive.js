// Function to check if the current page is a drone page and set the active class
function setDronesTabActive() {
    const dronesTab = document.querySelector('.drones-tab'); // Ensure this targets the Drones menu item
    const url = window.location.href;

    // Check if the URL contains any of the drone page identifiers
    if (url.includes('t25dronepage.html') || url.includes('t50dronepage.html')) {
        dronesTab.classList.add('active');
    } else {
        dronesTab.classList.remove('active');
    }
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', setDronesTabActive);
