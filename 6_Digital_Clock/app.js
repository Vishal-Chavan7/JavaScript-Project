let clock =document.querySelector(".clock")




setInterval(() => {
     date = new Date();
     clock.innerHTML = date.toLocaleTimeString();
},1000);
