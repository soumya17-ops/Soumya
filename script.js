// Toggle the hamburger menu in mobile view
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Initialize AOS (Animate On Scroll) library for scroll animations
AOS.init({
    offset: 120,  // Start the animation after scrolling 120px
    duration: 1000,  // Animation duration
    easing: 'ease-in-out',  // Easing function for animation
    once: true,  // Run animation only once
});

// Smooth scroll functionality for navigation links
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust scroll position based on navbar height
            behavior: "smooth",
        });
    });
});
