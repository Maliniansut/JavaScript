 const createTodo = async()=>{
    let options={
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            title:'She',
            body:'is Hot.',
            userId:1,
        }),
    }
    let p =await fetch('https://jsonplaceholder.typicode.com/posts',options)
        let response = await p.json()
        return response
}


const mainFunc=async()=>{
    let todo={
        title:"mallu",
        body:"allu",
        userId:1100,
    }
    let todoo = await createTodo(todo)
    console.log(todoo)
    console.log(await getTodo(101)) //doesnot have 101
}

const getTodo = async(id)=>{
    let p = fetch('https://jsonplaceholder.typicode.com/posts/1'+id)
    .then((response)=> response.json())
    .then((json)=> console.log(json));
}

mainFunc()




//normal syntax of fetch api
/*fetch('https://jsonplaceholder.typicode.com/posts',options)
    .then((response)=>response.json())
    .then((json)=>console.log(json));*/