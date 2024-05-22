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

document.addEventListener("DOMContentLoaded", function(event) {
    let circles = document.querySelectorAll('.circular-progress');
    circles.forEach(function(progress) {
        let degree = 0;
        var targetDegree = parseInt(progress.getAttribute('data-degree'));
        let color = getComputedStyle(progress).getPropertyValue('--skin-color');

        var interval = setInterval(function() {
            degree += 1;
            if(degree > targetDegree) {
                clearInterval(interval);
                return;
            }
            progress.style.background = `conic-gradient(${color} ${degree}%, #e8dfec 0%)`;
        }, 10); // Adjust the interval duration if needed
    });
});

