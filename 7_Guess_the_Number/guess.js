let randomNumber = Math.floor((Math.random()*100+1));
console.log(randomNumber)
let input = document.getElementById("input");


let button = document.querySelector("button")


let span = document.querySelector("span");

let result = document.querySelector(".result");


let attempt = 1;

button.addEventListener("click",()=>{

    if(input.value == "" || isNaN(input.value)){
        alert("Please Enter Valid Number")
    }else if(input.value <=0){
        alert("Please enter number greater than zero")
    }else if(input.value >100){
        alert("Please enter number less than 100")
    }
    
    checkGuess(randomNumber);
    input.value=""
    span.innerHTML= attempt++;
})

let checkGuess = (randomNumber) =>{
   if(randomNumber == input.value){
    result.innerHTML = `Congratulation You Won!!!`;
   }else if(input.value < randomNumber){
     result.innerHTML = `Number is Too Low`
   }
   else{
    result.innerHTML = `Number is Too High`
   }
}
