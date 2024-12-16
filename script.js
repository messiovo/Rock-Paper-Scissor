

function getComputerChoice(){
    let items = ["rock", "paper", "scissor"]
    let choices = Math.floor(Math.random() * items.length);
   
    if (choices === 0){
        return "rock";
    }else if(choices === 1){
        return "paper";
    }else{
        return "scissor";
    }
};





function getHumanChoice(){
    let humanChoice = prompt("choose between rock, paper, scissor").toLowerCase();
    if(humanChoice === "rock"){
        return "rock";
    }else if(humanChoice === "scissor"){
        return "scissor";
    }else{
        return "paper"
    }

};



let humanScore = 0;
let computerScore = 0;

function playRound(){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    if(computerChoice === "rock" && humanChoice === "scissor"){
        return "You lose! rock beats scissor";
    }else if (computerChoice === "paper" && humanChoice === "rock"){
        return "You lose! paper beats rock";
    }else if(computerChoice === "scissor" && humanChoice === "paper"){
        return "You lose! scissor beats paper"
    };

    if(computerChoice === "scissor" && humanChoice === "rock"){
        return "You win! rock beats scissor";
    }else if (computerChoice === "rock" && humanChoice === "paper"){
        return "You win! paper beats rock";
    }else if(computerChoice === "paper" && humanChoice === "scissor"){
        return "You win! scissor beats paper"
    }

}

const play = playRound();
console.log(play);

