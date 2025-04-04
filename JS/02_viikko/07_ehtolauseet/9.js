/* 
Kirjoita funktio nimeltä canEnterEvent:
Ota kaksi parametria: age ja hasID.
Jos ikä on 18 tai enemmän JA hasID on tosi, palauta "Sisäänpääsy myönnetty."
Muussa tapauksessa palauta "Sisäänpääsy evätty."
Kutsu funktiota eri yhdistelmillä age ja hasID.
*/

const canEnterEvent = (age, hasID) => {
  switch (true) {
    case age && hasID:
      return "Sisäänpääsy myönnetty.";
    default:
      return "Sisäänpääsy evätty.";
  }
};

console.log(canEnterEvent(Math.floor(Math.random() * 110), true));
console.log(canEnterEvent(Math.floor(Math.random() * 110), false));
