let icon =document.querySelector(".link")
let color =document.querySelector(".colors-box")



// --------------------------------colors-open-  start---------
const element = document.querySelectorAll("#ul .btn");
const list=[]
document.body.classList.add(localStorage.getItem("color"))

element.forEach(e =>{
    list.push(e.getAttribute("data-color"));
    
    e.addEventListener("click",function(e) {
    e.stopPropagation();
    
        document.body.classList.remove(...list);
        document.body.classList.add(this.getAttribute("data-color"));
        console.log(this.getAttribute("data-color"))
        localStorage.setItem("color", this.getAttribute("data-color"))
        
    })
})
// ---------------------------colors end-----------------
window.addEventListener("click", function(event) {  
 color.classList.add("d-none");


 });
let doctorName = document.getElementsByClassName("doctorName")[0]
const accountName = localStorage.getItem("name")
doctorName.textContent = accountName
console.log(document.cookie)
 
