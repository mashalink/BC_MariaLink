// Määrittele funktio, joka muuntaa lämpötilan Fahrenheit-asteista Celsius-asteiksi.

// Tämä funktio käyttää kaavaa (Fahrenheit - 32) * 5/9

// Saatu lämpötila pyöristetään yhteen desimaaliin tarkkuuden vuoksi.

function fahrenheitToCelsius(fahrenheit) {
  // Muunnetaan Fahrenheit Celsius-asteiksi käyttäen kaavaa
  let celsius = ((fahrenheit - 32) * 5) / 9;

  // Pyöristetään tulos yhteen desimaaliin
  return celsius.toFixed(1);
}

// Esimerkki - älä muokkaa
console.log(fahrenheitToCelsius(21)); // haluttu tulos: "-6,1"
