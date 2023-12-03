let display = document.getElementById('display');
let currentInput = '';

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendSymbol(symbol) {
  currentInput += symbol;
  updateDisplay();
}

function calculate() {
  try {
    let result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch (error) {
    currentInput = 'Error';
    updateDisplay();
  }
}

function updateDisplay() {
  display.textContent = currentInput;
}
