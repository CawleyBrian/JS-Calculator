let total = 0;


const add = function(num1, num2) {
    return num1 + num2;
      
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
  
let operator =""

  function operate(operator, num1, num2){
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

    return newDisplay    
  }

let display = document.getElementById("display")

let appendMode = true;


  //check if in write mode (append mode)
    //if true then append to display string
    //else start new string, append mode = true
function addToDisplay(string){

  if(appendMode){
    display.innerHTML += ""+this.id;
  }
  else{
    appendMode = true;
    display.innerHTML = this.id;

  }  
  
}

const updateTotal = function(){ 


  let newTotal = operate(operator, Number(total), Number(display.innerHTML)) 
  total = newTotal;
  display.innerHTML = Number(total);
  appendMode= false;
  operator = this.id
  console.log(this.id)
}


  //event listner on each number button
    //concatenate clicked button to display string

//Add event listener to each num button.
for (i=0;i<10;i++){
  let numBtn = document.getElementById(i)
  let numValue = numBtn.innerHTML;
  numBtn.addEventListener('click', addToDisplay);
}

  let plus = document.getElementById("add");
  plus.addEventListener('click', updateTotal)
  
   let sub = document.getElementById("sub");
   sub.addEventListener('click', updateTotal)



//initial total and display = 0

//on click num button
  //check if in write mode (append mode)
    //if true then append to display string
    //else start new string, append mode = true
  

//on click operate button (new fucntion)
  //Update Display?
  //appendMode = false;
  //operator = this.id

