var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceImage = document.querySelector(".img1");
diceImage.setAttribute("src", "images/dice" + randomNumber1 + ".png");


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var rightDiceImage = document.querySelector(".img2");
rightDiceImage.setAttribute("src", "images/dice" + randomNumber2 + ".png");
 
var heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  heading.textContent = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  heading.textContent = "Player 2 Wins! 🚩";
} else {
  heading.textContent = "Draw!";
}