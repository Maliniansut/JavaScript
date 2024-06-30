//async keyword before any function ensures it returns a promise.
async function Weather(){

    let Shimla = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("28 degrees")
        },3000)
    })
    let Chandigarh = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("37 degrees")
        },5000)
    })
    //Chandigarh.then(console.log)
    //Shimla.then(console.log)Promise {[[PromiseState]]: 'pending', [[PromiseResult]]: undefined, Symbol(async_id_symbol): 8, Symbol(trigger_async_id_symbol): 1}
    //Untill this promise fulfilled it would not go further.

    console.log("Fetching weather of Delhi Please wait....")
    const ShimlaW = await Shimla//When it sees await keyword ,it would let this promise resolve first before going further.
    const ChandigarhW = await Chandigarh
    return[ShimlaW, ChandigarhW]
}
console.log("Welcome to weather control room")
let a = Weather()
a.then((value)=>{
    console.log(value)
})