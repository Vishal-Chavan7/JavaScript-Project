const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn)=>{

    btn.addEventListener("click",(e)=>{
        if(e.target.id === "red"){
            document.body.style.backgroundColor = "red";
        }else if(e.target.id === "blue"){
            document.body.style.backgroundColor = "blue";
        }else if(e.target.id === "green"){
            document.body.style.backgroundColor = "green";
        }else if(e.target.id === "brown"){
            document.body.style.backgroundColor = "brown";
        }else if(e.target.id === "purple"){
            document.body.style.backgroundColor = "purple";
        }
    })
    
    
})

