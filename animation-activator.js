// Animation activator script
document.addEventListener('DOMContentLoaded', function() {
    // Activate text animations
    const animatedTexts = document.querySelectorAll('.animate-text');
    setTimeout(() => {
        animatedTexts.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('is-visible');
            }, 200 * index);
        });
    }, 2500); // Start after loading screen disappears
    
    // Activate feature cards animation on scroll
    const featureCards = document.querySelectorAll('.feature-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    featureCards.forEach(card => {
        observer.observe(card);
    });
    
    // Login input animation enhancement
    const inputs = document.querySelectorAll('.input-container input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
});