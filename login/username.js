let loginSubmit = document.querySelector("#loginSubmit")
let username =  document.querySelector("#username")
let usname;


loginSubmit.onclick = function(){
console.log(username.value)
usname = username.value
localStorage.setItem("name", username.value)
document.cookie = username.value
console.log(document.cookie)
}
console.log(usname)
