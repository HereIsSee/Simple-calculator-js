const container = document.querySelector("#Container");

const display = document.querySelector("#CalculationDisplay");

const AC = document.querySelector("#AC");
const changeSign = document.querySelector("#changeSign");
const percent = document.querySelector("#percent");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const dot = document.querySelector("#dot");
const equals = document.querySelector("#equals");

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

let num1 = "0";
let num2 = "0";

AC.addEventListener("click", ()=>{
    num1= "0";
    num2= "0";

    display.textContent= "0";
})

zero.addEventListener("click", ()=>{
    display.textContent += "0";
})
one.addEventListener("click", ()=>{
    display.textContent += "1";
})
two.addEventListener("click", ()=>{
    display.textContent += "2";
})
three.addEventListener("click", ()=>{
    display.textContent += "3";
})
four.addEventListener("click", ()=>{
    display.textContent += "4";
})
five.addEventListener("click", ()=>{
    display.textContent += "5";
})
six.addEventListener("click", ()=>{
    display.textContent += "6";
})
seven.addEventListener("click", ()=>{
    display.textContent += "7";
})
eight.addEventListener("click", ()=>{
    display.textContent += "8";
})
nine.addEventListener("click", ()=>{
    display.textContent += "9";
})