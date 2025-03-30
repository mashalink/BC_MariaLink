/** Tehtävä: Ostoskori
 * Kuvitellaan, että olet kehittämässä yksinkertaista verkkokauppasovellusta. Sinun tehtäväsi on luoda ohjelma, joka laskee ostoskorissa olevien tuotteiden yhteishinnan ja tulostaa sen.
 * - Määrittele muuttujat kullekin ostoskorissa olevalle tuotteelle ja niiden hinnoille.
 * - Laske tuotteiden yhteishinta ja tallenna se muuttujaan, esimerkiksi yhteishinta.
 * - Tulosta yhteishinta konsoliin.
 */

// Määritellään muuttujat kullekin ostoskorissa olevalle tuotteelle ja niiden hinnoille.
let tuote1 = 12.99; // Tuote 1 hinta
let tuote2 = 35.5; // Tuote 2 hinta
let tuote3 = 19.99; // Tuote 3 hinta

// Lasketaan tuotteiden yhteishinta ja tallennetaan se muuttujaan 'yhteishinta'.
let yhteishinta = tuote1 + tuote2 + tuote3;

// Tulostetaan yhteishinta konsoliin.
console.log(
  "Ostoskoriin kuuluvien tuotteiden yhteishinta on: " + yhteishinta + " €"
);
