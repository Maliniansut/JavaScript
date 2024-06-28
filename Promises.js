let promise = new Promise(function(resolve,reject){
    //alert("I am an alert in promise");
    //alert prints to console in javascript
    resolve(56)
})



console.log("Hello");

//This would appear in output after 2 seconds
setTimeout(function(){
    console.log('Hello in 2 seconds')
},2000) 

console.log("My name is " + "John")
console.log(promise)

/*Why Promises : organise things and for await & async?
Fetch google.com homepage ==> console.log("google.com homepage done")
Fetch data from data api
Fetch pictures from the server
Print downloading */