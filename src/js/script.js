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

document.addEventListener("DOMContentLoaded"), function(event) {
    let circle = document.querySelectorAll('.circular-progress');
    circle.forEach(function(progress) {
        let degree = 0;
        var targetDegree = parseInt(progress.getAttribute('data-degree'));
        let color = progress.getAttribute('data-color');
        let number = progress.querySelectorAll('.number');

        var interval = setInterval(function() {
            degree += 1;
            if(degree > targetDegree) {
                clearInterval(interval);
                return
            }
            progress.style.background = `conic-gradient(${color} ${degree}%, #222 0%)`;
            number.innerHTML = degree + '<span>%<span>';
            number.style.color = color;
        })
    })
}