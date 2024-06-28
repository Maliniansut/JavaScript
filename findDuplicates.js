function findDuplicates(arr){
    let duplicates={};
    let result =[];

    arr.forEach(function(element){
        if(duplicates[element]){
            if(duplicates[element]===1){
                result.push(element);
            }
            duplicates[element]++;
        }
        else{
            duplicates[element] =1;
        }
    });
    return result;
}

const array1 = [1,2,3,4,5,2,,7,8,8,8,3];
const duplicatesArray = findDuplicates(array1);
console.log("Duplicate element in array:",duplicatesArray);