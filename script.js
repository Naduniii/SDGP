// Smooth Scroll for Anchor Links (Sakuna Upamada )
function smoothScrollTo() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetposition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetposition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Button Hover Sound Effect (Sakuna Upamada )
function initButtonSound() {
    const button = document.querySelectorAll('.btn');

    // Create audio context for hover sounds
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    function playHoverSound() {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        gainNode.gain.value = 0.1;

        oscillator.start();
        gainNode.gain.exponentialRampToValueAtTime (0.01, audioContext.currentTime + 0.1);
        oscillator.stop(audioContext.currentTime + 0.1);

    }

    button.forEach(button => {
        button.addEventListener('mouseenter', playHoverSound);
    });
}
