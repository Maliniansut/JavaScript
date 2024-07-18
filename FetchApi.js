let p = fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((value)=>{
    console.log(response.status)
    console.log(response.ok)
}).then((value)=>{
    console.log(value)
})