const totalPriceDisplay = document.getElementById("totalPriceDisplay");
const totalPrice = document.getElementById("totalPrice");
const pancakeType = document.getElementById("type");
const toppingCheckboxes = document.querySelectorAll(".topping");
const extraCheckboxes = document.querySelectorAll(".extra");

function updateTotalPrice() {
  let price = parseFloat(pancakeType.value);

  toppingCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      price += parseFloat(checkbox.value);
    }
  });

  extraCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      price += parseFloat(checkbox.value);
    }
  });

  totalPriceDisplay.textContent = `${price.toFixed(2)}€`;
  totalPrice.textContent = `${price.toFixed(0)}€`;

  const priceBanner = document.querySelector(".price-banner");
  const priceLine = document.querySelector("#totalPriceDisplay");
  priceBanner.classList.add("animate");
  priceLine.classList.add("animate");

  setTimeout(() => {
    priceBanner.classList.remove("animate");
    priceLine.classList.remove("animate");
  }, 300);
}

pancakeType.addEventListener("change", updateTotalPrice);
toppingCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateTotalPrice);
});
extraCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateTotalPrice);
});

updateTotalPrice();
