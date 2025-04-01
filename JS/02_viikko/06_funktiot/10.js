/* Luo funktio nimeltä cleanAndTransform, joka:
Ottaa yhden parametrin, str.
Poistaa ylimääräiset välilyönnit, muuntaa merkkijonon pieniksi kirjaimiksi ja korvaa sanan "powerful" sanalla "amazing".
Palauttaa muunnetun merkkijonon.
Kutsu funktiota merkkijonolla " JavaScript is powerful! ".
Tulosta tulos käyttäen console.log().
*/

const cleanAndTransform = (str) =>
  str.trim().toLowerCase().replace("powerful", "amazing");

console.log(cleanAndTransform(" JavaScript is powerful! "));
