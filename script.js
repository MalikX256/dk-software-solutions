// Hamburger Menu Toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile menu after clicking
        document.querySelector('.nav-menu').classList.remove('active');
    });
});

// Form Validation
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Sign Up Form Specific Validation
        if (form.id === 'signup-form') {
            const password = form.querySelector('#signup-password').value;
            const confirmPassword = form.querySelector('#signup-confirm').value;
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                isValid = false;
            }
        }

        // General Validation for Required Fields
        form.querySelectorAll('input[required], textarea[required]').forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = 'red';
            } else {
                field.style.borderColor = '#ccc';
            }
        });

        if (isValid) {
            alert(`${form.id.replace('-form', '')} submitted successfully!`);
            form.reset();
        }
    });
});

// Add Animation on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-out');
    observer.observe(section);
});