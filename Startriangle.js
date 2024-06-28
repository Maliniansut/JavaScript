var m =5;
for (var i=1;i<=m;i++){
    //for blank spaces 
    for(var j=1; j<=m-1;j++){
        console.log(" ");
    }
    //for printing star iterations firstly 1,2,3,4,5
    for(var k=1;k<=i*2-1;k++){
        console.log("*");
    }
    console.log();
}