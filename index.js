const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 10; // Adjust this value based on your card width

    carousel.style.transform = `translateX(${offset}px)`;

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

// Add click event listeners to arrow text elements
const leftArrowText = document.querySelector('.left-arrow');
const rightArrowText = document.querySelector('.right-arrow');

leftArrowText.addEventListener('click', () => {
    slidePrev();
});

rightArrowText.addEventListener('click', () => {
    slideNext();
});

updateCarousel();

let product = document.getElementById("home")
product.addEventListener(click,() =>{
    
})