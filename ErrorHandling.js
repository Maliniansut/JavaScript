setTimeout(()=>{
    console.log("Hacking wifi...")
},1000)
//exception happens in scheduled code ,then try and catch won't catch.
try{
    setTimeout(()=>{
        console.log(ray)
    },100)
    
}
catch(error){
    console.log("Hey you!")
}


setTimeout(()=>{
    console.log("Fetching username and password.")
},2000)
setTimeout(()=>{
    console.log("Hacking facebook id of Ray.")
},3000)
setTimeout(()=>{
    console.log("Username and password fetched.")
})