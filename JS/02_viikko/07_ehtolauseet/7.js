/* 
Kirjoita funktio nimeltä getAnimalDescription:
Ota parametri favoriteAnimal.

Käytä switch-rakennetta seuraavasti:
- Jos "fox", palauta "Ketut ovat viekkaita ja fiksuja!"
- Jos "dog", palauta "Koirat ovat uskollisia ystäviä."
- Jos "cat", palauta "Kissat ovat kiinnostuneita ja itsenäisiä."

Minkä tahansa muun eläimen kohdalla palauta "Kaikki eläimet ovat mahtavia!"
Kutsu funktiota eri eläinnimillä.
*/

const getAnimalDescription = (favoriteAnimal) => {
  switch (favoriteAnimal) {
    case "fox":
      return "Ketut ovat viekkaita ja fiksuja!";
    case "dog":
      return "Koirat ovat uskollisia ystäviä.";
    case "cat":
      return "Kissat ovat kiinnostuneita ja itsenäisiä.";
    default:
      return "Kaikki eläimet ovat mahtavia!";
  }
};

console.log(getAnimalDescription("fox"));
console.log(getAnimalDescription("dog"));
console.log(getAnimalDescription("cat"));
console.log(getAnimalDescription("panda"));
