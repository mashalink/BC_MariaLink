export let selectedToppings = [];
export let selectedExtras = [];
export let deliveryPrice = 0;

export function updateTotalPrice(
  pancakeType,
  totalPriceDisplay,
  totalPrice,
  deliveryPrice
) {
  let price = 0;
  const selectedPancakeOption = pancakeType.options[pancakeType.selectedIndex];
  price += parseFloat(selectedPancakeOption.dataset.price || 0);

  selectedToppings.forEach((checkbox) => {
    price += parseFloat(checkbox.dataset.price || 0);
  });

  selectedExtras.forEach((checkbox) => {
    price += parseFloat(checkbox.dataset.price || 0);
  });

  price += deliveryPrice;

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
