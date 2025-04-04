/* 
Kirjoita funktio nimeltä findFox:
Ota kaksi parametria: hasFox ja foxName.
Jos hasFox on tosi JA foxName on "Kikka", palauta "Kikka-kettu on täällä!"
Muussa tapauksessa palauta "No foxes found."
Kutsu funktiota eri ketunnimillä ja hasFox arvoilla.
*/

const findFox = (hasFox, foxName) => {
  switch (true) {
    case hasFox && foxName == "Kikka":
      return "Kikka-kettu on täällä!";
    default:
      return "No foxes found.";
  }
};

console.log(findFox(true, "Kikka"));
console.log(findFox(true, "Kokka"));
console.log(findFox(false, "Kikka"));
console.log(findFox(false, "Kokka"));
