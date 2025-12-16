// Counter Animation
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    let hasAnimated = false;
    
    function animateCounters() {
        if (hasAnimated) return;
        
        const heroStats = document.querySelector('.hero-stats');
        if (!heroStats) return;
        
        const rect = heroStats.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            hasAnimated = true;
            
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
            });
        }
    }
    
    // Check on scroll
    window.addEventListener('scroll', animateCounters);
    
    // Initial check
    animateCounters();
}

// Parallax Effect for Hero Section
function initParallax() {
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    });
}