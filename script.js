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

let num1 = null;
let num2 = null;
let result = null;

let sign = '';
let signUsed = false;

display.textContent = '0';


AC.addEventListener("click", ()=>{
    num1= "0";
    num2= "0";

    display.textContent= "0";
})

zero.addEventListener("click", ()=>{
    if ( display.textContent === '0' ){
        display.textContent = "0";
    }
    else{
        display.textContent += "0";
    }
})
one.addEventListener("click", ()=>{
    if ( display.textContent === '0' ){
        display.textContent = "1";
    }
    else{
        display.textContent += "1";
    }
    
})
two.addEventListener("click", ()=>{
    if ( display.textContent === '0' ){
        display.textContent = "2";
    }
    else{
        display.textContent += "2";
    }
})
three.addEventListener("click", ()=>{
    if ( display.textContent === '0' ){
        display.textContent = "3";
    }
    else{
        display.textContent += "3";
    }
})
four.addEventListener("click", ()=>{
    if ( display.textContent === '0' ){
        display.textContent = "4";
    }
    else{
        display.textContent += "4";
    }
})
five.addEventListener("click", ()=>{
    if ( display.textContent === '0' ){
        display.textContent = "5";
    }
    else{
        display.textContent += "5";
    }
})
six.addEventListener("click", ()=>{
    if ( display.textContent === '0' ){
        display.textContent = "6";
    }
    else{
        display.textContent += "6";
    }
})
seven.addEventListener("click", ()=>{
    if ( display.textContent === '0' ){
        display.textContent = "7";
    }
    else{
        display.textContent += "7";
    }
})
eight.addEventListener("click", ()=>{
    if ( display.textContent === '0' ){
        display.textContent = "8";
    }
    else{
        display.textContent += "8";
    }
})
nine.addEventListener("click", ()=>{
    if ( display.textContent === '0' ){
        display.textContent = "9";
    }
    else{
        display.textContent += "9";
    }
})

function Calculate(var1, var2, sign){
    switch(sign) {
        case "-":
          // code block
          break;
        case "+":
          // code block
          break;
        case "*":
          // code block
          break;
        case "/":
            // code block
            break;
        case "+":
          // code block
          break;
        default:
          // code block
      }
      
}