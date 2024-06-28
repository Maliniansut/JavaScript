/*let i =-1
while(i<=5){
    console.log("Looping start",i)
    i++;
}*/
/*let i=5
while(i>=1){
    console.log(i,"loop start");
    i--;
}*/

/*let i=1
do{
    console.log(i)
    i++
} while(i<=5)*/

/*for(let i=1;i<5;i++){
    console.log(i,'- for loop');
}*/
/*let n;
for(n=1;n<5;n++);{ //semicolon would start and end the loop imediately
    console.log(n)
}
console.log(n)*/

/*let num =349
let unit_digit=num%10//act on 349
console.log(unit_digit)

num=parseInt(num/10)//act on 34
//console.log(num)

unit_digit=num%10
console.log(unit_digit)


num=parseInt(num/10)//34/10
unit_digit=num%10//3
console.log(unit_digit)

num=num/10
console.log(num)*/

/*let num=459
while(num>0){
    let unit_digit=num%10 //4
    console.log(unit_digit)
    num=parseInt(num/10) //0
}*/

let num =459876543
let count=0;
while(num>0){
    let u_digit=num%10//digit at unit place would be printed
    console.log(u_digit)
    count++ //print all digits one by one
    num=parseInt(num/10)
    
}
console.log('no. of digits',count)//give total number of digits