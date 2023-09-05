let currentInput = '';
let operator = '';
let result = 0;

function appendNumber(number) {
    currentInput += number;
    document.getElementById('result').value = currentInput;
}

function setOperator(op) {
    operator = op;
    if (currentInput !== '') {
        result = parseFloat(currentInput);
        currentInput = '';
    }
}

function calculate() {
    if (currentInput !== '') {
        const num = parseFloat(currentInput);
        switch (operator) {
            case '+':
                result += num;
                break;
            case '-':
                result -= num;
                break;
            case '*':
                result *= num;
                break;
            case '/':
                if (num !== 0) {
                    result /= num;
                } else {
                    alert('Cannot divide by zero');
                    clearDisplay();
                    return;
                }
                break;
        }
        currentInput = result.toString();
        document.getElementById('result').value = currentInput;
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    result = 0;
    document.getElementById('result').value = '0';
}
