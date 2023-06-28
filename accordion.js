document.addEventListener('DOMContentLoaded', function () {
    let pdfbtn = document.getElementsByClassName("pdfbtn")[0]
    let open = document.getElementsByClassName("open")
    let dropboxDiscription = document.getElementsByClassName("dropboxDiscription")
    let icon = document.getElementsByClassName("material-symbols-outlined")
    let a;
    for (let i = 0; i < open.length; i++) {
        open[i].addEventListener("click", () => {
            if (dropboxDiscription[i].className === "dropboxDiscription op") {
                dropboxDiscription[i].className = "dropboxDiscription";
                icon[i].className = "material-symbols-outlined deg"
                document.getElementsByClassName("pdf")[0].style.display = "none"
            } else {
                dropboxDiscription[i].className = "dropboxDiscription op";
                icon[i].className = "material-symbols-outlined col"
                document.getElementsByClassName("pdf")[0].style.display = "block"
            }
        })

    }
    
   let openLogout = document.getElementsByClassName("logout")
    let accountsBtn =  document.getElementsByClassName("accounts")
  accountsBtn[0].onclick = function(event) {
    console.log(event.target.className)
    if(openLogout[0].style.display === "block" ){
     
          openLogout[0].style.display = "none"
    }
    else{
        
         openLogout[0].style.display = "block"
    }
        // console.log(openLogout[0].style.display='none')
        // if(openLogout[0].style.display=== "block"){
        //     openLogout[0].style.display = "none"
        // }
        
    }

  
    // console.log(openLogout[0]);
    // accountsBtn[0].addEventListener("click", ()=>{
    //     if(openLogout[0].style.display=== "block"){
           
    //     }
    //     else{
          
    //     }
    // })
  
    
})