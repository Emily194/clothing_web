// Simple JavaScript example for cart functionality

let cartCount = 0;

// Function to update cart count
function addToCart() {
  cartCount++;
  document.querySelector('.cart').textContent = `Cart (${cartCount})`;
}

// Adding event listeners if there are "Add to Cart" buttons
const addCartButtons = document.querySelectorAll('.add-to-cart');
addCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const slideInterval = 3000; // Time in milliseconds (3 seconds)

function showSlide(index) {
  // Remove 'active' class and hide all slides
  slides.forEach((slide) => {
    slide.classList.remove('active');
    slide.style.opacity = 0;
  });

  // Show the new slide
  currentSlide = (index + slides.length) % slides.length; // Looping behavior
  slides[currentSlide].style.opacity = 1;
  slides[currentSlide].classList.add('active');
}

// Show the next slide
function showNextSlide() {
  showSlide(currentSlide + 1);
}

// Show the previous slide
function showPrevSlide() {
  showSlide(currentSlide - 1);
}

// Auto slide every few seconds
setInterval(showNextSlide, slideInterval);

// Event listeners for the previous and next buttons
document.querySelector(".prev-arrow").addEventListener("click", showPrevSlide);
document.querySelector(".next-arrow").addEventListener("click", showNextSlide);
