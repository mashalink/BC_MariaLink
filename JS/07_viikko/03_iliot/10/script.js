/* Tehtävä 10
Luo olio `shoppingList`, jolla on taulukko `items`.
Lisää syöttökenttä ja painike, joiden avulla käyttäjät voivat lisätä uusia tuotteita `items`-taulukkoon ja päivittää näkyvän listan.
*/

const shoppingList = {
  items: [],

  addItem(item) {
    if (item.trim() !== "") {
      this.items.push(item);
    }
  },
};

function addItem() {
  shoppingList.addItem(document.getElementById("item").value);
  displayItems();
}

function displayItems() {
  const list = document.getElementById("shoppingList");
  list.innerHTML = "";

  shoppingList.items.forEach((item) => {
    const newItem = document.createElement("li");
    newItem.textContent = `${item}`;
    list.appendChild(newItem);
  });
}
