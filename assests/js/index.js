document.addEventListener('DOMContentLoaded', function() {
  // Typed.js for dynamic text
  var typed = new Typed('#typed-output', {
      strings: [
          'Ayush', 
          'Professional Video Editor', 
          'Creative Storyteller'
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
  });

  // ScrollReveal for animations
  ScrollReveal().reveal('.featured-text', { delay: 200, origin: 'top', distance: '50px' });
  ScrollReveal().reveal('.portfolio-grid', { delay: 300, origin: 'bottom', distance: '50px' });
  ScrollReveal().reveal('.skills-grid', { delay: 400, origin: 'left', distance: '50px' });
  ScrollReveal().reveal('.contact-form', { delay: 500, origin: 'right', distance: '50px' });
});

// Mobile Menu Toggle Function
function myMenuFunction() {
  var menubtn = document.getElementById("myNavMenu");
  var menuIcon = document.querySelector(".nav-menu-btn i");

  if(menubtn.className === "nav-menu") {
      menubtn.className += " responsive";
      // Optional: Change menu icon to close (x)
      menuIcon.classList.remove("uil-bars");
      menuIcon.classList.add("uil-times");
  } else {
      menubtn.className = "nav-menu";
      // Change back to menu icon
      menuIcon.classList.remove("uil-times");
      menuIcon.classList.add("uil-bars");
  }
}

// Close menu when a nav link is clicked
document.querySelectorAll('.nav_link').forEach(link => {
  link.addEventListener('click', () => {
      var menubtn = document.getElementById("myNavMenu");
      var menuIcon = document.querySelector(".nav-menu-btn i");
      
      menubtn.className = "nav-menu";
      menuIcon.classList.remove("uil-times");
      menuIcon.classList.add("uil-bars");
  });
});

// Header Shadow Effect
window.onscroll = function() {
  const navheader = document.getElementById("navheader");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navheader.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
      navheader.style.height = "70px";
      navheader.style.lineHeight = "70px";
  } else {
      navheader.style.boxShadow = "none";
      navheader.style.height = "90px";
      navheader.style.lineHeight = "90px";
  }
};

