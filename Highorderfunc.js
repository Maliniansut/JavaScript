//function inside function exclusively in javascript

/*function demo(){
    //step2
    function innerFunc(){
        console.log('inner fucntioncalled')
    }
    //step1
    console.log('this is demo funcrtion')
    innerFunc()
}
demo()*/

function demo(){
    function innerFunc(){
        return 100 //after returning from here it would go where inner function is called.
        //return can also be accessed by demo funciton 
    }
    //step1
    return innerFunc()
}

var res=demo()
console.log(res)