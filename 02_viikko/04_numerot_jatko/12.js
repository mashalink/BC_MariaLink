/* 
1. Luo kolme muuttujaa: a = 12, b = 7 ja c = 20.
2. Käytä Math.max()-metodia löytääksesi suurimman luvun a:n, b:n ja c:n joukosta.
3. Käytä Math.min()-metodia löytääksesi pienimmän luvun niiden joukosta.
4. Tulosta tulokset käyttäen console.log():ää viestien kera, kuten:
"The largest number is 20."
"The smallest number is 7."
*/

let a = 12,
  b = 7,
  c = 20;

console.log("The largest number is", Math.max(a, b, c));
console.log("The smallest number is", Math.min(a, b, c));
