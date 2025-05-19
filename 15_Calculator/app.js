let input = document.querySelector(".input");
let buttons  = document.querySelectorAll("button");
let string = "";

Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        console.log(e.target.innerHTML);

        if(e.target.innerHTML == "="){
            string = eval(string);
            input.value = string;
        }else if(e.target.innerHTML == "AC"){
            string = "";
            input.value = string;
        }else if(e.target.innerHTML == "DEL"){

            string = string.toString().slice(0,-1);
            input.value = string;
        }
        else{

        string+= e.target.innerHTML;
        input.value = string;
        }
    })
})