/*let a = [11, 2, 43, 8, [1, 2, 4, "name"]];
a[4][3] = "gender";
console.log(a);*/

/*let m = [3, 5, 7, { name: 'hello', age: 24 }];


let obj = m[3];
let age = obj.age;

console.log(age);*/

//comparing ages of both
let n = [3, 5, 7, [10, { name: 'hello', age: 20 }]];
let m = [3, 5, 7, { name: 'hello', age: 24 }];

// Access the age property from array n
let ageN = n[3][1].age; // accessing age: 20 from n

// Access the age property from array m
let ageM = m[3].age; // accessing age: 24 from m

// Compare ages and print the result
if (ageN === ageM) {
    console.log("The ages are equal.");
} else {
    console.log("The ages are not equal.");
}

let a = {
    a1: [
      {
        a2: [
          'i am a string',
          ['grab me']
        ]
      }
    ]
  };
  
  // Accessing the string "grab me"
  let grabMeString = a.a1[0].a2[1][0];
  console.log(grabMeString);  // Output: grab me
  