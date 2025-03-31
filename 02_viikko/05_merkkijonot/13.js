/* Luo muuttuja nimeltä description ja anna sille arvoksi " JavaScript is Fun and powerful! ".
Tee seuraavat toimenpiteet:
- Poista ylimääräiset välilyönnit käyttäen .trim().
- Muunna merkkijono pieniksi kirjaimiksi.
- Tarkista, sisältääkö se sanan "fun".
- Korvaa "powerful" sanalla "amazing".
- Tulosta lopullinen merkkijono ja tieto siitä, sisältääkö se sanan "fun" käyttäen console.log().

Esimerkkituloste:
"Final description: javascript is fun and amazing!"
"Does it include 'fun'? true"
*/

let description = " JavaScript is Fun and powerful! ";
let clearSmallReplaceDescription = description
  .trim()
  .toLowerCase()
  .replace("powerful", "amazing");

console.log(`Final description: ${clearSmallReplaceDescription}\n`);
console.log(
  `Does it include 'fun'? ${clearSmallReplaceDescription.includes("fun")}`
);
