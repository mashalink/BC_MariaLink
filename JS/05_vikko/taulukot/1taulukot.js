// Alkuperäinen data:
// let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade'];

let teamMembers = ["Joni", "Emilia", "Mikko", "Sade"];

// 1. Käy `teamMembers`-taulukko läpi ja tulosta jokainen nimi konsoliin.

for (const member of teamMembers) {
  console.log(`${member}`);
}

// 2. Poista taulukon ensimmäinen jäsen.

teamMembers.shift();
console.log(`${teamMembers.join(", ")}`);

// 3. Poista taulukon viimeinen jäsen.

teamMembers.pop();
console.log(`${teamMembers.join(", ")}`);

// 4. Lisää uusi jäsen "Alex" taulukon alkuun.

teamMembers.unshift("Alex");
console.log(`${teamMembers.join(", ")}`);

// 5. Lisää uusi jäsen "Linda" taulukon loppuun.

teamMembers.push("Linda");
console.log(`${teamMembers.join(", ")}`);

// 6. Luo uusi taulukko, joka ei sisällä kahta ensimmäistä jäsentä ja jätä alkuperäinen muuttumattomaksi.

let newTeamMembers = teamMembers.slice(2, 4);
console.log(`${newTeamMembers.join(", ")}`);
console.log(`${teamMembers.join(", ")}`);

// 7. Etsi "Mikko":n indeksi taulukossa.

console.log(`${teamMembers.indexOf("Mikko")}`);

// 8. Yritä etsiä "Jake":n indeksi (ei ole taulukossa).

console.log(`${teamMembers.indexOf("Jake")}`);

// 9. Korvaa "Mikko" kahdella uudella jäsenellä: "Maria" ja "Netta".

teamMembers.splice(teamMembers.indexOf("Mikko"), 1, "Maria", "Netta");
console.log(`${teamMembers.join(", ")}`);

// 10. Liitä "Ahmad" taulukkoon ja tallenna tulos uuteen taulukkoon, alkuperäistä muuttamatta.

let new_2TeamMembers = [...teamMembers, "Ahmad"];
console.log(`${new_2TeamMembers.join(", ")}`);
console.log(`${teamMembers.join(", ")}`);

// 11. Kopioi koko `teamMembers`-taulukko `slice`-metodilla ja tallenna se uuteen muuttujaan.

let copyTeamMembers = teamMembers.slice(0, teamMembers.length + 1);
console.log(`${copyTeamMembers.join(", ")}`);
console.log(`${teamMembers.join(", ")}`);

// 12. Luo `newMembers`-taulukko, jossa on "Tiina" ja "Myrsky", ja yhdistä se `teamMembers`-taulukkoon uuteen taulukkoon.

let new_3TeamMembers = ["Tiina", "Myrsky"];
let newFromTwo = teamMembers.concat(new_3TeamMembers);

console.log(`${newFromTwo.join(", ")}`);

// 13. Etsi kaikki "Joni":in esiintymät ja tallenna niiden indeksit uuteen taulukkoon.

let allJoniIndexes = teamMembers
  .map((name, index) => (name === "Joni" ? index : -1))
  .filter((index) => index !== -1);

console.log(allJoniIndexes);

// 14. Muunna kaikki nimet taulukossa isoiksi kirjaimiksi, muuttamatta alkuperäistä taulukkoa.

let capitalizedNames = teamMembers.map((name) => name.toUpperCase());
console.log(`${capitalizedNames.join(", ")}`);

// 15. Lajittele `teamMembers` aakkosjärjestykseen.

console.log(`${teamMembers.sort().join(", ")}`);

// 16. Käännä `teamMembers`-taulukon järjestys päinvastaiseksi.

teamMembers.reverse();
console.log(`${teamMembers.join(", ")}`);

// 17. Tarkista, onko ainakin yksi jäsen nimeltään "Joni".

const someJoni = teamMembers.some((name) => name === "Joni");
console.log(`${someJoni}`);

// 18. Tarkista, onko kaikilla nimillä yli kolme kirjainta.

const allLonger2 = teamMembers.every((name) => name.length > 2);
console.log(allLonger3);
