//Active Navigation Link Highlight - Vishwa Amarajith//
function initActiveNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

initActiveNavHighlight();

//Form Validation (for future login forms) - Vishwa Amarajith//
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 8;

}

// Console Welcome Message - Vishwa Amarajith//
console.log('%c⚡ Entangle', 'font-size: 24px; font-weight: bold; color: #3b82f6;');
console.log('%cAI-Powered Startup & Investor Connection Platform', 'font-size: 14px; color: #8b5cf6;');
console.log('%cBuilt with ❤️ for entrepreneurs and investors', 'font-size: 12px; color: #6b7280;');
