let display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '0';
}

function appendValue(value) {
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function toggleSign() {
    display.textContent = (parseFloat(display.textContent) * -1).toString();
}

function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = 'Error';
    }
}