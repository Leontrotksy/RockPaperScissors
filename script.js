const rock=document.querySelector("#Rock");
const paper=document.querySelector("#Paper");
const scissors=document.querySelector("#Scissors");
const results=document.querySelector("#Results");
let playerScore=0;
let computerScore=0;
let human="";
rock.addEventListener("click", function(e){
    human="rock";
    results.textContent="The score is computer: "+computerScore+" human: "+playerScore;
        win=winner(getComputerChoice(),human);
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
        results.textContent+=" "+win;
        if(playerScore+computerScore>=5)game();
}
    );
paper.addEventListener("click", function(e){
    human="paper";
    results.textContent="The score is computer: "+computerScore+" human: "+playerScore;
        win=winner(getComputerChoice(),human);
        results.textContent+=win;
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
        if(playerScore+computerScore>=5)game();
}
);
scissors.addEventListener("click",function(e){
human="scissors";
results.textContent="The score is computer: "+computerScore+" human: "+playerScore;
        win=winner(getComputerChoice(),human);
        results.textContent=win;
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
        results.textContent+=" "+win;
        if(playerScore+computerScore>=5)game();
});
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
    if(computerScore>playerScore){
        results.textContent="you lose the game";
    }
    else if(playerScore>computerScore){
        results.textContent="You win the game";
    }
    else{
        results.textContent="You tied the game";
    }
    const offer=document.createElement("div");
    document.appendChild(offer);
    offer.textContent="Do you want to play again";
    offer.addEventListener("click",function(e){
        playerScore=0;
        computerScore=0;
    })
}
