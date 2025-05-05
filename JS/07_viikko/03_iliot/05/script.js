/* Tehtävä 5
Luo olio `product`, jolla on `name`, `price` ja `quantity`.
Lisää HTML:ään syöttökenttä, johon käyttäjä voi syöttää ostettavan määrän.
Päivitä `quantity` ja näytä kokonaishinta dynaamisesti.
*/

const product = {
  name: "Tietokone",
  price: 799.99,
  quantity: 0,
};

document.getElementById("productName").textContent = `Product: ${product.name}`;
document.getElementById(
  "productPrice"
).textContent = `Price: $${product.price}`;
document.getElementById(
  "productQuantity"
).textContent = `Quantity: ${product.quantity}`;
document.getElementById("totalPrice").textContent = `Total price: ${
  product.price * product.quantity
}`;

function updateDisplay() {
  document.getElementById(
    "productQuantity"
  ).textContent = `Quantity: ${product.quantity}`;
  document.getElementById("totalPrice").textContent = `Total price: ${(
    product.price * product.quantity
  ).toFixed(2)}`;
}

quantityInput.addEventListener("input", () => {
  const enteredQty = parseInt(quantityInput.value);

  if (!isNaN(enteredQty) && enteredQty >= 0) {
    product.quantity = enteredQty;
    updateDisplay();
  } else {
    updateDisplay();
  }
});
