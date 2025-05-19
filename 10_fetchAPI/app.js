console.log("Welcome to Fetch API");



// async function getData(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     let dataContainer = document.querySelector('#data')
//     dataContainer.innerHTML = data.map(post => `<p>${post.id}</p> <li>${post.title}</li>`).join('');
//     console.log(data);
// }

// getData();



async function postData(){
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response .json();
    console.log(data)
    let dataLarge = document.querySelector(".card1")
    dataLarge.innerHTML = data.map (post => `<div class="card">  <p>Product ID: ${post.id}</p> <li>Product Name: ${post.title}</li> <img src = ${post.image}></img> <li>Product Price: ${post.price}</li>  </div>`).join('');

    }

    postData();
