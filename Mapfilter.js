/*let myList=[3,7,5,8,9]
for(let n of myList){
    console.log(n*n);
}
//map:will change original lement by value (returned by function)
//only works with array(also known as callback func)
//function used as an argument is knwon as callback func(inside function and don't have any name)


myList=myList.map(function(m){
return m*m
})
console.log(myList)
function square(n){
    return n*n
}
//passing a fucntion
myList=myList.map(square)

//myList.map(functoion(e,i){
//console.log(e,i)
//}) map doesn't have any block will be described in fucntion only.*/

/*let empList = [
        {name:"Tcil1", age:23,email:"tcil1chd@gmail.com", isPresent:true}, // 0
        {name:"Tcil2", age:33,email:"tcilc2hd@gmail.com", isPresent:false}, // 1
        {name:"Tcil3", age:13,email:"tcilch3d@gmail.com", isPresent:true},  // 2
        {name:"Tcil4", age:32,email:"tcilchd4@gmail.com", isPresent:false},  // 3
        {name:"Tcil5", age:19,email:"tcil5chd@gmail.com", isPresent:true},   // 4
     ]
    
    console.log(empList)
    console.log(empList[4].email);
//map:return same data as it is
let myData=mobj.map(function(data){
    return data.email;
})
//Filter:can return data with some constraints
list1=[5,24,3,4,19]

/*function isEven(n){
    if(n%2==0){
        return n
    }
}
list1=list1.map(fucntion(n){
    return n>15
})*/
/*function demo(n){
    return n*10
}*/

//with arrow fucntion 
let p=10
const demo=()=>{
    return p*100
}

const dofun=(n)=>{
    console.log('learning:',n);
}
dofun('js')