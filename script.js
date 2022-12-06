import Calculator from "./Calculator.js";
import UI from "./UI.js";

const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const operator = document.querySelector("select");
const btn = document.querySelector("button");
const resultDiv = document.querySelector(".result");

btn.addEventListener("click", calculateResult)

function calculateResult(){
    const calculator = new Calculator(+num1.value, +num2.value, operator.value);
    const result = calculator.calculate();
    printResult(result);
}

function printResult(result){
    const ui = new UI(result);
    const html = ui.print()
    resultDiv.insertAdjacentHTML("beforeend", html);
}