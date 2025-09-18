document.addEventListener('DOMContentLoaded', function() {
    // Logo click counter for developer mode
    const mainLogo = document.getElementById('main-logo');
    const devModeModal = document.getElementById('dev-mode-modal');
    const devModeClose = document.getElementById('dev-mode-close');
    let logoClickCount = 0;

    if (mainLogo) {
        mainLogo.addEventListener('click', function() {
            logoClickCount++;
            
            if (logoClickCount === 7) {
                devModeModal.classList.add('active');
                logoClickCount = 0;
            }
        });
    }

    if (devModeClose) {
        devModeClose.addEventListener('click', function() {
            devModeModal.classList.remove('active');
        });
    }

    // Toggle calculator
    const calculatorToggle = document.getElementById('calculator-toggle');
    const calculatorModal = document.getElementById('calculator-modal');
    const calculatorClose = document.getElementById('calculator-close');

    if (calculatorToggle && calculatorModal) {
        calculatorToggle.addEventListener('click', function() {
            calculatorModal.classList.toggle('active');
        });
    }

    if (calculatorClose) {
        calculatorClose.addEventListener('click', function() {
            calculatorModal.classList.remove('active');
        });
    }

    // Scroll animations
    const animateElements = document.querySelectorAll('.animate-text, .feature-card');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateElements.forEach(element => {
        observer.observe(element);
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollPosition = 0;

    function handleScroll() {
        const currentScrollPosition = window.scrollY;
        
        if (currentScrollPosition > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            header.style.padding = '12px 0';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            header.style.padding = '20px 0';
            header.style.boxShadow = 'none';
        }

        lastScrollPosition = currentScrollPosition;
    }

    window.addEventListener('scroll', handleScroll);

    // Login button effect
    const loginButton = document.getElementById('login-button');
    
    if (loginButton) {
        loginButton.addEventListener('mouseenter', function() {
            this.querySelector('.btn-text').style.transform = 'translateX(-10px)';
            this.querySelector('.btn-icon').style.opacity = '1';
            this.querySelector('.btn-icon').style.transform = 'translateX(0)';
        });

        loginButton.addEventListener('mouseleave', function() {
            this.querySelector('.btn-text').style.transform = 'translateX(0)';
            this.querySelector('.btn-icon').style.opacity = '0';
            this.querySelector('.btn-icon').style.transform = 'translateX(20px)';
        });

        // Simulate login action
        loginButton.addEventListener('click', function() {
            const usn = document.getElementById('usn').value;
            if (usn) {
                alert(`Login successful with USN: ${usn}\nRedirecting to payment options...`);
                // In a real application, you would redirect to the payment options page
            } else {
                alert('Please enter your USN to continue.');
            }
        });
    }
});