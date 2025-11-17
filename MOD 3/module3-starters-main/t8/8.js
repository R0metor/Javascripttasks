const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operationSelect = document.getElementById("operation");
const startButton = document.getElementById("start");
const resultP = document.getElementById("result");

startButton.addEventListener("click", function () {
    const a = Number(num1Input.value);
    const b = Number(num2Input.value);
    const op = operationSelect.value;
    let result;

    if (Number.isNaN(a) || Number.isNaN(b)) {
        resultP.textContent = 'Please enter numbers only.';
        return;
    }
    if (op === 'add') {
        result = a + b;
    } else if (op === 'sub') {
        result = a - b;
    } else if (op === 'multi') {
        result = a * b;
    } else if (op === 'div') {
        if (b === 0) {
            resultP.textContent = 'Cannot be divided by zero';
            return;
        }
        result = a/b;
    }
    resultP.textContent = 'Result: ' + result;
});