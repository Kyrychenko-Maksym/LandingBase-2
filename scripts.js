document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".section-slider-1");
    const prevButton = document.getElementById("prevBtn");
    const nextButton = document.getElementById("nextBtn");

    let currentSlide = 1;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove("active", "previous", "next");

            if (index === currentSlide) {
                slide.classList.add("active");
            } else if (index < currentSlide) {
                slide.classList.add("previous");
            } else {
                slide.classList.add("next");
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlides();
    }

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    updateSlides();
});