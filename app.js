let compScore = 0;
let userScore = 0;
let choices = document.querySelectorAll(".choice");
let user = document.querySelector("#you");
let comp = document.querySelector("#comp");
let msg = document.querySelector(".msg");
const winSound = new Audio("effects/winnerEffect.mp3");
const failSound = new Audio("effects/fail.mp3");
const click = new Audio("effect/click.mp3");
const showWinner = (usreWin, userChoice, compChoice) => {
  if (usreWin) {
    userScore++;
    winSound.play();
    user.innerText = `${userScore}`;
    user.style.color = "green";
    comp.style.color = "red";
    msg.innerText = `your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    failSound.play();
    comp.style.color = "green";
    user.style.color = "red";
    comp.innerText = `${compScore} `;
    msg.innerText = ` ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const genCompCh = () => {
  let opt = ["rock", "paper", "scissor"];
  let i = Math.floor(Math.random() * 3);
  return opt[i];
};
const playGame = (userChoice) => {
  let compChoice = genCompCh();

  if (userChoice === compChoice) {
    click.play();
    console.log(`tis draw`);
    msg.innerText = `Game was draw ! Your ${userChoice} & ${compChoice} are Same. Play again`;
    msg.style.backgroundColor = "black";
    comp.style.color = "black";
    user.style.color = "black";
  } else {
    let usreWin;
    if (userChoice == "rock") {
      usreWin = compChoice == "paper" ? false : true;
    } else if (userChoice == "paper") {
      usreWin = compChoice == "scissor" ? false : true;
    } else {
      usreWin = compChoice == "rock" ? false : true;
    }
    showWinner(usreWin, userChoice, compChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {

    let userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
