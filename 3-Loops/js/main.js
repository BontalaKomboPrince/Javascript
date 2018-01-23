// // // Exercice : Pair et impair
// // for (var i = 0; i < 20; i++) {
// //   if (i % 2 === 0)
// //   // the " % " is called the modulo operator, it finds the remainder after division of one number by another"
// //   //the "===" represent a strick equality
// //   {
// //     document.write( " The number "+ i + " is Pair" );
// //   }else if (i % 2 !== 0)
// // // "!==" represent a strict unequality
// //   {
// //     document.write( " The number "+ i + " is ImPair")
// //   }
// // }
// //
// // //Exercice : Multiplication Tables
// // for (var i = 0; i < 10; i++) {
// //   var result = (i * 9);
// //   //"result" va stocker le resultat de la multiplication
// //   document.write(  " " + i + "*" + 9 + " = " + result+ " " )
// // }
//
// // Exercice : assigner des grades
// for (var i = 0; i < 100; i++) {
//   var ranking;
//   //En fonction de la reponse de l'utilisateur et des conditions, le score va etablire le ranking
//   if (i > 90) {
//     ranking = "A";
//     document.write( i + " Your have obtain a score equal or above 90. Your ranking is " + ranking + " You'r supa dupaaaa gooood bro!<br>");
//
//   } else if (i <= 90 && i > 80) {
//     ranking = "B";
//       document.write( i + " Your have obtain a score below 90 or equal to 80. Your ranking is " + ranking + " You gooood bro! <br>" );
//   } else if (i <= 80 && i > 70) {
//     ranking = "C";
//       document.write( i + " Your have obtain a score below 80 or equal to 70. Your ranking is " + ranking + " You can go higher bro! I believe in YOU <br>");
//   } else if (i <= 70 && i > 60) {
//     ranking = "D";
//       document.write( i + " Your have obtain a score below 70 or equal to 60. Your ranking is " + ranking + " You can go even higher bro! I believe in YOUand I will not stop believing in YOUUUUUU <br>");
//   }
// }

//Exercice : pyramide
var rows = 5;
for (var i = 1; i <= rows; i++) {
  for (var j = 1; j <= i; j++) {
      document.write("* ");
  }
  document.write("<br/>");
  // <br/> is used to pushe the content down to the next line.
}
