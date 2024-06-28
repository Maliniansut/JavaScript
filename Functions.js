function add(){
    let a=12
    let b=15
    var c=a+b
    //console.log(a+b)
    return c //no value of anything written after return 
}
let result =add(); //function call 
console.log(result)// result can be modified as result already stored

console.log(add()) // result cannot be modified 
//only printing th value not storing the value 

/*function square(num){
    console.log(num*num)
}

square(5)
square(10)
square(15)
square(11)*/

function isPositive(num){
    if(num>0)
        return 'positive number'
    else 
        return 'not positive'
}
let res= isPositive(-88)
console.log(res)