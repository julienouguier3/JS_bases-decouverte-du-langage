// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
  name: "Joe's house",
  rooms: 5,
  garage: false,
  bathrooms: 1 + 2,
  cars: ["Clio", "Van"],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
//console.log(joeInfo.cars);

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
// console.log(joeInfo.bathrooms);

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information.
joeInfo.garage = true;
// console.log(joeInfo.garage);

// tennis : créer et extraire des données
let team = {
  // objet
  players: [
    // propriété

    {
      firstName: "Pablo", //key: value
      lastName: "Sanchez",
      age: 11,
    },
  ],
  games: [
    {
      opponent: "Broncos",
      teamPoints: 42,
      opponentPoints: 27,
    },
  ],

  addPlayer(firstName, lastName, age) {
    //methode
    team["players"].push({
      firstName: firstName, //key: value
      lastName: lastName,
      age: age,
    });
  },

  addGames(opponent, teamPoints, opponentPoints) {
    team["games"].push({
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    });
  },
};
//Appel les fonctions 5 fois
for (i = 0; i < 5; i++) {
  let tp = Math.floor(Math.random() * 85);
  let op = Math.floor(Math.random() * 85);

  team.addGames("Guerin", tp, op);
  team.addPlayer("Julia", "torres", 12);
}
//Somme teamPoints

const total = () => {
  let start = 0;
  team.games.forEach((element) => {
    start += element.teamPoints;
  });
  return start;
};

const totalOpp = () => {
  let compt = 0;
  team.games.forEach((element) => {
   compt += element.opponentPoints;
    
  });
  return compt;
};

let moyenne = totalOpp() / team.games.length;
console.log(moyenne);
console.log(team.games.length);

//console
console.log(team);
console.log("Score total team : " + total());
console.log("Score total opponents : " + totalOpp());

/* Fonction dans variable (other way)
let addPlayer = (firstName, lastName, age) => {
    
    let item = { firstName: firstName, lastName: lastName, age: age };// <propertie:><value>
    team["players"].push(item);
    //console.log(team["players"].push(item));
};

addPlayer('Julie','Nouguier', 29);
 */
