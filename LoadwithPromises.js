const loadScript = async (src) => {
    return new Promise((resolve,reject)=>{
        let script=document.createElement("script")
        script.src=src
        script.onload =()=>{
            resolve(src)
        }
        document.head.append(script)
})
}
//by async await
/*const main1=async ()=>{
    let a= await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js")
    console.log(a)
}
main1()*/

//by .then function
/*let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js")
a.then((value)=>{
    console.log(value)
})*/

let p = ()=>{
        new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error("Not acceptable."))
        },3000)
    })
}
let a= async ()=>{
    try{
        let c =  await p()
        console.log(c)
    }
    catch(err){
        console.log(err)
    }
}
a()

