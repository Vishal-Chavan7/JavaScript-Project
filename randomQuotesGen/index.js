let button = document.querySelector('#generate')
let displayResult = document.querySelector('#quoteDisplay')
const quotes = [
  "Work hard in silence, let success make the noise.",
  "Stay hungry, stay foolish.",
  "What we think, we become.",
  "Success is a journey, not a destination.",
  "Dream big. Start small. Act now.",
  "Believe in yourself and you’re unstoppable.",
  "Do it with passion or not at all.",
  "Make each day your masterpiece.",
  "Your only limit is your mind.",
  "Doubt kills more dreams than failure ever will.",
  "Great things never come from comfort zones.",
  "Be stronger than your excuses.",
  "Little progress each day adds up to big results.",
  "Turn your wounds into wisdom.",
  "You become what you believe.",
  "Don’t stop until you’re proud.",
  "The best time for new beginnings is now.",
  "Happiness is a choice, not a result.",
  "The harder the battle, the sweeter the victory.",
  "Live less out of habit and more out of intent.",
  "Your vibe attracts your tribe.",
  "You don’t have to be perfect to be amazing.",
  "Success is getting up one more time than you fall.",
  "Small steps every day lead to big changes.",
  "Do something today that your future self will thank you for."
  ];
  
  button.addEventListener("click",()=>{
    let random = quotes[Math.floor(Math.random()*quotes.length)]
    displayResult.innerHTML = random;
    displayResult.classList.add('shadow')
   
  })
