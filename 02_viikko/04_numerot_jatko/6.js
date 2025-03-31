/* 
Luo kaksi muuttujaa:
numString1 arvolla "42".
numString2 arvolla "3.14".
Käytä parseInt()-funktiota muuntaaksesi numString1 kokonaisluvuksi.
Käytä parseFloat()-funktiota muuntaaksesi numString2 liukuluvuksi.
Tulosta tulokset käyttäen console.log() viestien kera:
"Kokonaisluku on 42."
"Liukuluku on 3.14."
*/

let numString1 = 42;
let numString2 = 3.14;

let kokonaisluvuksi = parseInt(numString1);
let liukuluvuksi = parseFloat(numString2);

console.log("Kokonaisluku on", kokonaisluvuksi);
console.log("Liukuluku on", liukuluvuksi);
