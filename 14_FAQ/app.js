let accordian = document.querySelectorAll(".accordian");

accordian.forEach((accordian) => {
    console.log(accordian)
    let title = accordian.querySelector(".title");
    let answer  = accordian.querySelector(".answer")
    let icon = accordian.querySelector(".icon");
    accordian.addEventListener("click",()=>{
        answer.classList.toggle("active")
        icon.classList.toggle("rotate")
    })
    


})