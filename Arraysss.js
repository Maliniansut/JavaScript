let myArray=[5,6,67,7,9,'f',"avinash",5,6,-7,true]
//array would be always shown as object
console.log(myArray[4]);
console.log(typeof(myArray));
console.log(myArray.length);

let size=myArray.length
for(let i=0;i<size;i++){
    console.log(myArray[i])
}
console.log(myArray[11]) //total values exceeded

//for index
//in:indexes of array
//of:returns values in array

let myArray1=[2,4,5,6,7]
for(let i in myArray1){
    console.log(i);
}

for(let n of myArray){
    console.log(n**2);
}

//let myArray2=[2,4,6,,7,8,9,12]
//let sum =0 ;
for(let i=0;i<myArray2.length;i++){
    sum=sum+myArray2[i]
}console.log(sum);

let myArray2=[2,4,5,6,7]
let sum=0;
for(let item in myArray2){
    sum=sum+item
    console.log(sum)
}

//let vs var vs const

