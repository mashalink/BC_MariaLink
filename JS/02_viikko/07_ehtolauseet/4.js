/* 
Kirjoita funktio nimeltä canVote:
Ota ikä parametrina.
Palauta true, jos ikä on 18 tai enemmän, muuten false.
Tulosta "Saat äänestää" tai "Et saa vielä äänestää" funktion palauttaman tuloksen perusteella.
*/

const canVote = (age) => (age >= 18 ? true : false);

if (canVote(Math.floor(Math.random() * 110))) {
  console.log("Saat äänestää");
} else {
  console.log("Et saa vielä äänestää");
}
