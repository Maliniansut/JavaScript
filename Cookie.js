console.log(document.cookie)
document.cookie="name=mallu222003"
console.log(document.cookie)

//Writing to cookie
//when we write something on document.cookie new cookies are added to it.
//if we write on document.cookie not all cookies are replaced.

/*An assignment to document.cookie is treated specially in a way that a write operation doesn't touch other cookies.

document.cookie = "user=Malini" 
*/

//encode URI component
document.cookie="name=Malini"
let key=prompt("Enter your key")
let value=prompt("enter your value")

//set call
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)
