/* 
Kirjoita funktio nimeltä isEven:
Ota parametrina luku.
Palauta true, jos luku on parillinen, tai false, jos se on pariton.
Kutsu funktiota luvuilla kuten 4 ja 7, ja tulosta "Numero on pariton!" tai "Numero on parillinen!" tuloksen perusteella.
*/

const isEven = (luku) =>
  luku % 2 == 0 ? "Numero on pariton!" : "Numero on parillinen!";

console.log(isEven(4));
console.log(isEven(7));
