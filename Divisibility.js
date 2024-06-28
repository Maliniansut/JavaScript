function checkDivisibility(number){
if(number%3==0 && number%5==0){
    console.log(number+"is divisble by both 3 and 5");
}
else if(number %3==0){
    console.log(number+"is divisble by 3");
}
else if(number %5==0){
    console.log(number+"is divisible  by 5");
}
else{
    console.log(number+"not divisble by either 3 or 5.");
}
}
checkDivisibility(15);
checkDivisibility(9);
checkDivisibility(10);
checkDivisibility(17);
checkDivisibility(30);
