const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const carousel = document.querySelector('.technologies-content');

prevButton.addEventListener('click', () => {
    carousel.scrollBy({
        left: -150, // Adjust as necessary
        behavior: 'smooth'
    });
});

nextButton.addEventListener('click', () => {
    carousel.scrollBy({
        left: 150, // Adjust as necessary
        behavior: 'smooth'
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const technologiesLink = document.querySelector('.technologies');
    const technologiesContainer = document.querySelector('.carousel-technologies-container');
    const educationLink = document.querySelector('.education');
    const educationContainer = document.querySelector('.education-content');
    const certificationsLink = document.querySelector('.certifications');
    const certificationsContainer = document.querySelector('.certifications-content');

    technologiesLink.addEventListener('click', function(event) {
        event.preventDefault();
        technologiesContainer.style.display = 'block';
        educationContainer.style.display = 'none';
        certificationsContainer.style.display = 'none';
    });

    educationLink.addEventListener('click', function(event) {
        event.preventDefault();
        technologiesContainer.style.display = 'none';
        educationContainer.style.display = 'block';
        certificationsContainer.style.display = 'none';
    });

    certificationsLink.addEventListener('click', function(event) {
        event.preventDefault();
        technologiesContainer.style.display = 'none';
        educationContainer.style.display = 'none';
        certificationsContainer.style.display = 'block';
    });
});
