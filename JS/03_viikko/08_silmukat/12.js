/* 
Kirjoita funktio nimeltä buildGroceryList:
- Pyydä käyttäjää syöttämään ruokakauppaostoksia yksi kerrallaan.
- Lopeta, kun käyttäjä kirjoittaa "valmis".
Tulosta koko ostoslista konsoliin.
*/

const buildGroceryList = () => {
  let list = "";

  while (true) {
    let item = prompt(
      "Syötä ostos (tai kirjoita 'valmis' lopettaaksesi):"
    ).trim();

    if (item === "") {
      continue;
    }

    if (item.toLowerCase() === "valmis") {
      break;
    }

    list += item + "\n";
  }

  alert("Ostoslista:\n" + list);
};

buildGroceryList();
