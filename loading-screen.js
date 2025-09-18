// Loading Screen Animation
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    
    if (loadingScreen) {
        // Hide loading screen after 2 seconds
        setTimeout(function() {
            loadingScreen.classList.add('hidden');
            
            // Remove from DOM after transition completes
            setTimeout(function() {
                loadingScreen.remove();
            }, 500);
        }, 2000);
    }
    
    // Animate hero section text elements
    const animateElements = document.querySelectorAll('.animate-text');
    setTimeout(function() {
        animateElements.forEach(el => {
            el.classList.add('is-visible');
        });
    }, 2500); // Start after loading screen is gone
    
    // Observer for feature cards animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });
});