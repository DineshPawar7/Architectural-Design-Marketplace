
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });




  // JavaScript for smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor click behavior

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth', // Smooth scrolling effect
      block: 'start' // Scroll to the start of the section
    });
  });
});
