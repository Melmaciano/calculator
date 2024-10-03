const brightness = document.querySelector(".brightness");
const input = document.querySelector(".input-operation");
input.value = "";
const output = document.querySelector(".output-operation");
const keyBtns = document.querySelectorAll(".number, .dot, .operator");
const deleteBtn = document.querySelector(".delete");
const startBtn = document.querySelector(".start");
const operateBtn = document.querySelector(".operate");
const regex = {
    sumOrSubtract: /(\d+(?:\.?\d*))\s*([\+\-])\s*(\d+(?:\.?\d*))/,
    multiplyDivisionOrRemainder: /(\d+(?:\.?\d*))\s*([\*\/\%])\s*(\d+(?:\.?\d*))/,
    power: /(\d+(?:\.?\d*))\s*([\^])\s*(\d+(?:\.?\d*))/,
    verify: /([a-zA-Z]+|[\+\-\*\/\^]{2,})/,
};
let isOn = false;

const calculator = {
    "+": (elem1, elem2) => +elem1 + +elem2,
    "-": (elem1, elem2) => +elem1 - +elem2,
    "*": (elem1, elem2) => +elem1 * +elem2,
    "/": (elem1, elem2) => +elem1 / +elem2,
    "%": (elem1, elem2) => +elem1 % +elem2,
    "^": (elem1, elem2) => Math.pow(+elem1, +elem2),
}

function startCalculator() {
    isOn = !isOn;
    if (isOn) brightness.style.transform = "scaleY(1)";
    else {
        brightness.style.transform = "scaleY(0)";
        input.value = "";
        output.textContent = "";
    }
}

function renderingOperation() {
    const expression = input.value;

    if (verifyExpression(expression)) {
        input.value = "";
        output.textContent = "ERROR";
    }

    output.textContent = makeAllOperations(expression);
    input.value = "";
}

function verifyExpression(expression) {
    return regex.verify.test(expression);
}

function makeAllOperations(expression) {
    let arr = [];

    while((arr = regex.power.exec(expression)) !== null) {
        expression = expression.replace(arr[0], operate(arr[1], arr[2], arr[3]));
    }
    while((arr = regex.multiplyDivisionOrRemainder.exec(expression)) !== null) {
        expression = expression.replace(arr[0], operate(arr[1], arr[2], arr[3]));
    }
    while((arr = regex.sumOrSubtract.exec(expression)) !== null) {
        expression = expression.replace(arr[0], operate(arr[1], arr[2], arr[3]));
    }

    return expression;
}

function operate(elem1, operator, elem2) {
    if (!isOn) return;
    return calculator[operator](elem1, elem2);
}

function addChar(event) {
    if (!isOn) return;
    const button = event.currentTarget;
    input.value += button.textContent;
}

function deleteChar() {
    if (!isOn) return;
    if (input.value.length) {
        input.value = input.value.slice(0, -1);
    }
}

keyBtns.forEach(elem => elem.addEventListener("click", addChar));
operateBtn.addEventListener("click", renderingOperation);
deleteBtn.addEventListener("click", deleteChar);
startBtn.addEventListener("click", startCalculator);
