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
let result = null;

let sign = '';
let signUsed = false;

let usedEqual = false;

display.textContent = '0';


AC.addEventListener("click", ()=>{
    num1= null;
    // num2= null;

    display.textContent= "0";
})

zero.addEventListener("click", ()=>{
    if ( display.textContent === '0' || usedEqual){
        display.textContent = "0";
        usedEqual = false;
    }
    else{
        if(signUsed){
            num1 = Number(display.textContent);
            display.textContent = "0";
            signUsed = false;
        }
        else{
            display.textContent += "0";
        }
        
    }
})
one.addEventListener("click", ()=>{
    if ( display.textContent === '0' || usedEqual){
        display.textContent = "1";
        usedEqual = false;
    }
    else{
        if(signUsed){
            num1 = Number(display.textContent);
            display.textContent = "1";
            signUsed = false;
        }
        else{
            display.textContent += "1";
        }   
    }
    
})
two.addEventListener("click", ()=>{
    if ( display.textContent === '0' || usedEqual ){
        display.textContent = "2";
        usedEqual = false;
    }
    else{
        if(signUsed){
            num1 = Number(display.textContent);
            display.textContent = "2";
            signUsed = false;
        }
        else{
            display.textContent += "2";
        }
        
    }
})
three.addEventListener("click", ()=>{
    if ( display.textContent === '0' || usedEqual){
        display.textContent = "3";
        usedEqual = false;
    }
    else{
        if(signUsed){
            num1 = Number(display.textContent);
            display.textContent = "3";
            signUsed = false;
        }
        else{
            display.textContent += "3";
        }
    }
})
four.addEventListener("click", ()=>{
    if ( display.textContent === '0' || usedEqual){
        display.textContent = "4";
        usedEqual = false;
    }
    else{
        if(signUsed){
            num1 = Number(display.textContent);
            display.textContent = "4";
            signUsed = false;
        }
        else{
            display.textContent += "4";
        }
    }
})
five.addEventListener("click", ()=>{
    if ( display.textContent === '0' || usedEqual){
        display.textContent = "5";
        usedEqual = false;
    }
    else{
        if(signUsed){
            num1 = Number(display.textContent);
            display.textContent = "5";
            signUsed = false;
        }
        else{
            display.textContent += "5";
        }
    }
})
six.addEventListener("click", ()=>{
    if ( display.textContent === '0' || usedEqual){
        display.textContent = "6";
        usedEqual = false;
    }
    else{
        if(signUsed){
            num1 = Number(display.textContent);
            display.textContent = "6";
            signUsed = false;
        }
        else{
            display.textContent += "6";
        }
    }
})
seven.addEventListener("click", ()=>{
    if ( display.textContent === '0' || usedEqual){
        display.textContent = "7";
        usedEqual = false;
    }
    else{
        if(signUsed){
            num1 = Number(display.textContent);
            display.textContent = "7";
            signUsed = false;
        }
        else{
            display.textContent += "7";
        }
    }
})
eight.addEventListener("click", ()=>{
    if ( display.textContent === '0' || usedEqual){
        display.textContent = "8";
        usedEqual = false;
    }
    else{
        if(signUsed){
            num1 = Number(display.textContent);
            display.textContent = "8";
            signUsed = false;
        }
        else{
            display.textContent += "8";
        }
    }
})
nine.addEventListener("click", ()=>{
    if ( display.textContent === '0' || usedEqual){
        display.textContent = "9";
        usedEqual = false;
    }
    else{
        if(signUsed){
            num1 = Number(display.textContent);
            display.textContent = "9";
            signUsed = false;
        }
        else{
            display.textContent += "9";
        }
    }
})


//Need to make it so that you can't press 
//an operation button more than once if no new numbers are given

minus.addEventListener("click", ()=>{
    if (usedEqual){
        display.textContent = "0";
        usedEqual = false;
        return;
    }
    sign = '-';
    if(signUsed){
        return;
    }
    signUsed = true;
    if(num1 !== null){
        num1 = Calculate(Number(num1),Number(display.textContent), sign);
        display.textContent = num1;
    }
    else{
        num1 = Number(display.textContent);
    }
    
    
})
plus.addEventListener("click", ()=>{
    if (usedEqual){
        display.textContent = "0";
        usedEqual = false;
        return;
    }
    sign = '+';
    if(signUsed){
        return;
    }
    signUsed = true;
    if(num1 !== null){
        num1 = Calculate(Number(num1),Number(display.textContent), sign);
        display.textContent = num1;
    }
    else{
        num1 = Number(display.textContent);
    }
    
    
})
multiply.addEventListener("click", ()=>{
    if (usedEqual){
        display.textContent = "0";
        usedEqual = false;
        return;
    }
    if(signUsed){
        return;
    }
    sign = '*';
    signUsed = true;
    if(num1 !== null){
        num1 = Calculate(Number(num1),Number(display.textContent), sign);
        display.textContent = num1;
    }
    else{
        num1 = Number(display.textContent);
    }
    
    
})
divide.addEventListener("click", ()=>{
    if (usedEqual){
        display.textContent = "0";
        usedEqual = false;
        return;
    }
    sign = '/';
    if(signUsed){
        return;
    }
    signUsed = true;
    if(num1 !== null){
        num1 = Calculate(Number(num1),Number(display.textContent), sign);
        display.textContent = num1;
    }
    else{
        num1 = Number(display.textContent);
    } 
})
equals.addEventListener("click", ()=>{
    usedEqual = true;
    num1 = Calculate(Number(num1),Number(display.textContent), sign);
    display.textContent = num1;
    num1 = null;
})

changeSign.addEventListener("click", () => {
    if ( display.textContent === '0' || usedEqual){
        display.textContent = "0";
        usedEqual = false;
    }
    display.textContent = Number(display.textContent) > 0 ? '-' + display.textContent : Number(display.textContent)*(-1);
})

percent.addEventListener("click", ()=>{
    if ( usedEqual){
        display.textContent = "0";
        usedEqual = false;
        return;
    }
    display.textContent = Number(display.textContent) / 100;
})
dot.addEventListener("click", ()=>{
    let containsDot = display.textContent.includes('.');
    if (!containsDot){
        display.textContent = display.textContent + '.';
    }
})

function Calculate(var1, var2, sign){
    switch(sign) {
        case "-":
          return var1 - var2;
          break;
        case "+":
          return var1 + var2;
          break;
        case "*":
          return var1 * var2;
          break;
        case "/":
            return var1 / var2;
            break;
        case "":
          return var2;
          break;
        default:
            return "ERROR";
            break;
          
      }
      
}