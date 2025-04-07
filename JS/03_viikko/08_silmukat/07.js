/* 
Kirjoita funktio nimeltä sumAndAverage:
- Pyydä käyttäjältä 10 numeroa
- Laske ja lokita konsoliin: 
    - Kaikkien numeroiden summa.
    - Annettujen numeroiden keskiarvo.
    - Suurin ja pienin numero
*/

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.

const sumAndAverage = () => {
  let summa = 0,
    counter = 0,
    min = null,
    max = null;

  for (let i = 1; i <= 10; i++) {
    let numero = parseFloat(prompt("Syötä numero:"));

    while (isNaN(numero)) {
      numero = parseFloat(prompt("Syötä numero:"));
    }

    summa += numero;
    counter++;
    if (min === null || numero < min) min = numero;
    if (max === null || numero > max) max = numero;
  }
  alert(
    "Summa: " +
      summa +
      ".\n" +
      "Keskiarvo: " +
      (summa / counter).toFixed(2) +
      ".\n" +
      "Suurin numero: " +
      max +
      ".\n" +
      "Pienin numero: " +
      min +
      ".\n"
  );
};

sumAndAverage();
