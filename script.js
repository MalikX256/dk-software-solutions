// Toggle Main Menu (Hamburger)
function toggleMainMenu() {
    const mainMenu = document.getElementById('main-menu');
    const formContainer = document.getElementById('account-form-container');
    const languageMenu = document.getElementById('language-menu');
    
    // Toggle menu visibility and close other menus
    mainMenu.classList.toggle('active');
    if (formContainer.style.display === 'block') {
        formContainer.style.display = 'none';
    }
    if (languageMenu.style.display === 'block') {
        languageMenu.style.display = 'none';
    }
}

// Account Form Toggle
function toggleAccountForm() {
    const formContainer = document.getElementById('account-form-container');
    const mainMenu = document.getElementById('main-menu');
    const languageMenu = document.getElementById('language-menu');
    
    // Toggle form visibility and close other menus
    formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
    if (mainMenu.classList.contains('active')) {
        mainMenu.classList.remove('active');
    }
    if (languageMenu.style.display === 'block') {
        languageMenu.style.display = 'none';
    }
}

// Language Menu Toggle
function toggleLanguageMenu() {
    const languageMenu = document.getElementById('language-menu');
    const mainMenu = document.getElementById('main-menu');
    const formContainer = document.getElementById('account-form-container');
    
    // Toggle language menu and close other menus
    languageMenu.style.display = languageMenu.style.display === 'none' ? 'block' : 'none';
    if (mainMenu.classList.contains('active')) {
        mainMenu.classList.remove('active');
    }
    if (formContainer.style.display === 'block') {
        formContainer.style.display = 'none';
    }
}

// Language Selection (Placeholder)
function selectLanguage(lang) {
    alert(`Selected language: ${lang}`);
    toggleLanguageMenu();
}

// Switch Between Login and Signup Tabs
function showTab(tab) {
    const loginTab = document.querySelector('.account-tabs .tab:first-child');
    const signupTab = document.querySelector('.account-tabs .tab:last-child');
    const actionInput = document.getElementById('account-action');
    
    if (tab === 'login') {
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
        actionInput.value = 'login';
    } else {
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
        actionInput.value = 'signup';
    }
}

// Account Form Validation and Submission
document.getElementById('account-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('account-email').value.trim();
    const password = document.getElementById('account-password').value;
    const action = document.getElementById('account-action').value;
    const errorDiv = document.getElementById('account-error');

    // Reset error message
    errorDiv.textContent = '';

    // Basic validation
    if (!email || !password) {
        errorDiv.textContent = 'Please fill in all fields.';
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorDiv.textContent = 'Please enter a valid email.';
        return;
    }
    if (password.length < 6) {
        errorDiv.textContent = 'Password must be at least 6 characters.';
        return;
    }

    // Simulate successful submission
    alert(`${action.charAt(0).toUpperCase() + action.slice(1)} successful for ${email}!`);
    this.submit();
    toggleAccountForm();
});

// Contact Form Validation and Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    const errorDiv = document.getElementById('contact-error');

    // Reset error message
    errorDiv.textContent = '';

    // Basic validation
    if (!name || !email || !message) {
        errorDiv.textContent = 'Please fill in all required fields.';
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorDiv.textContent = 'Please enter a valid email.';
        return;
    }

    // Simulate successful submission
    alert('Contact form submitted successfully!');
    this.submit();
    this.reset();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// Close Menus on Outside Click
document.addEventListener('click', function(event) {
    const mainMenu = document.getElementById('main-menu');
    const formContainer = document.getElementById('account-form-container');
    const languageMenu = document.getElementById('language-menu');
    const hamburgerButton = document.querySelector('.hamburger');
    const accountButton = document.querySelector('.account');
    const globeButton = document.querySelector('.globe');

    // Close main menu if clicking outside
    if (!mainMenu.contains(event.target) && !hamburgerButton.contains(event.target)) {
        mainMenu.classList.remove('active');
    }
    
    // Close account form if clicking outside
    if (!formContainer.contains(event.target) && !accountButton.contains(event.target)) {
        formContainer.style.display = 'none';
    }
    
    // Close language menu if clicking outside
    if (!languageMenu.contains(event.target) && !globeButton.contains(event.target)) {
        languageMenu.style.display = 'none';
    }
});

// Initialize on Page Load
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('main-menu').classList.remove('active');
    document.getElementById('account-form-container').style.display = 'none';
    document.getElementById('language-menu').style.display = 'none';
});
