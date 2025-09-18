document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('calc-display');
    const buttons = document.querySelectorAll('.calc-btn');
    
    let currentInput = '';
    let previousInput = '';
    let operation = null;
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;
            
            if (value === 'C') {
                clear();
            } else if (value === '=') {
                calculate();
            } else if (['+', '-', '×', '÷'].includes(value)) {
                handleOperator(value);
            } else {
                appendNumber(value);
            }
            
            updateDisplay();
        });
    });
    
    function clear() {
        currentInput = '';
        previousInput = '';
        operation = null;
    }
    
    function appendNumber(number) {
        if (number === '.' && currentInput.includes('.')) return;
        currentInput += number;
    }
    
    function handleOperator(op) {
        if (currentInput === '') return;
        if (previousInput !== '') {
            calculate();
        }
        operation = op;
        previousInput = currentInput;
        currentInput = '';
    }
    
    function calculate() {
        let computation;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        
        if (isNaN(prev) || isNaN(current)) return;
        
        switch (operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '×':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return;
        }
        
        currentInput = computation.toString();
        operation = null;
        previousInput = '';
    }
    
    function updateDisplay() {
        if (display) {
            display.value = currentInput;
        }
    }

    // Add keyboard support
    document.addEventListener('keydown', function(event) {
        let key = event.key;
        
        // Only process if calculator is active
        if (!document.getElementById('calculator-modal').classList.contains('active')) {
            return;
        }
        
        if (key >= '0' && key <= '9' || key === '.') {
            appendNumber(key);
        } else if (key === '+' || key === '-') {
            handleOperator(key);
        } else if (key === '*') {
            handleOperator('×');
        } else if (key === '/') {
            handleOperator('÷');
        } else if (key === 'Enter' || key === '=') {
            calculate();
        } else if (key === 'Escape' || key === 'c' || key === 'C') {
            clear();
        }
        
        updateDisplay();
    });
});