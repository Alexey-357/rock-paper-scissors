function computerPlay() {
    let num = Math.floor(Math.random()*3);
    console.log(num);
    if(num==0){
        return "Rock";
    }
    else if(num==1){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}
function startRound(playerSelection, computerSelection){
    console.log(playerSelection[0]);
    if(playerSelection[0]=='r' || playerSelection[0]=='R'){
        playerSelection="Rock";
    }
    else if (playerSelection[0]==="p"|| playerSelection[0]==="P"){
        playerSelection="Paper"
    }
    else {
        playerSelection="Scissors";
    }
        

if(playerSelection==="Rock"){ 
    if(computerSelection==="Paper") {
     return "You lose! " + computerSelection + " beats " +  playerSelection;
    }
    else {
     return "You win! " + playerSelection + " beats " + computerSelection;
    }
}
else if(playerSelection==="Paper") {
    if(computerSelection==="Rock") {
        return "You win! " + playerSelection + " beats " + computerSelection ;
    }
       else {
        return "You lose! " + computerSelection  + " beats " + playerSelection;
       }
   
}
else {
    if(computerSelection==="Rock"){
    return "You lose! " + computerSelection  + " beats " + playerSelection; 
    }
    else {
    return "You win! " + playerSelection + " beats " + computerSelection ;
    }
}
}

let playerSelection = "rock"
let computerSelection=computerPlay();

function game(){
   let result = startRound();
   result.substring(4,7);
}