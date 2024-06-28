function addNumbers(num1,num2){
    return num1+num2;
}

function checkEvenOdd(number){
    if(number% 2==0){
        console.log(number + " is even.");
    }
    else{
        console.log(number + " is odd.");
    }
}
let firstNumber = 5;
let secondNumber = 9;
let additionResult = addNumbers(firstNumber, secondNumber);
checkEvenOdd(additionResult);