/*var num=20
let res =num%5==0
console.log(res); */

/*if(num%2==0){
    console.log('even')
}
else{
    console.log('odd')
}*/

/*let num=5
if(num>0){
    console.log('positive')
}
else{
    console.log('negative')
}*/

//multiple conditionals on same data 
/*let num =-5
if(num>0){
    console.log('positive')
}
else if(num<0){
    console.log('negative')
}
else{
    console.log('zero');
}*/


//best case checks only 2 times
/*let a=11;
let b=10;
let c=9;

if(a>b && a>c){
    console.log('a is greater')
}
else if(b>c){
    console.log('b is greater')
}
else if(a==b && b==c){
    console.log('All the values are equal.')
}
else{
    console.log('c is greater')
}*/



//nested if else
if (email_not_empty){
    if(email_proper_format){
        if(email_in_small_letter){
            console.log("Email is valid")
        }
        else{
            console.log("Email is not valid")
        }
    }
    else{
        console.log("Make a valid emial")
    }
}
else{
    console.log("Email is empty.")
}
