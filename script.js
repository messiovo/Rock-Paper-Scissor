

function getComputerChoice(){
    let items = ["rock", "paper", "scissor"]
    let choice = Math.floor(Math.random() * items.length);
   if(choice === 0){
    return "rock";
   }else if(choice === 1){
    return "paper";
   }else{
    return "scissor"
   }
};


function getHumanChoice(){

    let humanSelection = prompt("choose between rock, paper, scissor").toLowerCase();

    if(["rock", "paper", "scissor"].includes(humanSelection)){
        return humanSelection;
    }else{
        return "Invalid choice, please choose between rock, paper, scissor";
    }

};



let humanScore = 0;
let computerScore = 0;

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

function playRound(humanChoice, computerChoice){
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    
    if (humanChoice === computerChoice){
        console.log(`It's a tie, play again!`)
        return "It's a tie"
    } else if(humanChoice === "rock" && computerChoice === "scissor" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissor" && computerChoice === "paper"
    ){
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }else {
     console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
     computerScore++;
     };
    console.log(`Score: Human ${humanScore}, Computer ${computerScore}`);
    return {humanScore, computerScore};

   }



function playGame(){
    const totalGames = 5;
    for (let i = 0; i <=totalGames; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore){
        console.log(`Congratulations, you won the game! Final score: Human ${humanScore}, Computer ${computerScore}`);
    } else if (computerScore > humanScore){
        console.log(`Sorry, you lost the game! Final score: Human ${humanScore}, Computer ${computerScore}`);
    }else{
        console.log(`It's a tie, final score: Human ${humanScore}, Computer ${computerScore}`);
    }
};
playGame();

const play = playRound(humanChoice, computerChoice);
console.log(play);
console.log(play);
console.log(play);
console.log(play);
console.log(play);




