# Paper Rock, or Scissor !!
This is a simple game that i made for phase 0 final project 

## How to play this game?
1. Open the link below
2. Choose one of the three choices between Paper, Rock, or Scissor.
3. Once you choosed, the computer will generate their choice.
4. The result will appear!

Click this [Link](https://tyogautomo.github.io/paper-rock-scissor/) to play the Game!

## What language I use to make this game?
- HTML
- CSS
- Java Script

## How the code works..

1. First, we need to know how to get the Computer Choice, here is the code is use to get that
```js
function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor"
    }
}
```
2. Second, we need to make a function that determine which is the winner, use this logic to determine
```js
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "The game is a tie."
    } else
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "You Lose! The computer won!";
        } else {
            return "You won!";
        }
    } else
    if (userChoice === "paper") {
        if (computerChoice === "scissor") {
            return "You Lose! The computer won!";
        } else {
            return "You win!";
        }
    } else
    if (userChoice === "scissor") {
        if (computerChoice === "rock") {
            return "You Lose! The computer won!";
        } else {
            return "You won!";
        }
    }
}
```
3. Third, we need to make a function for every user-choice possibility, this is an example if user choose paper..
```js
userPaper.addEventListener("click", function () {

    let compChoice = getComputerChoice();
    let usChoice = "paper";
    let result = determineWinner(usChoice, compChoice);
    let compImg = document.querySelector(".img-computer")

    if (compChoice == "paper") {
        compImg.setAttribute("src", "img/paper.jpg")
    } else if (compChoice == "rock") {
        compImg.setAttribute("src", "img/rock.jpg")
    } else if (compChoice == "scissor") {
        compImg.setAttribute("src", "img/scissor.jpg")
    }
    let hasil = document.querySelector("span.hasil")
    hasil.innerHTML = result;
})
```
