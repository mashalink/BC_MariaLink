/* 
1. Luo muuttuja num ja aseta sille arvoksi 5.67.
2. Käytä Math.round() metodia sen pyöristämiseen lähimpään kokonaislukuun. 
3. Käytä Math.floor() metodia sen pyöristämiseen alaspäin edelliseen lähimpään kokonaislukuun.
4. Käytä Math.ceil() metodia sen pyöristämiseen ylöspäin seuraavaan lähimpään kokonaislukuun.
5. Tulosta kaikki saamasi tulokset console.log() avulla ja lisää jokaiselle selittävät teksti.
*/

let num = 5.67;

console.log("Pyöristys lähimpään kokonaislukuun", Math.round(num));
console.log("Pyöristämällä alaspäin lähimpään kokonaislukuun", Math.floor(num));
console.log("Pyöristämällä ylöspäin lähimpään kokonaislukuun", Math.ceil(num));
