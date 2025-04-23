// Harjoitus 1: Määritä taulukon pituus ja tarkista ehto
console.log(`Harjoitus 1:\n`);
let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];
/*
Luo funktio nimeltä myAlphabetLength, joka tulostaa myAlphabet-taulukon pituuden.
Jos pituus on 5 tai enemmän, tulosta: "Taulukon pituus on riittävä".
Muussa tapauksessa tulosta: "Taulukon pituus on liian lyhyt."
*/

const myAlphabetLength = () => {
  console.log(
    myAlphabet.length >= 5
      ? "Taulukon pituus on riittävä."
      : "Taulukon pituus on liian lyhyt."
  );
};

myAlphabetLength();

// Harjoitus 2: Käy läpi planets-taulukko ja tulosta jokainen planeetta ja sen indeksi
console.log(`\nHarjoitus 2:\n`);
const planets = ["Merkurius", "Venus", "Maa", "Mars", "Jupiter"];
/*
Tulosta jokainen planeetta planets-taulukosta ja sen indeksi.
Odotettu tulos:
"Planeetta: Merkurius, Indeksi: 0"
...
"Planeetta: Jupiter, Indeksi: 4"
*/

const printPlanetsWithIndex = () => {
  planets.forEach((planet, index) => {
    console.log(`Planeetta: ${planet}, Indeksi: ${index}`);
  });
};

printPlanetsWithIndex();

// Harjoitus 3: Tulosta taulukon alkioiden tyypit käyttäen mixedValues-taulukkoa
console.log(`\nHarjoitus 3:\n`);
const mixedValues = [42, "Heippa", true, { nimi: "Kettu" }, null, undefined];

/*
Käy läpi mixedValues-taulukko ja tulosta jokainen alkio, sen indeksi ja tietotyyppi.
Odotettu tulos:
"Alkio: 42, Indeksi: 0, Tyyppi: number"
...
"Alkio: undefined, Indeksi: 5, Tyyppi: undefined"
*/

const printMixedValues = () => {
  mixedValues.forEach((element, index) => {
    console.log(
      `Alkio: ${element}, Indeksi: ${index}, Tyyppi: ${typeof element}.`
    );
  });
};

printMixedValues();

// Harjoitus 4: Tulosta jokainen myArr-taulukon alkio ilman silmukkaa
console.log(`\nHarjoitus 4:\n`);
let myArr = [1, "Koira", 3.14, false];

/*
Tulosta jokainen alkio myArr-taulukosta ilman silmukan käyttöä.
Odotettu tulos: 1, "Koira", 3.14, false
*/

const printArray = () => {
  console.log(myArr.join(", "));
};

printArray();

// Harjoitus 5: Etsi yleiset eläinlajit elainvarasto1 ja elainvarasto2 taulukoista
console.log(`\nHarjoitus 5:\n`);
let elainvarasto1 = ["Kettu", "Peura", "Pöllö", "Karhu"];
let elainvarasto2 = ["Karhu", "Susi", "Kotka", "Kettu"];

/*
Tunnista ja tulosta eläinlajit, jotka löytyvät molemmista taulukoista.
Odotettu tulos:
"Yhteinen laji: Kettu"
"Yhteinen laji: Karhu"
*/

const commonSpecies = elainvarasto1.filter((animal) =>
  elainvarasto2.includes(animal)
);

commonSpecies.forEach((animal) => {
  console.log(`Common species: ${animal}`);
});

// Harjoitus 6: Tulosta jokaisen eläinnimen kirjaimet animalNames-taulukosta
console.log(`\nHarjoitus 6:\n`);
let animalNames = ["Leijona", "Tiikeri", "Panda"];

/*
Tulosta jokaisen animalNames-taulukon alkion kaikki kirjaimet.
Odotettu tulos:
"Kirjaimet sanassa 'Leijona': L, e, i, j, o, n, a"
...
"Kirjaimet sanassa 'Panda': P, a, n, d, a"
*/

