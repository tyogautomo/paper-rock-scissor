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

let userPaper = document.querySelector(".paper");
let userRock = document.querySelector(".rock");
let userScissor = document.querySelector(".scissor")

// IF USER CHOOSE PAPER -----------------------------------
userPaper.addEventListener("click", function () {

    let compChoice = getComputerChoice();
    let usChoice = "paper";
    let result = determineWinner(usChoice, compChoice);
    // console.log("comp: " + compChoice);
    // console.log("user: " + usChoice);
    // console.log(result);

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

//IF USER CHOOSE ROCK -------------------------------------
userRock.addEventListener("click", function () {

    let compChoice = getComputerChoice();
    let usChoice = "rock";

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

//IF USER CHOOSE SCISSOR ----------------------------------
userScissor.addEventListener("click", function () {

    let compChoice = getComputerChoice();
    let usChoice = "scissor";

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