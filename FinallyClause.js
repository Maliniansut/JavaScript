const f =() =>{
    try{
        let a=0
        //case1: when try has error
        console.log(program)
        console.log("Program run successfully.")
        //case2: when try has return
        return
    }
    catch(error){
        console.log("Error occured")
        //case3: when catch also has error.
        console.log(p)
    }
    //In all above cases finally when execute always.
    //guaratees that code will run even if catch also throws an error.
    //Also used for cleanups.
    finally{
        console.log("Library scenes are peaceful.")
        //Close the file
        //Exit the loop
        //Writing to the log file
    }
}

f()
