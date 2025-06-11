console.log("Portfolio loaded.");

// Smooth scroll for Swipe Here ↓ text
document.getElementById('swipe-down').addEventListener('click', function(e) {
  e.preventDefault();
  const aboutSection = document.querySelector('#about');
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
});

// Simple menu click handler (no fancy transition, just direct navigation)
const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    // Normal navigation, no delay or animation
    // If you want, you can add e.preventDefault() and delay for animation
  });
});
