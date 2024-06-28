/*for(let i=1;i<=5 ;i++){
    for( let j=1;j<=5; j++){
        if(i==1 || i==5 ||j==1||j==5)
            console.log("*");
        else
            console.log(" ");
    }
    console.log("<br>");
}*/
//square  (for rec increase no of columns) 
let str=' '
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(i==1|| i==5 || j==1|| j==5)//working after false also as condition is true
            str=str+'* '; //space is also a character
        else
            str=str+"  "
    }
    str=str+'\n'
}
console.log(str)

//Diagonal (when left diagonal)
/*i  j
1  1
2  2
3  3
4  4 
5  5*/
let str1=' '
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(i==1|| i==5 || j==1|| j==5 || i==j)//working after false also as condition is true
            str1=str1+'* '; //space is also a character
        else
            str1=str1+"  "
    }
    str1=str1+'\n'
}
console.log(str1)

//Right Diagonal
/*i   j
6-1   5 j==6-i
6-2   4
6-3   3
6-2   2
6-1   1*/
let str2=' '
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(i==1|| i==5 || j==1|| j==5 || i==j||j==6-i)//working after false also as condition is true
            str2=str2+'* '; //space is also a character
        else
            str2=str2+"  "
    }
    str2=str2+'\n'
}
console.log(str2)
