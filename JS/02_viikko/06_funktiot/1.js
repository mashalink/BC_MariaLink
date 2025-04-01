/* Luo funktio nimeltä add, joka:
Ottaa kaksi parametria, a ja b.
Palauttaa a:n ja b:n summan.
Kutsu funktiota arvoilla 10 ja 5.
Tulosta tulos käyttäen console.log().

Bonus: Kutsu funktiota useita kertoja eri argumenteilla ja tulosta kaikki tulokset.
*/

const add = (a, b) => a + b;

console.log(
  add(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100))
);
