/* Luo muuttuja nimeltä phrase ja anna sille arvoksi "JavaScript is versatile and powerful."
Käytä .includes()-menetelmää tarkistaaksesi, sisältääkö merkkijono sanan "powerful".
Tulosta tulos käyttäen console.log().

Esimerkkituloste:
"Does the phrase include 'powerful'? true"
*/

let phrase = "JavaScript is versatile and powerful.";

let containsPowerful = phrase.includes("powerful");

console.log(`Does the phrase include 'powerful'? ${containsPowerful}`);
