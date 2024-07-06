let p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(1);
    },5000)
})
let p2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //resolve(2);
        reject(2);
    },3000)
})
let p3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(3);
    },3000)
})
//return thye value of whichever promise takes minimum time.
/*let promise_all=Promise.race([p1,p2,p3]) 
promise_all.then((value)=>{
    console.log(value)
})*/

//waits for fulfilling and returns that value.
//if none of the promises are resolved then it throws(aggregated error.)
let promise_all=Promise.any([p1,p2,p3]) 
promise_all.then((value)=>{
    console.log(value)
})