const wordByLetter = () => {
  for (const animalName of animalNames) {
    console.log(
      `Kirjaimet sanassa '${animalName}': ${[...animalName].join(", ")}`
    );
  }
};

wordByLetter();
// Harjoitus 7: Suodata vain positiiviset lämpötilat temperatures-taulukosta
console.log(`\nHarjoitus 7:\n`);
let temperatures = [-10, 5, -3, 15, -8, 20, 2];

/*
Suodata ja tulosta vain positiiviset arvot temperatures-taulukosta.
Odotettu tulos: [5, 15, 20, 2]
*/
/*
Kirjoita funktio getPositiveTemperatures, joka palauttaa uuden taulukon,
joka sisältää vain lämpötilat, jotka ovat suurempia kuin 0 temperatures-taulukosta.
Odotettu tulos: [5, 15, 20, 2]
*/

const getPositiveTemperatures = () => {
  let positiveTemperatures = temperatures.filter(
    (temperature) => temperature > 0
  );
  return positiveTemperatures;
};

console.log(getPositiveTemperatures().join(", "));
// Harjoitus 8: Etsi "Kettu":n indeksi zooAnimals-taulukosta
console.log(`\nHarjoitus 8:\n`);
let zooAnimals = ["Elefantti", "Kirahvi", "Panda", "Kettu", "Kenguru"];

/*
Etsi ja tallenna "Fox":n indeksi zooAnimals-taulukosta.
Odotettu tulos: "Fox:n indeksi: 3"
*/

const findAnimalIndex = (str) => {
  if (zooAnimals.indexOf(str) != -1)
    console.log(`${str}:n indeksi: ${zooAnimals.indexOf(str)}`);
  else console.log(`${str} ei ole eläintarhassa.`);
};

findAnimalIndex("Kettu");

// Harjoitus 9: Yritä etsiä eläin, jota ei ole zooAnimals-taulukossa
console.log(`\nHarjoitus 9:\n`);
/*
Etsi "Pingviini":n indeksi zooAnimals-taulukosta.
Jos sitä ei löydy, tulosta "Pingviini ei ole eläintarhassa."
Odotettu tulos: -1
*/
findAnimalIndex("Pingviini");

// Harjoitus 10: Korvaa "Kirahvi" sanalla "Alpakka" zooAnimals-taulukossa
console.log(`\nHarjoitus 10:\n`);
let notSafariAnimals = ["Elefantti", "Kirahvi", "Panda", "Kettu", "Kenguru"];

/*
Odotettu tulos: ["Elefantti", "Alpakka", "Panda", "Kettu", "Kenguru"]
*/

notSafariAnimals.splice(notSafariAnimals.indexOf("Kirahvi"), 1, "Alpakka");
console.log(`${notSafariAnimals.join(", ")}`);

// Harjoitus 11: Lajittele safariAnimals-taulukko aakkosjärjestykseen
console.log(`\nHarjoitus 11:\n`);
let safariAnimals = ["Zeebra", "Leopardi", "Elefantti", "Gazelli"];

/*
Odotettu tulos: ['Elefantti', 'Gazelli', 'Leopardi', 'Zeebra']
*/
console.log(`${safariAnimals.sort().join(", ")}`);

// Harjoitus 12: Käännä safariAnimals-taulukon järjestys
console.log(`\nHarjoitus 12:\n`);
/*
Käännä safariAnimals-taulukon järjestys päinvastaiseksi.
Odotettu tulos: ['Zeebra', 'Leopardi', 'Gazelli', 'Elefantti']
*/
console.log(`${safariAnimals.reverse().join(", ")}`);

// Harjoitus 13: Tarkista sisältääkö zooAnimals "Tiikeri":n
console.log(`\nHarjoitus 13:\n`);
/*
Odotettu tulos:
true (jos sisältää)
false (jos ei sisällä)
*/

