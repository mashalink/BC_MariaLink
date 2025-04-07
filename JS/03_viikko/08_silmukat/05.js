// Tee funktio calculateAverageUntilZero, joka pyytää käyttäjää syöttämään numeroita,
// kunnes käyttäjä syöttää 0.
// Tässä vaiheessa ohjelma lopettaa toimintansa.
// Lopetettuaan ohjelman tulisi laskea ja näyttää konsolissa kaikkien syötettyjen
// numeroiden keskiarvo.

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.

const calculateAverageUntilZero = () => {
  let summa = 0;
  let counter = 0;
  while (true) {
    let numero = parseFloat(prompt("Syötä numero (0 lopettaa):"));
    if (numero == 0) break;
    if (isNaN(numero)) {
      continue;
    } else {
      summa += numero;
      counter++;
    }
  }
  alert("Numeroiden keskiarvo " + summa / counter);
};

calculateAverageUntilZero();
