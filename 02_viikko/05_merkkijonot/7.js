/* Luo muuttuja nimeltä greeting ja anna sille arvoksi "Hello, World!".
Muunna merkkijono:
Isoiksi kirjaimiksi käyttäen .toUpperCase().
Pieniksi kirjaimiksi käyttäen .toLowerCase().
Tulosta molemmat tulokset käyttäen console.log().
Esimerkkituloste:
"HELLO, WORLD!"
"hello, world!"
*/

let greeting = "Hello, World!";

let IsoGreeting = greeting.toUpperCase();
let PieneGreeting = greeting.toLowerCase();

console.log(IsoGreeting);
console.log(PieneGreeting);
