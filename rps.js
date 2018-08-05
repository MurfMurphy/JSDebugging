let gameOver = false;
let computerChoices = ["rock", "paper", "scissors"];

function randomFrom(array) {
return array[(Math.ceil(Math.random()*3)) ];
}


function checkInput(playerInput, computerChoices) {
  if (playerInput === "quit") {
    return false;
  }
  
  let computerChoice = randomFrom(computerChoices);
  
    if(computerChoice === "rock" && playerInput === "scissors"){
    alert("Computer wins!");
    return true;
    } else if (computerChoice === "scissors" && playerInput === "paper"){
    alert("Computer wins!");
    return true;
    } else if (computerChoice === "paper" && playerInput === "rock"){
    alert("Computer wins!");
    return true;
    } else if (computerChoice === "rock" && playerInput === "paper"){
    alert("You Win!");
    return true;
    } else if (computerChoice === "scissors" && playerInput === "rock"){
    alert("You Win!");
    return true;  
    } else if (computerChoice === "paper" && playerInput === "scissors"){
    alert("You Win!");
    return true;
    }

// alert("Computer wins!");``
// return false
}

function start(gameOver, computerChoices) {
  while (!gameOver){
    let playerInput = '';
    prompt("Hi! Enter rock/paper/scissors to play, or quit to stop playing.");
gameOver = checkInput(playerInput, computerChoices);
playerInput = "";

} 
}



start(gameOver, computerChoices)  
