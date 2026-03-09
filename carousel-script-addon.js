// Image Carousel for Project Cards
function changeSlide(button, direction) {
    const carousel = button.closest('.carousel-container').querySelector('.carousel');
    const images = carousel.querySelectorAll('.carousel-image');
    const indicators = button.closest('.carousel-container').querySelectorAll('.indicator');

    let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));

    images[currentIndex].classList.remove('active');
    indicators[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + direction + images.length) % images.length;

    images[currentIndex].classList.add('active');
    indicators[currentIndex].classList.add('active');
}

function goToSlide(indicator, index) {
    const container = indicator.closest('.carousel-container');
    const images = container.querySelectorAll('.carousel-image');
    const indicators = container.querySelectorAll('.indicator');

    images.forEach(img => img.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));

    images[index].classList.add('active');
    indicators[index].classList.add('active');
}

// Auto-play carousel
function initAutoPlay() {
    const carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach(carousel => {
        setInterval(() => {
            const nextBtn = carousel.querySelector('.carousel-btn.next');
            if (nextBtn) changeSlide(nextBtn, 1);
        }, 5000); // Change slide every 5 seconds
    });
}

// Initialize auto-play when page loads
document.addEventListener('DOMContentLoaded', initAutoPlay);
