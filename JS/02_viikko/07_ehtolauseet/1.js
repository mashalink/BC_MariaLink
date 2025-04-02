/* 
Kirjoita funktio nimeltä checkAdult:
Ota ikä parametrina.
Jos ikä on 18 tai enemmän, palauta "Olet aikuinen."
Muussa tapauksessa älä palauta mitään.
Kutsu funktiota eri ikäarvoilla ja tulosta tulos.
*/

const checkAdult = (age) => {
  if (age >= 18) {
    return "Olet aikuinen.";
  }
  return "";
};

console.log(checkAdult(Math.floor(Math.random() * 110)));
