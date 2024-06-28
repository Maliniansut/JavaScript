let p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Resolved after 2 seconds")
        resolve(56)
    },2000)
})

//.then value of p1 has another promise p2 
p1.then((value)=>{
    console.log(value)
    let p2 = new Promise((resolve,reject)=>{
        resolve("Promise 2")
    })
    return p2;
})
//another .then function after promise p2
.then((value) =>{
    console.log("We are done.")
    return 2
})
//const can also be done with .then as js converts it into immediate promise.
.then((value)=>{
    console.log("Finally done.")
})