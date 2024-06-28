/*let number=12345;
let reversedNumber=0;

while(number>0){
    let digit=number%10; // last digit extraction
    reversedNumber =(reversedNumber *10)+digit;
    number=Math.floor(number/10); //remove last digit from the original number
}
console.log("Reversed number:",reversedNumber)*/

var num=456;
var rem;
var rev=0;
while(num>0){
    rem=num%10;
    rev= rev*10+rem;
    num=parseInt(num/10);
}
console.log(rev)