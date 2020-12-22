var numeriComputer = [];
var numeriUtente = [];
var controllo = true;
var difficolta = prompt("scegli la difficoltà");

// while (controllo == true ){
//   var difficolta = prompt("scegli la difficoltà");
//   if (difficolta != "facile" || difficolta != "medio" || difficolta != "difficile") {
//     controllo = false;
//   }
// }

switch (difficolta) {
  // --------------FACILE------------
  case "facile":
    // ------NUMERI DEL COMPUTER-------
    while (numeriComputer.length < 16) {
      var listaNumeri = numeri(1,100);
      if (numeriComputer.includes(listaNumeri) == false){
        numeriComputer.push(listaNumeri);
      }
    }

    // ------NUMERI DEL UTENTE-------
    var sentinella = true;

    while (numeriUtente.length < 84 && sentinella == true ) {
      var n = parseInt(prompt("inserisci i numeri"));
      if (numeriUtente.includes(n) == false) {
        numeriUtente.push(n);
      } else {
        alert('hai messo lo stesso numero!');
        sentinella = false;
      }
        if (numeriComputer.includes(n) == true) {
        alert('hai perso');
        sentinella = false;
      }
    }
  break;

  // --------------MEDIO------------
  case "medio":
    // ------NUMERI DEL COMPUTER-------
    while (numeriComputer.length < 16) {
      var listaNumeri = numeri(1,80);
      if (numeriComputer.includes(listaNumeri) == false){
        numeriComputer.push(listaNumeri);
      }
    }

    // ------NUMERI DEL UTENTE-------
    var sentinella = true;

    while (numeriUtente.length < 64 && sentinella == true ) {
      var n = parseInt(prompt("inserisci i numeri"));
      if (numeriUtente.includes(n) == false) {
        numeriUtente.push(n);
      } else {
        alert('hai messo lo stesso numero!');
        sentinella = false;
      }
        if (numeriComputer.includes(n) == true) {
        alert('hai perso');
        sentinella = false;
      }
    }
  break;

  // --------------DIFFICILE------------
  case "difficile":
    // ------NUMERI DEL COMPUTER-------
    while (numeriComputer.length < 16) {
      var listaNumeri = numeri(1,50);
      if (numeriComputer.includes(listaNumeri) == false){
        numeriComputer.push(listaNumeri);
      }
    }

    // ------NUMERI DEL UTENTE-------
    var sentinella = true;

    while (numeriUtente.length < 34 && sentinella == true ) {
      var n = parseInt(prompt("inserisci i numeri"));
      if (numeriUtente.includes(n) == false) {
        numeriUtente.push(n);
      } else {
        alert('hai messo lo stesso numero!');
        sentinella = false;
      }
        if (numeriComputer.includes(n) == true) {
        alert('hai perso');
        sentinella = false;
      }
    }
  break;

  default:
    text = "scegli una modalità"
}



console.log("i numeri del computer: " + numeriComputer);
console.log("i tuoi tentativi: " + numeriUtente);
console.log("hai evitato la bomba " + numeriUtente.length + " volte");

// ------------FUNZIONI-----------
function numeri(min,max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
