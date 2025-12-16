//scroll reveal animation
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    function revealOnScroll() {
        reveals.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                // Add staggered delay based on index within viewport
                setTimeout(() => {
                    element.classList.add('active');
                }, index * 50);
            }
        });
    }
    
    // Initial check
    revealOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);
// Counter Animation - Binuri Piyathma
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
    
    // Check on scroll - Binuri Piyathma
    window.addEventListener('scroll', animateCounters);
    
    // Initial check - Binuri Piyathma
    animateCounters();
}

// Parallax Effect for Hero Section - Binuri Piyathma
function initParallax() {
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    });
// Intersection Observer for Better Performance

if ('IntersectionObserver' in window) {
    const lazyElements = document.querySelectorAll('.reveal');

    const observerOption = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const Observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observerOption.unobserve(entry.target);
            }
        });
    }, observerOptions) ;

    lazyElements.forEach(element => {
        Observer.observe(element);
    }) ;
}