// Tee funktio countEvenNumbers, joka pyytää käyttäjää syöttämään 20 lukua.
// Kun kaikki luvut on syötetty, ohjelman tulisi näyttää konsolissa montako
// näistä luvuista on parillisia.

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.

const countEvenNumbers = () => {
  let parillisit = 0;
  for (let i = 1; i <= 20; i++) {
    let numero = parseFloat(prompt("Anna numero"));
    if (numero % 2 == 0) {
      parillisit++;
    }
  }
  alert(parillisit + " näistä luvuista on parillisia. ");
};

countEvenNumbers();
