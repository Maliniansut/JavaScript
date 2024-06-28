let number =123456;
let originalNumber= n;
let reversedNumber=0;
for(let temp=n; temp!==0; temp=Math.floor(temp/10)){
    let digit =temp %10; // extract the last digit
    reversedNumber=(reversedNumber *10)+digit; //append the digit
}
if(originalNumber== reversedNumber){
    console.log('${originalNumber} is a palidrome.');
}
else{
    console.log('${originalNumber} is not palidrome.')
}