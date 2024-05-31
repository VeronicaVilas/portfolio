var typed = new Typed(".typing", {
    strings:["Desenvolvedora FullStack", "Desenvolvedora web", "Desenvolvedora FrontEnd", "Desenvolvedora BackEnd"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true,
})

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

    for(let i=0; i<totalNavList; i++) {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function() {

            removeBackSection();
            for(let j=0; j<totalNavList; j++) {
                if(navList[j].querySelector("a").classList.contains("active")) {
                    addBackSection(j);
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
        })
    }

    function removeBackSection() {
        for(let i=0; i<totalSection; i++) {
            allSection[i].classList.remove("back-section");
        }
    }

    function addBackSection(num) {
        allSection[num].classList.add("back-section");
    }

    function showSection(element) {
        for(let i=0; i<totalSection; i++) {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target). classList.add("active");
    }

    function updateNav(element) {
        for(let i=0; i<totalNavList; i++) {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
                navList[i].querySelector("a").classList.add("active");
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
            for(let i=0; i<totalSection; i++) {
                allSection[i].classList.toggle("open");
            }
        }