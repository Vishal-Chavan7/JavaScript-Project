const logMoodBtn = document.getElementById("logMood");
const timeline = document.getElementById("timeline");
let selectedMood = null;

// Handle mood selection
document.querySelectorAll(".emojis span").forEach(emoji => {
  emoji.addEventListener("click", () => {
    selectedMood = emoji.dataset.mood;
    document.querySelectorAll(".emojis span").forEach(e => e.style.transform = "scale(1)");
    emoji.style.transform = "scale(1.5)";
  });
});

// Log mood to LocalStorage
logMoodBtn.addEventListener("click", () => {
  if (!selectedMood) {
    alert("Please select a mood!");
    return;
  }

  const today = new Date().toTimeString().split("T")[0];
  const moods = JSON.parse(localStorage.getItem("moods")) || {};

  moods[today] = selectedMood;
  localStorage.setItem("moods", JSON.stringify(moods));

  displayTimeline();
  alert("Mood logged successfully!");
});

// Display mood timeline
function displayTimeline() {
  const moods = JSON.parse(localStorage.getItem("moods")) || {};
  timeline.innerHTML = Object.keys(moods)
    .map(date => `<div>${date}: ${moods[date]}</div>`)
    .join("");
}

// Initialize timeline on page load
displayTimeline();
