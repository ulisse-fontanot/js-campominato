// CREO UN Array
// PUSHO 20 NUMERI RANDOM DENTRO Array

// numeriUtente = ['']
// for (i = 0 ; i < 16 ; i++){
//   ;
// }

// NEL CASO DI + DOPPIONI CONSECUTIVI PERDO NUMERI GENERATI
//QUINDI FOR SCONSIGLIATO
// for (i = 0 ; i < 16 ; i++){
//   // parametri obbligatori da definire per il ciclo
//   var numero = generaRandom(1,20);
//   if (numeriRandom.includes(numero) == false){
//    numeriRandom.push(numero);
//   }
//
// }

// ARRAY
numeriRandom = [];
numeriUtente = [];

// CON WHILE GENERA NUMERI FINCHE L'ARRAY NON ARRIVA A 16 DI L
// = 16 NUMERI GARANTITI SENZA DOPPIONI
while (numeriRandom.length < 16){
  // parametri obbligatori da definire per il ciclo
  // scelta parametri funzione
   var numero = generaRandom(1,50);
  // condizione per cui pusho o no il numero nell'array
  // false pusho nell'array
   if (numeriRandom.includes(numero) == false){
  // true non pusho nell'array
    numeriRandom.push(numero);
  }
}

console.log(numeriRandom);

// PROVARE A TRASFORMARLO IN UNA FUNZIONE, è indifferente utilizzare for/while i quanto utilizzo il return per bloccare il ciclo

// viene inserita la variabile sentinella per fare in modo che quando l'utente aggiunge 2 numeri uguali, perde, la sentinella dunque è una condizione da aggiungere al while.

// dichiariamo la sentinella con il valore true
var sentinella = true;

// inseriamo && (e non ||), perchè fino a quando entrambe le condizioni sono vere il while continua. (se mettiamo ||, e come test inseriamo i primi 2 numeri uguali, il while continua a chiedere di inserire fino a che non raggiungiamo la lunghezza indicata nella condizione)
while (numeriUtente.length < 5 && sentinella == true ) {
    var n = parseInt(prompt("inserisci i 16 numeri"));


    if (numeriUtente.includes(n) == false) {
      numeriUtente.push(n);
    } else {
      alert('hai perso');
      // nel caso in cui l'utente inserisce 2 numeri uguali, diciamo alla sentinella di cambiare il valore in false, ciò collide con la condizione inserita nel while e ferma il 'ciclo' while
      sentinella = false;
    }
}
console.log(numeriUtente);

// FUNZIONE
// min e max compresi
function generaRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
