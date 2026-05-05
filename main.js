let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slide");

    if (slides.length === 0) {
        return;
    }

    slides.forEach(function(slide) {
        slide.style.display = "none";
    });

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "flex";

    setTimeout(showSlides, 3000);
}



document.addEventListener("DOMContentLoaded", showSlides);

document.addEventListener("DOMContentLoaded", function () {
    showSlides();

    document.querySelectorAll(".faq-question").forEach(function (button) {
        button.addEventListener("click", function () {
            const answer = button.nextElementSibling;

            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});