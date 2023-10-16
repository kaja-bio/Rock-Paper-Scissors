
let scoreComputer = 0;
let scorePlayer = 0; 
function game() {   
    for (let i = 0; i < 5; i++) {
        const hands = ["rock", "paper", "scissors"];
        const computerSelection = hands[Math.floor(Math.random() * hands.length)];
        const playerSelection = prompt( "Do you want to choose rock, paper, or scissors?", '').toLowerCase();
        console.log('Computer Selection: ' + computerSelection);
        console.log('Player Selection: ' + playerSelection);
        function Result(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
              return "Tie";
            }    
            if (
              (computerSelection == "paper" && playerSelection == "rock") ||
              (computerSelection == "scissors" && playerSelection == "paper") ||
              (computerSelection == "rock" && playerSelection == "scissors")
            ) {
              scoreComputer += 1;
              return "Computer wins";
            }
          
            if (
              (computerSelection == "scissors" && playerSelection == "rock") ||
              (computerSelection == "paper" && playerSelection == "scissors") ||
              (computerSelection == "rock" && playerSelection == "paper")
            ) {
              scorePlayer += 1;
              return "You win";
            }
             return "Please enter a valid prompt";
          }
        const gameResult = Result(playerSelection, computerSelection);
        console.log(gameResult);
        console.log("The computer score is " + scoreComputer);
        console.log("The player score is " + scorePlayer);
    }
    console.log("Final score " + scoreComputer + " for the computer and " + scorePlayer + " for the player.")
    if (scoreComputer > scorePlayer) {
        console.log("You lose the game!");
    }
    if (scoreComputer < scorePlayer) {
        console.log("You win the game!");
    }
    else {
        console.log("It's a tie.");
    }
}
game()