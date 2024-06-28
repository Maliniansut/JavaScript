var students=[['Rish',80],['Rishika',77],['Parikshit',88],['Malini',60],['Himanshu',79]];
var Avgmarks=0;

for(var i=0; i<students.length;i++){
    Avgmarks+=students[i][1];
    var avg =(Avgmarks/students.length);
}

console.log("Average grade:" +(Avgmarks)/students.length);

if(avg<=90){
    console.log("Grade A");
}
else if(avg<80){
    console.log("Grade B");
}
else if(avg <70){
    console.log("Grade C");
}
else if(avg <60){
    console.log("Grade D");
}
else {
    console.log("Grade F");
}