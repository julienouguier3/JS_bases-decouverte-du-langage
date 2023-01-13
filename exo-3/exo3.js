// you can write js here
console.log("exo-3");

//Récupérer le choix de l'utilisateur
var playerInput = prompt("Your choice ( rock, paper, scissors) ?");
playerInput = playerInput.toLowerCase(); //Ajout dans la variable "var playerInput)

function getPlayerChoice(playerInput) {
  if (
    playerInput === "rock" ||
    playerInput === "paper" ||
    playerInput === "scissors"
  ) {
    console.log(playerInput);
  } else {
    console.log(`erreur de frappe`);
  }
}

//Récupérer le choix du programme
function getComputerChoice() {
  let random = Math.floor(Math.random() * 3); //round : arrondi > || < ; * 3 : compris entre 0 et 2

  switch (random) {
    case 0:
      console.log("Ton adversaire a choisi : rock");
      return "rock";

    case 1:
      console.log("Ton adversaire a choisi : paper");
      return "paper";

    case 2:
      console.log("Ton adversaire a choisi : scissors");
      return "scissors";
  }
}

//Comparer les choix
function findWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    console.log("Tied");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    console.log("Win");
  } else {
    console.log("Lost");
  }
}

//Annoncer le gagnant
function playGame() {
  let uChoice = getPlayerChoice(playerInput);
  //console.log(uChoice);
  let computerChoice = getComputerChoice();
  // console.log(computerChoice);
  console.log(findWinner(uChoice, computerChoice));
}
playGame();

//Appels fonctions
//getPlayerChoice(playerInput); //Appel la fonction
//getComputerChoice();
//console.log(findWinner(playerInput, getComputerChoice()));
