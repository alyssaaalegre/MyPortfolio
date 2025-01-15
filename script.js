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
  