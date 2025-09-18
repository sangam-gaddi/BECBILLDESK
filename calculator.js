// Calculator Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const calculatorToggle = document.getElementById('calculator-toggle');
    const calculatorModal = document.getElementById('calculator-modal');
    const calculatorClose = document.getElementById('calculator-close');
    
    // Toggle calculator when calculator icon is clicked
    calculatorToggle.addEventListener('click', function() {
        calculatorModal.classList.toggle('active');
    });
    
    // Close calculator when close button is clicked
    calculatorClose.addEventListener('click', function() {
        calculatorModal.classList.remove('active');
    });

    // Calculator functionality
    const calcDisplay = document.getElementById('calc-display');
    const calcButtons = document.querySelectorAll('.calc-btn');
    
    calcButtons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;
            
            if (value === 'C') {
                // Clear the display
                calcDisplay.value = '';
            } else if (value === '=') {
                // Calculate the result
                try {
                    // Replace '×' with '*' and '÷' with '/'
                    let expression = calcDisplay.value.replace(/×/g, '*').replace(/÷/g, '/');
                    calcDisplay.value = eval(expression);
                } catch (error) {
                    calcDisplay.value = 'Error';
                }
            } else {
                // Append the clicked button's value to the display
                calcDisplay.value += value;
            }
        });
    });
});