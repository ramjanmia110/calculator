// let display = document.getElementById('display');
// let currentOperand = '';
// let previousOperand = '';
// let operation = null;


// function updateDisplay(){
//     display.value =currentOperand 
// }

// function appendNumber(number){
//     if(number === '0' && currentOperand ==='0' ) return;
//     if(number ==='.' && currentOperand.includes('.')) return;
//     currentOperand =currentOperand.toString() + number.toString();
//     updateDisplay()
// }


// function chooseOperation(op) {
//     if (currentOperand === '') return;
//     if (previousOperand !== '') {
//         compute();
//     }
//     operation = op;
//     previousOperand = currentOperand;
//     currentOperand = '';
// }

// function compute() {
//     let computation;
//     const prev = parseFloat(previousOperand);
//     const current = parseFloat(currentOperand);
//     if (isNaN(prev) || isNaN(current)) return;
//     switch (operation) {
//         case '+':
//             computation = prev + current;
//             break;
//         case '-':
//             computation = prev - current;
//             break;
//         case '*':
//             computation = prev * current;
//             break;
//         case '/':
//             computation = prev / current;
//             break;
//         default:
//             return;
//     }
//     currentOperand = computation;
//     operation = null;
//     previousOperand = '';
//     updateDisplay();
// }


// function clearDisplay() {
//     currentOperand = '';
//     previousOperand = '';
//     operation = null;
//     updateDisplay();
// }


// function appendDot(){
//     if(currentOperand.includes('.')) return;
//     currentOperand += '.';
//     updateDisplay();
// }



let display =document.getElementById('display');

let currentOperand ='';
let previousOperand ='';
let operation =null;

function updateDisplay(){
    display.value =currentOperand;
    
}

updateDisplay()

function appendNumber(number){
    if(number ==="0" && currentOperand==="0") return;
    if(number ==='.' && currentOperand.includes('.')) return;
    currentOperand =currentOperand.toString() + number.toString();
    updateDisplay()
}




function compute(){
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if(isNaN(prev) || isNaN(current)) return;

    switch(operation){
        case '+':
            computation =prev + current;
            break;

        case '-':
        computation =prev - current;
        break;

        case '*':
        computation =prev * current;
        break;

        case '/':
        computation =prev / current;
        break;


        default:
            return;

        
    }

    currentOperand = computation;
    operation = null;
    previousOperand = '';
    updateDisplay();
}


function chooseOperation(op){
    if(currentOperand === "")return;
    if(previousOperand !==""){
        compute()
    }

    operation =op;
    previousOperand =currentOperand;
    currentOperand =''
}



function clearDisplay(){
currentOperand ='';
previousOperand ='';
operation =null;
updateDisplay()
}


function appendDot(){
    if(currentOperand.includes('.'))return;

    currentOperand +=".";
    updateDisplay()
}






