/* Tehtävä 1
Luo JavaScript-olio nimeltä `student`, jolla on ominaisuudet:
- `name`
- `age`
- `grade`
Muunna olio JSON-merkkijonoksi ja tulosta se konsoliin.
*/

const student = { name: "Anna", age: 32, grade: 87 };

const jsonString = JSON.stringify(student);
console.log(jsonString);

/* Tehtävä 2
Ota Tehtävä 1:ssä luotu JSON-merkkijono ja muunna se takaisin JavaScript-olioksi.
Tulosta muunnetun olion `name`-ominaisuus.
*/

const personObject = JSON.parse(jsonString);
console.log(`${personObject.name}`);

/* Tehtävä 3
Luo taulukko nimeltä `classroom`, jossa jokainen alkio on opiskelijaa kuvaava olio.
Jokaisella opiskelijaoliolla tulee olla ominaisuudet `name`, `age` ja `grade`.
Muunna taulukko JSON-merkkijonoksi ja tulosta se konsoliin.
*/

const classroom = [
  { name: "Anna", age: 16, grade: 78 },
  { name: "Mikko", age: 17, grade: 92 },
  { name: "Laura", age: 15, grade: 84 },
  { name: "Janne", age: 16, grade: 63 },
];

const jsonStringStudents = JSON.stringify(classroom);
console.log(jsonStringStudents);

/* Tehtävä 4
Ota Tehtävä 3:ssa luotu JSON-merkkijono, muunna se takaisin JavaScript-taulukoksi
ja tulosta kaikkien opiskelijoiden nimet.
*/

const studentsObject = JSON.parse(jsonStringStudents);
studentsObject.forEach((student) => {
  console.log(`${student.name}`);
});

/* Tehtävä 5
Luo olio nimeltä `weatherReport`, jossa on seuraavat ominaisuudet:
- `temperature`
- `humidity`
- `conditions` (esim. "Sunny", "Rainy")

Muunna olio JSON-merkkijonoksi ja tallenna se muuttujaan `weatherJSON`.
Sen jälkeen pura JSON takaisin olioksi ja tulosta `conditions`-ominaisuus.
*/

const weatherReport = {
  temperature: 22,
  humidity: 55,
  conditions: "Sunny",
};

const jsonStringWeater = JSON.stringify(weatherReport);
console.log(jsonStringWeater);

const weatherObject = JSON.parse(jsonStringWeater);
console.log(weatherObject.conditions);

/* Tehtävä 6
Määrittele taulukko nimeltä `movies`, jossa jokaisella elokuvalla on:
- `title`
- `director`
- `rating`

Muunna tämä taulukko JSON-merkkijonoksi ja pura se takaisin JavaScript-olioksi.
Tulosta kaikki elokuvien nimet, joiden arvosana on yli 8.
*/

const movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    rating: 8.8,
  },
  {
    title: "The Matrix",
    director: "Lana and Lilly Wachowski",
    rating: 8.7,
  },
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    rating: 9.3,
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    rating: 8.6,
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    rating: 8.9,
  },
];

const jsonStringMovies = JSON.stringify(movies);
console.log(jsonStringMovies);

const moviesObject = JSON.parse(jsonStringMovies);
moviesObject.forEach((movie) => {
  if (movie.rating > 8) {
    console.log(movie.title);
  }
});

/* Tehtävä 7
Kirjoita funktio `filterHighRatedMovies(jsonString)`, joka:
- Ottaa vastaan JSON-merkkijonon, joka edustaa elokuvataulukkoa.
- Muuntaa sen JavaScript-taulukoksi.
- Palauttaa uuden taulukon, joka sisältää vain elokuvat, joiden arvosana on yli 8.
*/

const filterHighRatedMovies = (jsonString) => {
  const moviesObject = JSON.parse(jsonString);
  return moviesObject.filter((movie) => movie.rating > 8);
};

const newListMovies = filterHighRatedMovies(jsonStringMovies);
console.log(newListMovies);

/* Tehtävä 8
Määrittele olio nimeltä `shoppingCart`, jossa on:
- `items` (taulukko tuotteista, jokaisella on `name` ja `price`)
Muunna `shoppingCart` JSON-merkkijonoksi ja tulosta se konsoliin.
*/

shoppingCart = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 800 },
  { name: "Headphones", price: 150 },
  { name: "Keyboard", price: 100 },
];

const shoppingCartString = JSON.stringify(shoppingCart);
console.log(shoppingCartString);

/* Tehtävä 9
Kirjoita funktio `totalCartValue(jsonString)`, joka:
- Saa parametrina ostoskorin JSON-merkkijonon.
- Muuntaa sen JavaScript-olioksi.
- Palauttaa ostoskorin kaikkien tuotteiden yhteenlasketun hinnan.
*/

const totalCartValue = (jsonString) => {
  const productsObject = JSON.parse(jsonString);
  return productsObject.reduce((total, product) => total + product.price, 0);
};

console.log(totalCartValue(shoppingCartString));

/* Tehtävä 10
Luo olio nimeltä `gameProgress`, jossa on:
- `level`
- `score`
- `livesRemaining`

Muunna olio JSON-merkkijonoksi ja tulosta se.
Pura JSON takaisin olioksi ja päivitä `score`-ominaisuutta lisäämällä siihen 100 pistettä.
Tulosta päivitetty olio.
*/

const gameProgress = {
  level: 5,
  score: 1250,
  livesRemaining: 3,
};

const gameProgressString = JSON.stringify(gameProgress);
console.log(gameProgressString);

const gameProgressObject = JSON.parse(gameProgressString);
gameProgressObject.score += 100;
console.log(gameProgressObject);
