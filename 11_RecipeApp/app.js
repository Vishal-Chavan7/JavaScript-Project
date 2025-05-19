const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".searchBtn");
const recipeContainer = document.querySelector(".recipe-Container");
const recipeDetailsContent = document.querySelector(".recipe-details-content");
const recipeCloseBtn = document.querySelector(".recipe-close-btn");


// function to call api
const fetchApi = async (query)=>{

    recipeContainer.innerHTML = "<h2>Fetching recipes....</h2>";
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();
    console.log(data);
    recipeContainer.innerHTML = "";

    // display data fetch from the api
    data.meals.map(meal =>{

        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML =`
        <img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <p><span>${meal.strArea}</span> Dish </p>
        <p>Belongs to <span>${meal.strCategory}</span></p>
        `;
        const button = document.createElement('button');
        button.textContent = "View Recipe";
        recipeDiv.appendChild(button);

        // Adding Eventlistener Click

        button.addEventListener("click",()=>{
            openRecipePopup(meal.idMeal);
        })
        recipeContainer.appendChild(recipeDiv);
        console.log(meal)
    })
}

const openRecipePopup = (meal) =>{

    recipeDetailsContent.textContent = `
    <h2>${meal.strMeal}</h2>`
     recipeDetailsContent.parentElement.style.display = "block";
     
}

searchBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    fetchApi(searchInput);
})
