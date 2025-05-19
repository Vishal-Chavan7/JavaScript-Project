// First Box
let box1= document.querySelector(".box1")



box1.addEventListener("mouseenter",(e)=>{
    console.log(e.target)
    
    let random = Math.floor(Math.random()*100+1)
    console.log(random) 
    box1.innerHTML = random
})

box1.addEventListener("mouseleave",(e)=>{

    box1.innerHTML = "1"
})


//second box  

let box2 =document.querySelector(".box2")
let clr ="red"

box2.addEventListener("mouseover",(e)=>{

    if(clr=="red"){
        box2.style.backgroundColor="red";
        clr="green";
    }else if(clr == "green"){
        box2.style.backgroundColor="green";
        clr="blue";
    }else{
        box2.style.backgroundColor="blue";
        clr= "red";
    } 
})

box2.addEventListener("mouseleave",(e)=>{

    box2.style.backgroundColor="white";
})


//third box  

let box3 = document.querySelector(".box3")

box3.addEventListener("click",(e)=>{
    console.log("clicked")
    let r1 = Math.floor(Math.random()*255+1)
    let r2 = Math.floor(Math.random()*255+1)
    let r3 = Math.floor(Math.random()*255+1)

    box3.style.backgroundColor= `rgb(${r1},${r2},${r3})`
})

box3.addEventListener("mouseleave",(e)=>{

    box3.style.backgroundColor="white";
})


//  fourth box  

let box4 = document.querySelector(".box4")

box4.addEventListener("click",(e)=>{
    let r1 = Math.floor(Math.random()*255+1)
    let r2 = Math.floor(Math.random()*25+1)
    let r3 = Math.floor(Math.random()*255+1)

    box1.style.backgroundColor= `rgb(${r1},${120},${190})`
    box2.style.backgroundColor= `rgb(${99},${r2},${250})`
    box3.style.backgroundColor= `rgb(${300},${200},${r3})`
    
})

box4.addEventListener("mouseleave",(e)=>{
    box1.style.backgroundColor = "white"
    box2.style.backgroundColor = "white"
    box3.style.backgroundColor = "white"
    box4.style.backgroundColor = "white";
})