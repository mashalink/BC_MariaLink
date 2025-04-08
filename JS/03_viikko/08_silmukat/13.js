/* 
Kirjoita funktio nimeltä validatePassword:
- Käytä silmukkaa salliaksesi käyttäjän syöttää salasana.
- Jos salasana on "oikein123", tulosta: "Salasana oikein!" ja poistu silmukasta.
- Jos salasana on väärä, pyydä käyttäjää uudelleen viestillä: "Yritä uudelleen!".
*/

const validatePassword = () => {
  let item = prompt("Syötä salasana:");

  while (item !== "oikein123") {
    item = prompt("Yritä uudelleen!");
  }
  alert("Salasana oikein!");
};

validatePassword();
