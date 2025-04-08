/* 
Kirjota funktio nimeltä findMinMax:
- Kysy käyttäjältä kuinka monta numeroa he haluavat antaa. 
- Sen jälkeen pyydä käyttäjältä heidän haluamansa määrä numeroita. 
- Kun numerot on syötetty päättele ja tulosta konsoliin:
    - Pienin numero.
    - Suurin numero. 
*/

const findMinMax = () => {
  let min = null,
    max = null;

  let numero = parseFloat(prompt("Kuinka monta numeroa haluat antaa?"));

  while (isNaN(numero) || numero <= 0) {
    numero = parseFloat(prompt("Kuinka monta numeroa haluat antaa?"));
  }

  for (i = 0; i < numero; i++) {
    let numero = parseFloat(prompt("Syötä numero:"));

    while (isNaN(numero)) {
      numero = parseFloat(prompt("Syötä numero:"));
    }
    if (min === null || numero < min) min = numero;
    if (max === null || numero > max) max = numero;
  }
  alert("Pienin numero on: " + min + "\nSuurin numero on: " + max);
};

findMinMax();
