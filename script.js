function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    switch(choice){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        default:
            return "Scissors";
    }
}
function winner(computer, human){
    human=human.substring(0,1).toUpperCase()+human.substring(1).toLowerCase();
    if(computer == human){
        return "You Tie! The Computer also chose "+computer;
    }
    if(computer=="Rock"){
        if(human=="Paper"){
            return "You Win! Paper beats Rock";
        }
        return "You Lose! Rock beats Paper";
    }
    if(computer=="Paper"){
        if(human=="Rock"){
            return "You Lose! Paper beats Rock";
        }
        return "You Win! Scissors beats Paper";
    }
    if(computer=="Scissors"){
        if(human=="Rock"){
            return "You Win! Rock beats Scissors";
        }
        return "You Lose! Scissors beats Paper";
    }
}
function game(){
    let playerScore=0;
    let computerScore=0;
    for(let i=0;i<5;i++){
        console.log("The score is currently human: "+playerScore+"computer: "+computerScore);
        human=prompt("what is your move");
        win=winner(getComputerChoice(),human);
        console.log(win);
        if(win.charAt(4)=="W"){
            playerScore++;
        }
        else if(win.charAt(4)=="L"){
            computerScore++;
        }
        else{
            computerScore++;
            playerScore++;
        }
    }
    if(computerScore>playerScore){
        console.log("You Lose");
    }
    else if(playerScore>computerScore){
        console.log("You win");
    }
    else{
        console.log("You tied");
    }
    let choice=prompt("Do you want to play again");
    if(choice =="yes"){
        game();
    }
}
game();