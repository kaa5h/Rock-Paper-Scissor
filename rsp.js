let rsp = ["rock", "paper", "scissor"];
let rounds = 5;
let userPoint = 1;
let computerPoint = 1;
let userWon = "User Won";
let computerWon = "Computer Won";
let none ="none won";

// This is for single round game. Keeps track of the win-lose of a single particular round
function singleRound(userSelection, computerSelection) {
    
    switch (true) {
        case userSelection === `rock` && computerSelection === `scissor`:
        case userSelection === `scissor` && computerSelection === `paper`:
        case userSelection === `paper` && computerSelection === `rock`:
            let user = `${userWon}: ${userPoint++}`;
            return user;
        break;

        case userSelection === `scissor` && computerSelection === `rock`:
        case userSelection === `paper` && computerSelection === `scissor`:
        case userSelection === `rock` && computerSelection === `paper`:
            let computer= `${computerWon}: ${computerPoint++}`;
            return computer;
        break;

        default:
            return none;
        break;
        }    
}

// This is for the whole game. Keeps track of the win-lose of all rounds and then declares the winner in the end
function game(){
    
    for(let i = 1; i <= rounds;  i++ ){
        
        let userSelection = prompt("What is your selection? rock or paper or scissor?")
        
        if(userSelection != "rock" && userSelection != "paper" && userSelection != "scissor") {
            alert("wrong input");
        }
        
        computerPlay = () => rsp[Math.floor(Math.random() * rsp.length)];
        let computerSelection = computerPlay(); 
        
        console.log(`${userSelection} and ${computerSelection}`, singleRound(userSelection, computerSelection));
    }

    if (userPoint > computerPoint){
        console.log("USER WON THE GAME OF RPS");
    }
    else if(computerPoint > userPoint){
        console.log("COMPUTER WON THE GAME OF RPS");
    }
    else{
        console.log("NONE WON THE GAME OF RPS");
    }
}

game();
