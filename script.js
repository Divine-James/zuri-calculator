const num1 = parseInt(prompt('enter first number: '));
const num2 = parseInt(prompt('enter second number: '));
const operator = (prompt('enter operator: '));
//const task = (prompt('would you like to perform another task?'));

    if (operator ==="+"){
        alert(num1+num2)
       }else if(operator ==="-"){
           alert(num1-num2)
       }else if (operator ==="/"){
           alert(num1/num2)
       }else if(operator ==="*"){
           alert(num1*num2)
       }else{
           alert('invalid operator: use +, -, / or *')
       }

