let startButton = document.getElementById("startButton");
let resultDisplay = document.getElementById("countdowndisplay");
let inputValue = document.getElementById("timeInput");
let pauseButton = document.getElementById("pause");

let timer;
let value;

function startCounter() {
    value = parseInt(inputValue.value);
    
    if (isNaN(value) || value <= 0) {
        resultDisplay.innerHTML = "Please enter a valid number";
        return;
    }

    timer = setInterval(() => {
        value -= 1;
        resultDisplay.innerHTML = `time countdown ${value}`;
        if (value <= 0) {
            clearInterval(timer);
            resultDisplay.innerHTML = "Time up🕛";
            inputValue.value = "";
            startButton.disabled = false;

        }
    }, 1000);
}

pauseButton.addEventListener("click", () => {
    resultDisplay.innerHTML = `time countdown ${value}`;
    clearInterval(timer);
});

startButton.addEventListener("click", startCounter);