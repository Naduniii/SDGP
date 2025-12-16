// ENTANGLE - AI Startup-Investor Platform
// JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initThemeToggle();
    initNavbar();
    initMobileMenu();
    initScrollReveal();
    initCounterAnimation();
    initSmoothScroll();
});


// Theme Toggle (Dark/Light Mode)

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    } else {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
        
        // Save preference
        const currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
        
        // Add animation effect
        themeToggle.style.transform = 'scale(0.9) rotate(180deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1) rotate(0deg)';
        }, 200);
    });
}