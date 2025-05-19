let startbtn = document.querySelector(".start-btn");
let stopbtn = document.querySelector(".stop-btn");
let resetbtn = document.querySelector(".reset-btn");
let gettime = document.querySelector(".time-btn");
let clearbtn = document.querySelector(".clear-btn");
let countDown = document.querySelector("#countDown");
let elements = document.querySelector(".elements");
let count = 0
let id;

// start funtion 
startbtn.addEventListener("click",()=>{
   id =setInterval(()=>{
    countDown.innerText=count++
   },1000)})

// stop function
stopbtn.addEventListener("click",()=>{
    
    clearInterval(id)
    
})

// reset function 
 resetbtn.addEventListener("click",()=>{
    clearInterval(id)
    countDown.innerText = 0
    count = 0
 })

// get time function  
gettime.addEventListener("click",()=>{
    console.log("Vishal")
    let newElement = document.createElement("p")
    newElement.innerText = `The time Count is ${count-1}`
    newElement.classList.add("display")
    elements.appendChild(newElement)

})

// clearbtn function

clearbtn.addEventListener("click",()=>{
    console.log("Vishal");
    elements.textContent= "";
})