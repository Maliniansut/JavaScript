try
{
    let age= prompt("Enter your age")
    age=Number.parseInt(age)
    if(age>50){
    throw new ReferenceError("Age of joy is not true.")
    }
}
catch(error){
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)

}
console.log("The script is still running.")