let rsp = ["rock", "paper", "scissor"];
let rounds = 5;


function singleRound(userSelection, computerSelection) {

 

    switch (true) {
        case userSelection === `rock` && computerSelection === `scissor`:
        case userSelection === `scissor` && computerSelection === `paper`:
        case userSelection === `paper` && computerSelection === `rock`:
            console.log("user won");
        break;

        case userSelection === `scissor` && computerSelection === `rock`:
        case userSelection === `paper` && computerSelection === `scissor`:
        case userSelection === `rock` && computerSelection === `paper`:
            console.log("Computer WON");
        break;

        default:
        console.log("no one won");
        }    
}


function game(){
    
    for(let i = 0; i <= rounds;  i++ ){
        let userSelection = prompt("What is your selection? rock or paper or scissor?")
        if(userSelection != "rock" && userSelection != "paper" && userSelection != "scissor") {
            alert("wrong input");
        }
        
        computerPlay = () => rsp[Math.floor(Math.random() * rsp.length)];
        let computerSelection = computerPlay(); 
        
        console.log(`${userSelection} and ${computerSelection}`, singleRound(userSelection, computerSelection));
    }
}

game();
