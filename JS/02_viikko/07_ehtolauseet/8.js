/* 
Kirjoita funktio nimeltä canEat:
Ota kaksi parametria: isHungry ja hasFood.
Jos molemmat ovat tosi, palauta "Aika syödä!".
Jos jompikumpi on epätosi, palauta "Sinun täytyy löytää ruokaa!"
Kutsu funktiota eri isHungry ja hasFood yhdistelmillä.
*/

const canEat = (isHungry, hasFood) => {
  switch (true) {
    case isHungry && hasFood:
      return "Aika syödä!";
    default:
      return "Sinun täytyy löytää ruokaa!";
  }
};

console.log(canEat(true, true));
console.log(canEat(true, false));
console.log(canEat(false, true));
console.log(canEat(false, false));
