//Error object
try{
    Malini //variable not defined.
}
catch(error){
    console.log(error.name)
    console.log(error.message)
}

//Custom Error
try{
    console.log(Ray)
    throw new ReferenceError("Malini is rude.")
}
catch(error){
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}