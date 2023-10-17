const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 10; // Adjust this value based on your card width

    // carousel.style.transform = `translateX(${offset}px)`;

    cards.forEach((card, index) => {
        if (index === currentIndex) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', updateCarousel);

function slideNext() {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCarousel();
    }
}

function slidePrev() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}
function removeActiveClassOnSmallScreen() {
    
    const screenWidth = window.innerWidth;
    const smallScreenThreshold = 666; // Adjust this threshold as needed

    if (screenWidth <= smallScreenThreshold) {
        cards.forEach((card) => {
            card.classList.remove('active');
        });
    }
}
// Add click event listeners to arrow text elements
const leftArrowText = document.querySelector('.left-arrow');
const rightArrowText = document.querySelector('.right-arrow');

leftArrowText.addEventListener('click', () => {
    slidePrev();
});

rightArrowText.addEventListener('click', () => {
    slideNext();
});

window.addEventListener('resize', removeActiveClassOnSmallScreen);
updateCarousel();

removeActiveClassOnSmallScreen()

document.addEventListener("DOMContentLoaded", function() {
 
    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector(".navItems ul");
 
    hamburger.addEventListener("click", function() {
        navList.classList.toggle("active");
    });
 });

