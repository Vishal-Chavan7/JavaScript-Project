let btn = document.querySelector(".btn");
let container = document.querySelector(".joke")
let url = "https://icanhazdadjoke.com/" 

// const fetchdata =async()=>{
//   const response = await fetch("https://icanhazdadjoke.com/",{
//     headers:{
//         Accept: "application/json"
//     }
//   })
//   const data = await response.json()
//   container.textContent= data.joke;
//   console.log(container);
// }

const fetchData = () =>{
    fetch(url,{
        headers:{
           Accept: "application/json"
        }
    }).then((res)=>{
        return res.json()
    }).then((data)=>{
        container.textContent = data.joke
    })
}
fetchData()

btn.addEventListener("click",fetchData)