console.log(zooAnimals.some((animal) => animal === "Tiikeri"));

// Harjoitus 14: Etsi kaikki "Jonna":n esiintymät attendees-taulukossa
console.log(`\nHarjoitus 14:\n`);
let attendees = ["Jonna", "Santtu", "Jonna", "Alex", "Jonna"];

/*
Etsi kaikki kohdat, joissa "Jonna" esiintyy attendees-taulukossa.
Odotettu tulos: [0, 2, 4]
*/
let allJonnaIndexes = attendees
  .map((name, index) => (name === "Jonna" ? index : -1))
  .filter((index) => index !== -1);

console.log(allJonnaIndexes);

// Harjoitus 15: Muunna kaikki attendees-taulukon nimet isoiksi kirjaimiksi
console.log(`\nHarjoitus 15:\n`);
/*
Luo uusi taulukko, jossa jokainen attendees-taulukon nimi on kirjoitettu isoilla kirjaimilla.
Odotettu tulos: ['JONNA', 'SANTTU', 'JONNA', 'ALEX', 'JONNA']
*/
let capitalizedNames = attendees.map((name) => name.toUpperCase());
console.log(`${capitalizedNames.join(", ")}`);

// Harjoitus 16: Yhdistä forestAnimals- ja farmAnimals-taulukot
console.log(`\nHarjoitus 16:\n`);
let forestAnimals = ["Peura", "Karhu", "Susi"];
let farmAnimals = ["Hevonen", "Lammas", "Vuohi"];

/*
Yhdistä forestAnimals ja farmAnimals uuteen taulukkoon.
Odotettu tulos: ["Peura", "Karhu", "Susi", "Hevonen", "Lammas", "Vuohi"]
*/
const allAnimals = forestAnimals.concat(farmAnimals);
console.log(`${allAnimals.join(", ")}`);

// Harjoitus 17: Poista ensimmäinen ja viimeinen alkio birdSpecies-taulukosta
console.log(`\nHarjoitus 17:\n`);
let birdSpecies = ["Kotka", "Pöllö", "Haukka", "Pääsky", "Pingviini"];

/*
Odotettu tulos: ['Pöllö', 'Haukka', 'Pääsky']
*/

birdSpecies.pop();
birdSpecies.shift();
console.log(`${birdSpecies.join(", ")}`);

// Harjoitus 18: Käytä `splice`:a poistaaksesi ja korvataksesi arvoja numbers-taulukossa
console.log(`\nHarjoitus 18:\n`);
let numbers = [10, 20, 30, 40, 50];

/*
Käytä splice-metodia poistamaan "30" ja korvaamaan se arvoilla "25" ja "27".
Odotettu tulos: [10, 20, 25, 27, 40, 50]
*/
numbers.splice(numbers.indexOf(30), 1, 25, 27);
console.log(numbers.join(", "));

// Harjoitus 19: Korota jokaista hintaa 10 % käyttäen `map`-metodia
console.log(`\nHarjoitus 19:\n`);
let prices = [5, 10, 15, 20];

/*
Luo uusi taulukko, jossa jokainen hinta on kasvatettu 10 %.
Odotettu tulos: [5.5, 11, 16.5, 22]
*/
let newPrices = prices.map((price) => price * 1.1);
console.log(newPrices.join(", "));

// Harjoitus 20: Suodata `filter`:in avulla sanat, jotka ovat pidempiä kuin 5 kirjainta
console.log(`\nHarjoitus 20:\n`);
let words = ["omena", "banaani", "kirsikka", "kiivi", "mansikka"];

/*
Luo uusi taulukko, joka sisältää vain sanat, joissa on yli 5 kirjainta words-taulukosta.
Odotettu tulos: ['banaani', 'kirsikka', 'mansikka']
*/
const allLonger5 = words.filter((name) => name.length > 5);
console.log(allLonger5);
