/* Kysy käyttäjältä viisi kertaa jotain sanaa. Jos käyttäjä painaa vain "OK" ilman syötettä (eli antaa tyhjän vastauksen), ohita se. 

Tulosta lopuksi konsoliin kaikki annetut sanat. 
 */

const fiveWords = () => {
  let list = "";

  for (i = 0; i < 5; i++) {
    let item = prompt("Syötä sana:");

    while (item === "") {
      item = prompt("Yritä uudelleen!");
    }
    list += item + "\n";
  }

  alert("Sanat ovat:\n" + list);
};

fiveWords();
