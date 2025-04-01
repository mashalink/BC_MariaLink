/* Luo funktio nimeltä isEven, joka:
Ottaa yhden parametrin, num.
Palauttaa true, jos num on parillinen, muuten palauttaa false.
Kutsu funktiota arvoilla 4 ja 7.
Tulosta tulokset käyttäen console.log().

Bonus: Muokkaa funktiota käyttämään implisiittistä palautusta.
*/

const isEven = (num) => num % 2 === 0;

let num = Math.floor(Math.random() * 10);
console.log(num);
console.log(isEven(num));
