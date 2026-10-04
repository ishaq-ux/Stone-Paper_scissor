let userScore = 0;
let comptScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const comptScorePara = document.querySelector("#compt-score");
const genCompChoices = () => {
    const options =["rock","paper","scissors"];
   const randIdx = Math.floor(Math.random()*3);
   return options[randIdx];
};
const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "game was draw.play again";
     msg.style.backgroundColor = "#081b31";
    
}
const showWinner = (userWin) => {
    if(userWin){
       userScore++;
       userScorePara.innerText = userScore;
        msg.innerText =( "you win!");
        msg.style.backgroundColor = "green";
    }else{
        comptScore++;
        comptScorePara.innerText = comptScore;
        msg.innerText = ("you lose");
         msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
console.log("user choice",userChoice);
const compChoice = genCompChoices();
console.log("comp choice",compChoice);

if(userChoice == compChoice){
drawGame();
}
else{
    let userWin = true;
    if(userChoice == "rock"){
        userWin = compChoice ==="paper" ? false:true;
    }else if(userChoice == "paper"){
      userWin = compChoice === "scissors" ? false: true;
    }else{
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
}
};
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id")
        console.log("choice was clicked",userChoice);
        playGame(userChoice);

    })
})
