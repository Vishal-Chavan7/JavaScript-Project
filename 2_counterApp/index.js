let countValue = document.querySelector("#result");
let incrementBtn = document.querySelector("#increment");
let decrementBtn = document.querySelector("#decrement");
let resetBtn = document.querySelector("#reset");

let count = 0;

incrementBtn.addEventListener("click", () => {
  if (count < 15) {
    count = count + 1;
    countValue.innerHTML = count;
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countValue.innerHTML = count;
});

decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count = count - 1;
    countValue.innerHTML = count;
  }
});
