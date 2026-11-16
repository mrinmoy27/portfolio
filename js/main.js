// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Contact Form Handling (Simulation)
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        formStatus.textContent = 'Please fill out all fields!';
        formStatus.className = 'text-error';
        return;
      }

      formStatus.textContent = 'Thank you, ' + name + '! Your message has been sent successfully.';
      formStatus.className = 'text-success';
      contactForm.reset();

      setTimeout(() => {
        formStatus.textContent = '';
      }, 5000);
    });
  }
});
