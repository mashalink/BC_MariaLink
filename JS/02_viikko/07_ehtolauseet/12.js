/* 
Kirjoita funktio nimeltä checkFoxLover:
Ota kaksi parametria: age ja likesFoxes.
Jos ikä on 18 tai enemmän:
Tarkista, onko likesFoxes tosi.
Jos on, palauta "Olet aikuinen, joka tykkää ketuista!"
Muussa tapauksessa palauta "Et ole kettufani, mutta se on ok!"
Kutsu funktiota eri ikä- ja mieltymysyhdistelmillä. Varmista, että ohjelma toimii halutulla tavalla. 
*/

const checkFoxLover = (age, likesFoxes) => {
  switch (true) {
    case age >= 18 && likesFoxes:
      return "Olet aikuinen, joka tykkää ketuista!";
    case age >= 18:
      return "Et ole kettufani, mutta se on ok!";
    default:
      return "";
  }
};

console.log(checkFoxLover(Math.floor(Math.random() * 110), true));
console.log(checkFoxLover(Math.floor(Math.random() * 110), false));
