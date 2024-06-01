var typed = new Typed(".typing", {
    strings:["Desenvolvedora FullStack", "Desenvolvedora web", "Desenvolvedora FrontEnd", "Desenvolvedora BackEnd"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true,
})

document.addEventListener('DOMContentLoaded', function() {
    var downloadButton = document.getElementById('downloadCVButton');

    downloadButton.addEventListener('click', function(event) {
        event.preventDefault();
        downloadCV();
    });

    function downloadCV() {
        var link = document.createElement('a');
        link.href = 'src/assets/pdf/curriculo.pdf';
        link.download = 'curriculo.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});

const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const carousel = document.querySelector('.technologies-content');

prevButton.addEventListener('click', () => {
    carousel.scrollBy({
        left: -150, 
        behavior: 'smooth'
    });
});

nextButton.addEventListener('click', () => {
    carousel.scrollBy({
        left: 150, 
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

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

    for(let navItemIndex=0; navItemIndex<totalNavList; navItemIndex++) {
        const a = navList[navItemIndex].querySelector("a");
        a.addEventListener("click", function() {

            removeBackSection();
            for(let backNavItemIndex=0; backNavItemIndex<totalNavList; backNavItemIndex++) {
                if(navList[backNavItemIndex].querySelector("a").classList.contains("active")) {
                    addBackSection(backNavItemIndex);
                }
                navList[backNavItemIndex].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
            if(window.innerWidth < 1200) {
                slideBarSectionTogglerBtn();
            }
        })
    }

    function removeBackSection() {
        for(let sectionIndex=0; sectionIndex<totalSection; sectionIndex++) {
            allSection[sectionIndex].classList.remove("back-section");
        }
    }

    function addBackSection(num) {
        allSection[num].classList.add("back-section");
    }

    function showSection(element) {
        for(let sectionIndex=0; sectionIndex<totalSection; sectionIndex++) {
            allSection[sectionIndex].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target). classList.add("active");
    }

    function updateNav(element) {
        for(let navItemIndex=0; navItemIndex<totalNavList; navItemIndex++) {
            navList[navItemIndex].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[navItemIndex].querySelector("a").getAttribute("href").split("#")[1]) {
                navList[navItemIndex].querySelector("a").classList.add("active");
            }
        }
    }

document.querySelector(".about-me").addEventListener("click", function() {

    const sectionIndex = this.getAttribute("data-section-index");

    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})

const navTogglerBtn = document.querySelector(".nav-toggler"),
    slidebarContent = document.querySelector(".slidebar-content");
    
    navTogglerBtn.addEventListener("click", () => {
        slideBarSectionTogglerBtn();
    })
    
    function slideBarSectionTogglerBtn() {
        slidebarContent.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let sectionIndex=0; sectionIndex<totalSection; sectionIndex++) {
            allSection[sectionIndex].classList.toggle("open");
        }
    }