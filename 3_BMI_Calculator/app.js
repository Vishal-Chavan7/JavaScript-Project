let form = document.querySelector("form");
let heightInput = document.querySelector("#height");
let weightInput = document.querySelector("#weight");
let submitBtn = document.querySelector("button");
let displayResult = document.querySelector("#result");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  let heightInputValue = parseFloat(heightInput.value);
  let weightInputValue = parseFloat(weightInput.value);

  if (isNaN(heightInputValue) || isNaN(weightInputValue) || heightInputValue <= 0 || weightInputValue <= 0) {
    displayResult.innerHTML = "Please enter valid height and weight!";
    return;
  }

  
  heightInputValue = heightInputValue / 100;
  
  let result = weightInputValue / (heightInputValue * heightInputValue);

  displayResult.innerHTML = `BMI Index: ${result.toFixed(2)}`;
  
  heightInput.value = "";
  weightInput.value = "";
});
