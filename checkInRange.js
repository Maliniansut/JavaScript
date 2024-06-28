function checkInRange(min,max,num){
    return num>= min&& num <=max;
}
let minRange = 10,
let maxRange = 25;
let numToCheck = 23;

//check if number dfalls within the range
if(checkInRange(minRange, 25, numToCheck)){
    console.log(numToCheck + " falls within the range (" + minRange + "and" + 25 + ").");
}
else{
    console.log(numToCheck + "does not fall within the range ("+ minRange + "and" + 25 + ").");
}