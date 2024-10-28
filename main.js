document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const navLinks = document.querySelector(".nav-links");

    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});




// Select all the text elements (slides)
const slides = document.querySelectorAll('.slide-text');
let currentSlide = 0; // Track the current slide

// Function to switch to the next slide
function showNextSlide() {
    // Hide the current slide by removing the 'active' class
    slides[currentSlide].classList.remove('active');

    // Increment the current slide index
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to 0 after the last slide

    // Show the new current slide by adding the 'active' class
    slides[currentSlide].classList.add('active');
}

// Initialize the slider by showing the first slide
slides[currentSlide].classList.add('active');

// Set an interval to show the next slide every 3 seconds
setInterval(showNextSlide, 3000);
