/* Tee funktio askToContinue, joka 
1. Kysyy käyttäjältä yhtä numeroa. 
2. Tämän jälkeen ohjelma kysyy: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
3. Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. 
4. Jos vastaus on 'e', ohjelma lopettaa. 
5. Lopetettuaan ohjelma laskee ja näyttää konsolissa kaikkien syötettyjen numeroiden keskiarvon.*/

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.

const askToContinue = () => {
  let summa = 0;
  let counter = 0;

  while (true) {
    let numero = parseFloat(prompt("Syötä numero:"));

    if (isNaN(numero)) {
      continue;
    }

    summa += numero;
    counter++;

    let answer = "";

    while (answer !== "k" && answer !== "e") {
      answer = prompt(
        "Haluatko jatkaa numeroiden antamista? (k/e)"
      ).toLowerCase();
    }

    if (answer === "e") {
      break;
    }
  }

  if (counter > 0) {
    alert("Numeroiden keskiarvo: " + (summa / counter).toFixed(2));
  } else {
    alert("Et syöttänyt yhtään numeroa.");
  }
};

askToContinue();
