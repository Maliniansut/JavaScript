for (var num=1;num<=100;num++){
    var isPrime=true;

    for(var i=2;i<num;i++){
        if(num%i==0){
            isPrime=false;
        }
        
    }
    if(isPrime){
        console.log(num);
    }
}