function searchInArray(array, number){
    for(let i=0;i<array.length;i++){
        if(array[i]==number){
            return true;
        }
    }
    return false;
}
let arrayToSearch=[10,20,30,40,50];
let numberToSearch = 80;
if(searchInArray(arrayToSearch, numberToSearch)){
    console.log(numberToSearch + " is found in array.");
}
else{
    console.log(numberToSearch + " is not found in the array.");
}