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