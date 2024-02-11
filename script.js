let currentSlide = 0;

function navigateSlide(slideIndex) {
    const slider = document.querySelector('.slider');
    currentSlide = slideIndex;
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function autoSlide() {
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (currentSlide + 1) % totalSlides;
    navigateSlide(currentSlide);
}

setInterval(autoSlide, 8000); // Change slide every 3 seconds