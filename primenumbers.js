/*let n= 7
let count=0;
for(let i=1;i<=n;i++){
    if(n%i==0){
        count++;
    }
}
if(count>2){
    console.log(n+' not prime.');
}
else{
    console.log(n+' prime');
}*/

/*let n =15 //remove 1 and 15 and if one of any of these is found (2-14)
let isPrime = true;
for(let i=2;i<=n;i++){ //(for(let i=2;i<n/2;i++)) dividing all numbers imto half and then chceking
    if(n%i==0){
        isPrime=false;
    }
}
if(isPrime== false){
    console.log(n+' not prime.');
}
else{
    console.log(n+' prime');}
*/

//star pattern
let str=''
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        str=str+'*';
    }
    //changing the line after 1
    str=str+'\n' //will not print itself and not enter
}console.log(str)
//i    j
//1<=5   1 2 3 4 5
//2<=5   1 2 3 4 5
//6<=5   out of loop
//try hollow square