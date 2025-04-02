/* 
Kirjoita funktio nimeltä checkForFox:
Ota looginen parametri hasFox.
Jos hasFox on tosi, palauta "Sinulla on lemmikkikettu!"
Muussa tapauksessa palauta "Ei havaittu kettua!"
Kutsu funktiota arvoilla true ja false ja tulosta tulos.
*/

const checkForFox = (hasFox) =>
  hasFox ? "Sinulla on lemmikkikettu!" : "Ei havaittu kettua!";

console.log(checkForFox(true));
console.log(checkForFox(false));
