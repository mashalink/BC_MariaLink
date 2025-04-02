/* 
Kirjoita funktio nimeltä getGrade:
Ota pistemäärä parametrina.
Jos pistemäärä on 90 tai enemmän, palauta "Arvosana Kiitettävä".
Jos pistemäärä on välillä 80–89, palauta "Arvosana Hyvä".
Kaikilla muilla pistemäärillä palauta "Avosana Tyydyttävä".
Kutsu funktiota pisteillä kuten 85 ja 75 ja tulosta tulos.
*/

const getGrade = (score) => {
  switch (true) {
    case score >= 90:
      return "Arvosana Kiitettävä";
    case score >= 80:
      return "Arvosana Hyvä";
    default:
      return "Arvosana Tyydyttävä";
  }
};

console.log(getGrade(85));
console.log(getGrade(75));
