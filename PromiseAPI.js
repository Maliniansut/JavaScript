let p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(1);
    },1000)
})
let p2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(2);
    },2000)
})
let p3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(3);
    },3000)
})
//now we want when all three promises are done then we see something on the console collectively.
/*If we run promise.all and one of the promises has errors it won't work.*/
/*let promise_all=Promise.all([p1,p2,p3]) 
promise_all.then((value)=>{
    console.log(value)
})*/

//Even if one of the promises has error it will work.
let promise_all=Promise.allSettled([p1,p2,p3]) 
promise_all.then((value)=>{
    console.log(value)
})