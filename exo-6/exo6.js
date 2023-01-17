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
//Somme teamPoints.

const total = () => {
  let start = 0;
  team.games.forEach((element) => {
    start += element.teamPoints;
  });
  return start;
};
//Somme opponent,
const totalOpp = () => {
  let compt = 0;
  team.games.forEach((element) => {
    compt += element.opponentPoints;
  });
  return compt;
};
//Puis moyenne opponent.
let moyenne = Math.floor(totalOpp() / team.games.length);
console.log("Moyenne opponents : " + moyenne);
console.log("Nombre de match : " + team.games.length);

//Joueur le plus âgé
function findOldestPlayer() {
  let count = 0;
  team.players.forEach((element) => {
    count == element.age(count > element.age ? Math.max(element.age) : null);
  });

  // if (element.age > count) {
  //   count = element.age;
  // },

  // team.players.forEach((element) => {
  //   if (element.age === count) {
  //     players =
  //       "Le joueur le plus âgé est : " +
  //       element.firstName +
  //       " " +
  //       element.lastName +
  //       "qui a " +
  //       element.age;
  //   }
  // });
}

//console
//console.log("aperçu : "+);
console.log("Joueur le plus âgé : " + findOldestPlayer());

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
