var numeriComputer = [];
var numeriUtente = [];


while (numeriComputer.length < 16) {
  var listaNumeri = numeri(1,100);
  if (numeriComputer.includes(listaNumeri) == false){
    numeriComputer.push(listaNumeri);
  }
}

var sentinella = true;

while (numeriUtente.length < 84 && sentinella == true ) {
    var n = parseInt(prompt("inserisci i 16 numeri"));

    if (numeriUtente.includes(n) == false) {
      numeriUtente.push(n);
    } else {
      alert('hai messo lo stesso numero!');
      sentinella = false;
    }

    if (numeriComputer.includes(n) == false) {
      alert('hai perso');
      sentinella = false;
    }
}

console.log(numeriComputer);
console.log(numeriUtente);

function numeri(min,max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
