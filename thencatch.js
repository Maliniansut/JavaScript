//promises are executed parallely.
let p1= new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(() =>{
        console.log("I am a promise and I am resolved.")
        resolve(true)
        
    },5000)
})
let p2 = new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(() =>{
        console.log("I am a promise and I am rejected.")
        reject(new Error("I am an Error."))
    },5000)
})

p1.then((value)=>{
    console.log(value)
})
//catching the error thrown by p2
/*p2.catch((error)=>{
    console.log("Some error occured in p2.")
})*/

p2.then((value)=>{
    console.log(value)
},(error) =>{
    console.log(error)
})