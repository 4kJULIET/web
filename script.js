// Create a new script file (js/script.js) and link it in the HTML file
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.navlinks');
burgerMenu.addEventListener('click', () => {
navLinks.classList.toggle('active');
});

// Add this to js/script.js
    const contactForm = document.getElementById('contactForm');
    const errorMessage = document.getElementById('error-message');
    contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
if (name === '' || email === '' || message === '') {
    errorMessage.textContent = 'All fields are required.';
    return;
    }
    if (!validateEmail(email)) {
    errorMessage.textContent = 'Please enter a valid email address.';
    return;
    }
    errorMessage.textContent = '';
    // Proceed with form submission (e.g., via AJAX)
    });
    function validateEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zAZ0-9-.]+$/;
    return re.test(String(email).toLowerCase()); }