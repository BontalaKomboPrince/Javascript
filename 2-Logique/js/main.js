//Exercice : Langues

  var language = prompt("Plz choose your language");
  //La commande "prompt" permet d'afficher un boite de dialogue dans laquel l'utilisateur peut rentrer  des informations.
  // La variable "language" va stocker l'information qui sera introduite dans la boite de dialogue.
  if (language == "fr"){
    // En fonction de la reponse, un message d'alert s'affichera dans la langue choisi
    alert("Bonjour petit rayon de soleil, vous avez choisi " + language);
  } else if (language == "ps") {
    alert("olá raio de luz do sol,vous avez choisi " + language);
  } else if (language == "en"){
    alert("Hola mundo vous avez choisi " + language);
  } else {
    alert("Try again ");
  }

Exercice : Affichage des scores

var score = prompt("Enter your score plz");
//La variable "score" va stocker l'information que l'utilisateur va introduire
var ranking;
//En fonction de la reponse de l'utilisateur et des conditions, le score va etablire le ranking
if (score >= 90) {
  ranking = "A";
  alert("Your have obtain a score equal or above 90. Your ranking is " + ranking + " You'r supa dupaaaa gooood bro!");
} else if (score < 90 && score >= 51) {
  ranking = "B";
    alert("Your have obtain a score below 90. Your ranking is " + ranking + " You gooood bro!");
} else if (score <= 50) {
  ranking = "C";
    alert("Your have obtain a score below or equal 50. Your ranking is " + ranking + " You can go higher bro! I believe in YOU");
}


// Exercice : Mettre au pluriel

var singulier = prompt("Choissez un Item");
//La variable va contenir l'information a propos de l'item.
var item = prompt("Combien en possedez vous?")
var result = item + " "+ singulier

if (item > 1 ) {
  alert("Vous possedez " + result +"s");
  //Si le nombre d'item est superieur à 1, alors la variable "singulier" prendra un s
} else if (item = 1) {
  alert("Vous possedez " + result +"")
}
