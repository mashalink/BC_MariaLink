/*
Käytä HTML-tiedostoa, jossa on <input>-kenttä, <button> ja <ul>-lista, jonka ID on fruitList.
Kirjoita JavaScript-koodi, joka:
- Hakee arvon input-kentästä, kun painiketta klikataan.
- Luo uuden <li>-elementin ja asettaa sen tekstisisällöksi input-kentän arvon.
- Lisää <li>-elementin listaan.
- Tyhjentää input-kentän hedelmän lisäämisen jälkeen.
*/

function addFruitButton() {
  const fruitInput = document.getElementById("fruitInput");

  if (fruitInput.value.trim() !== "") {
    const fruitList = document.getElementById("fruitList");
    const newFruit = document.createElement("li");
    newFruit.textContent = fruitInput.value;
    fruitList.appendChild(newFruit);
    fruitInput.value = "";
  }
}

document
  .getElementById("addFruitBtn")
  .addEventListener("click", addFruitButton);
document
  .getElementById("fruitInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addFruitButton();
    }
  });
