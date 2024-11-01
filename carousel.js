const carouselSlide = document.querySelector('.carousel-slide');
const carouselCards = document.querySelectorAll('.carousel-card');
const dotContainer = document.createElement('div');
dotContainer.classList.add('carousel-dots');

// Generate dots based on the number of cards
carouselCards.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('carousel-dot');
    if (index === 0) dot.classList.add('active'); // Set first dot as active initially
    dot.addEventListener('click', () => goToSlide(index));
    dotContainer.appendChild(dot);
});
document.querySelector('.carousel-container').appendChild(dotContainer);

let currentIndex = 0;

function updateDots() {
    document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function goToSlide(index) {
    currentIndex = index;
    const cardWidth = carouselCards[0].clientWidth + 30; // Includes gap between cards
    carouselSlide.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
    updateDots();
}

// Optional: Swipe functionality for mobile
let startX;
carouselSlide.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

carouselSlide.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (endX < startX) goToSlide(Math.min(currentIndex + 1, carouselCards.length - 1));
    if (endX > startX) goToSlide(Math.max(currentIndex - 1, 0));
});
