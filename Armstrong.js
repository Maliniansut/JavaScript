function isArmstrongNumber(num) {
    // Convert the number to a string so we can easily iterate over its digits
    let numStr = num.toString();
    // Calculate the number of digits
    let numDigits = numStr.length;
    
    // Initialize the sum of the digits raised to the power of the number of digits
    let sum = 0;
    
    // Iterate over each digit
    for (let char of numStr) {
        // Convert the character back to a number and raise it to the power of numDigits
        sum += Math.pow(parseInt(char), numDigits);
    }
    
    // Check if the sum equals the original number
    return sum === num;
}


let number = 153; 
if (isArmstrongNumber(number)) {
    console.log(`${number} is an Armstrong number.`);
} else {
    console.log(`${number} is not an Armstrong number.`);
}
