document.addEventListener('DOMContentLoaded', function() {
    // Animate login border
    animateLoginBorder();
    
    // Initialize text animations
    initTextAnimations();
    
    // Add parallax effect to shapes
    initParallax();
    
    // Input focus animations
    initInputAnimations();
});

// Function to create a moving border effect around the login card
function animateLoginBorder() {
    const loginCard = document.querySelector('.login-card');
    if (!loginCard) return;
    
    let angle = 0;
    
    function updateGradient() {
        angle = (angle + 1) % 360;
        loginCard.style.setProperty('--gradient-angle', `${angle}deg`);
        requestAnimationFrame(updateGradient);
    }
    
    updateGradient();
}

// Function to initialize text animations
function initTextAnimations() {
    const animatedTexts = document.querySelectorAll('.animate-text');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });
    
    animatedTexts.forEach(text => {
        observer.observe(text);
    });
}

// Function to add parallax effect to shapes
function initParallax() {
    const shapes = document.querySelectorAll('.shape');
    
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        shapes.forEach((shape, index) => {
            // Different intensity for each shape
            const intensity = (index + 1) * 10;
            
            const translateX = (x - 0.5) * intensity;
            const translateY = (y - 0.5) * intensity;
            
            shape.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
    });
}

// Function to initialize input animations
function initInputAnimations() {
    const inputs = document.querySelectorAll('input');
    
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            const container = input.closest('.input-container');
            if (container) {
                container.classList.add('focused');
            }
        });
        
        input.addEventListener('blur', () => {
            const container = input.closest('.input-container');
            if (container) {
                if (!input.value) {
                    container.classList.remove('focused');
                }
            }
        });
    });
}

// Add ripple effect to buttons
function addRippleEffect() {
    const buttons = document.querySelectorAll('.login-btn, .calc-btn, .dev-mode-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.className = 'ripple';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Initialize staggered animations for features
document.addEventListener('scroll', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight * 0.9) {
            setTimeout(() => {
                card.classList.add('is-visible');
            }, index * 200);
        }
    });
});