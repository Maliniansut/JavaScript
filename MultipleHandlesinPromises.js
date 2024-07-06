let p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Hey This is Maliniansu.")
        resolve(1);
    },5000)
})

//multiple handlers to a single promise(runs parallely)
/*p.then(Handler1)
p.then(Handler2)
p.then(Handler3)
All these will run independently. */
p1.then(()=>{
    console.log("Handler1")
})
p1.then(()=>{
    console.log("Handler2")
})

//promise chaining(runs series wise)
p1.then(()=>{
    console.log("Promise Chaining.")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(4)
        },6000)
    })
}).then((value)=>{
    console.log(value)
})