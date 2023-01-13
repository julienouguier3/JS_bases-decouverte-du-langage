// you can write js here

console.log("exo-4");

var secretMessage = [
  "Learning",
  "isn't",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it's",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

//enlever le dernier élément du tableau
secretMessage.pop();
console.log(secretMessage);

//ajouter les mots 'to' and 'program'
secretMessage.push("to", "program");
console.log(secretMessage);

//Changer le mot 'easily' par 'right'
secretMessage[6] = "right";
console.log(secretMessage);

//supprimer le premier élément du tableau
secretMessage.shift();
console.log(secretMessage);

//ajouter la chaine "Programming" en début
secretMessage.unshift("Programming");
console.log(secretMessage);

// remplacer la série de cinq mots : 'get', 'right', 'the', 'first', 'time' par un seul mot : 'know'
replace = secretMessage.splice(5, [5], "know");//splice (nbdébut, nbrsuppr, éléments)
console.log(secretMessage);

//méthode `.join` pour afficher le message secret
console.log(secretMessage.join(" "));