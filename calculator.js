
//Calculator operations functions
const add = function(num1, num2) {
    return Number(num1) + Number(num2);
      
  };
  
  const subtract = function(num1, num2) {
    return num1 - num2;
      
  };

  function divide(num1, num2){
    return num1 / num2;
  }
  
  
  const multiply = function(num1, num2) { 
    
      return num1 * num2;
  
  };
  
  const power = function(num1, num2) {
    let total = num1;
  
    for (let i=1; i < num2; i++){
      total *= num1;
    }
    return total;
      
  };
  
  const factorial = function(num) {
      let base = 1;
    for (let i = 1; i <= num; i++){
      base *= i;
    }
    return base;
  };
  

  //Calculate function - uses both numbers and selected operator
  //returns value for display.
  function calculate(operator, num1, num2){
    let newDisplay = 0;

    switch(operator){
      case "add":
        newDisplay = add(num1,num2);
        break;
      case "sub":
        newDisplay = subtract(num1,num2);
        break;
      case "divide":
        newDisplay = divide(num1,num2);
        break;
      case "multiply":
        newDisplay = multiply(num1,num2);
        break;
    }

    console.log(Number(newDisplay));
    return Number(newDisplay)    
  }


//Select number keys
const calculator = document.querySelector('.main-container');
const numKeys = calculator.querySelector('.num-buttons')

//when element is pressed - check if it's a num key
//then use innterText as parameter for addToDisplay
numKeys.addEventListener('click', e=>{
  if(e.target.matches('button')){
  console.log("number button clicked");
  addToDisplay(e.target.innerText);
  }
});

//Select Operator keys
const operatorKeys = calculator.querySelector('.operations');

operatorKeys.addEventListener('click', e=>{
  if(e.target.matches('button')){
    operatorClicked(e.target.id);
  }
});

let num1 = null;
let num2 = null;
currentOp = null;

function operatorClicked(operatorKey){
  console.log(operatorKey);

  if(operatorKey === "AC"){
    let num1 = null;
    let num2 = null;
    currentOp = null;
    display.innerText = 0;
    overwrite = true;
    return;

  } else if(operatorKey === "="){
    returnedVal = calculate(currentOp, num1, num2);
    console.log("Returned val: " + returnedVal);
    display.innerText = returnedVal;
    num1 =  returnedVal;
    num2 = null
    overwrite = true;
    currentOp = null;
    return
  }

  //Finish any current operation before saving the next operation
    else if(currentOp === null || currentOp === "equals"){
    console.log("storing " + display.innerHTML)
    currentOp = operatorKey;
    num1 = display.innerHTML;
    overwrite = true;
  } else {
    num2 = display.innerHTML;
    display.innerText = calculate(currentOp, num1, num2);
    num1 = display.innerHTML;
    num2 = null;
    overwrite = true;
    currentOp = operatorKey;
  }
  


}






const display = document.getElementById("display");

//variable to track if display should be overwritten (or number should be appended)
let overwrite = true;

function addToDisplay(num){

  //prevent more than 1 decimal point being added to the display string.
  if(num==="." && display.innerHTML.includes(".")){
    console.log("Decimal point already added");
    return;
  }

  if(overwrite){
    display.innerHTML = num;
    overwrite=false;
  } else
  display.innerHTML += num;

}