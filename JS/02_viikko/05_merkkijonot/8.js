/* Luo muuttuja nimeltä sentence ja anna sille arvoksi "Learning JavaScript is fun!".
Käytä .substring()-menetelmää erottaaksesi sanan "JavaScript" lauseesta.
Tulosta erotettu sana käyttäen console.log().

Esimerkkituloste:
"Extracted word: JavaScript"
*/

let sentence = "Learning JavaScript is fun!";

let word = sentence.substring(9, 19);

console.log(`Extracted word: ${word}`);
