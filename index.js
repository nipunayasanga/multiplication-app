// Generate two random numbers between 1 and 10
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

// Get references to HTML elements
const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");

// Initialize score from localStorage or set it to 0 if it doesn't exist
let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}

// Display the initial score on the webpage
scoreEl.innerText = `score: ${score}`;

// Display the math question based on the random numbers
questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

// Calculate the correct answer
const correctAns = num1 * num2;

// Add an event listener to the form for handling user input
formEl.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the user's answer from the input field and convert it to a number
  const userAns = +inputEl.value;

  // Check if the user's answer matches the correct answer
  if (userAns === correctAns) {
    // Increase the score if the answer is correct
    score++;
    updateLocalStorage(); // Update the score in localStorage
  } else {
    // Decrease the score if the answer is incorrect
    score--;
    updateLocalStorage(); // Update the score in localStorage
  }

  // Update the displayed score on the webpage
  scoreEl.innerText = `score: ${score}`;

  // Generate a new math question with new random numbers
  num1 = Math.ceil(Math.random() * 10);
  num2 = Math.ceil(Math.random() * 10);
  questionEl.innerText = `What is ${num1} multiply by ${num2}?`;
  correctAns = num1 * num2;

  // Clear the input field for the next question
  inputEl.value = "";
});

// Function to update the score in localStorage
function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
