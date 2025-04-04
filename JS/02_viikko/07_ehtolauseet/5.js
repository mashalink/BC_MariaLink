/* 
Kirjoita funktio nimeltä checkAnimal:
Ota parametri animalType.

Käytä ternary operatoria palauttamaan:
- "Sinulla on fiksu seuralainen!" jos animalType on "fox".
- "Ei kettu, mutta silti kiva!" muussa tapauksessa.

Kutsu funktiota arvoilla kuten "fox" ja "cat".
*/
const animalType = (type) =>
  type == "fox"
    ? "Sinulla on fiksu seuralainen!"
    : "Ei kettu, mutta silti kiva!";

console.log(animalType("fox"));
console.log(animalType("cat"));
