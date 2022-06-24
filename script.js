function calculator(){
    const num1 = parseInt(prompt('enter first number: '));
    const operator = (prompt('enter operator: +, -, *, / '));
    const num2 = parseInt(prompt('enter second number: ')); 
        if (operator ==="+"){
            alert( num1+num2)
           }else if(operator ==="-"){
               alert(num1-num2)
           }else if (operator ==="/"){
               alert(num1/num2)
           }else if(operator ==="*"){
               alert(num1*num2)
           }else{
               alert('invalid operator: use +, -, / or *')
           }

}
calculator()
const task = (prompt('would you like to perform another task? yes/no'));
if (task === "yes"){
    calculator()
}else if (task === "no"){
    alert('thanks for using calculator')
}else{
    alert('unrecongised input, enter either yes/no')
}




