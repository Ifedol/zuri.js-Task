function add(a,b){
    return a + b;
}

function subt(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function modulus(a,b){
    return a % b;
}

function SimpleCalc(){
    var a = Number(prompt("CALCULATOR \n Put your first number"));
    var b = Number(prompt("Put your second number"));
    var operator = prompt("Put in your operator");
    var result = 0;

    if (operator == "+") {
        result = add(a,b);
        alert(a + " + " + b)
    }

    else if (operator == "-") {
        result = subt(a,b);
    }

    else if (operator == "*") {
        result = multiply(a,b);
    }

    else if (operator == "/") {
        result = divide(a,b);
    }

    else if (operator == "%") {
        result = modulus(a,b);
    }

    else {
        alert("Put a valid operator or number")
    }
    alert(result);
}
SimpleCalc();
