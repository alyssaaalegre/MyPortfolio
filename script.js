function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector('.title');
  
    title.addEventListener('mouseover', () => {
      title.style.color = '#550000'; // New color on hover
      title.style.transition = 'transform 0.3s ease, color 0.3s ease'; // Smooth transition
      title.style.transform = 'scale(1.1) translateY(-5px)'; // Slightly scale up and move up
    });
  
    title.addEventListener('mouseout', () => {
      title.style.color = ''; // Resets to the original color
      title.style.transform = ''; // Resets the transformation
    });
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    const detailsContainers = document.querySelectorAll('.details-container');

    detailsContainers.forEach(function(container) {
        container.addEventListener('mouseenter', function() {
            container.classList.add('hovered');
        });

        container.addEventListener('mouseleave', function() {
            container.classList.remove('hovered');
        });
    });
});

let lastScrollTop = 0; // Variable to keep track of the last scroll position

// Adding scroll event listener
window.addEventListener('scroll', function() {
    const contactLink = document.getElementById('contactLink');
    const currentScroll = window.scrollY; // Get the current scroll position

    // Show or hide the contact link based on scroll direction
    if (currentScroll > lastScrollTop && currentScroll > 300) {
        // Scrolling down and passed 300px, show the button
        contactLink.classList.add('visible');
        contactLink.classList.remove('hidden');
    } else if (currentScroll < lastScrollTop) {
        // Scrolling up, hide the button
        contactLink.classList.remove('visible');
        contactLink.classList.add('hidden');
    }

    // Update the last scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
