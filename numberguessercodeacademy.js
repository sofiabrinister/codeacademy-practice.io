let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () =>{
  return Math.floor(Math.random() *10)
}

const compareGuesses = (human, computer, secret) => {
    if (human > 9  || human < 0){
      alert('Number out of range!')
    }
    let humanAbs = secret-human;
    let computerAbs = secret-computer;
    if (human === computer){
      return true
    } else if ((Math.abs(humanAbs))<(Math.abs(computerAbs))){
      return true
    } else {
      return false
    }
}

const updateScore = (winner) => {
  if (winner === 'human'){
    humanScore = (humanScore+1);
  } else {
    computerScore = (computerScore+1)
  }
}

const advanceRound = () => currentRoundNumber +=1

  
