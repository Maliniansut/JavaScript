let a={
    name:"Maliniansu",
    language:"Javascript",
    run:()=>{
        console.log("you run")
    }
}
console.log(a)

//"you run" will be shown in this case ,but if the method is not available in this then it would check its prototype and print that .

let p={
    run:()=>{
        console.log("run")
    }
}

p.__proto__={
    name:"RISH"
}
a.__proto__=p
a.run()
console.log(a.name)