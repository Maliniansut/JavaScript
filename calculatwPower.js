function calculatwPower(base,exponent){
    return Math.pow(base,exponent);
}

function formatOutput(base,exponent,result){
    return base + "^" +exponent + "=" + result;
}

let base=parseInt(prompt("Enter the base:"));
let exponent=parseInt(prompt("Enter the exponent:"));
let result = calculatwPower(base,exponent);
console.log(formatOutput(base,exponent,result));