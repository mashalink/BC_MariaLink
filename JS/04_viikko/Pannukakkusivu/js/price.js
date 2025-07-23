import { state } from "./state.js";
import { formContainer } from "./main.js";

function calculateExtrasPrice() {
  state.extrasPrice = 0;

  state.selectedExtras.forEach((extraValue) => {
    const extraInput = formContainer.querySelector(
      `.extra[value="${extraValue}"]`
    );

    if (extraInput) {
      const price = parseFloat(extraInput.dataset.price || 0);
      state.extrasPrice += price;
    }
  });
}

function animatePriceBanner() {
  const totalPriceLine = document.querySelector("#totalPriceLine");
  const totalPriceBanner = document.querySelector("#totalPriceBanner");
  const priceBannerContainer = document.querySelector(".price-banner");

  if (!totalPriceLine || !totalPriceBanner || !priceBannerContainer) return;

  totalPriceLine.textContent = `${state.totalPrice.toFixed(2)}€`;
  totalPriceBanner.textContent = `${state.totalPrice.toFixed(0)}€`;

  totalPriceLine.classList.add("animate");
  priceBannerContainer.classList.add("animate");

  setTimeout(() => {
    totalPriceLine.classList.remove("animate");
    priceBannerContainer.classList.remove("animate");
  }, 300);
}

export function updateTotalPrice() {
  state.toppingsPrice = state.selectedToppings.length * 1;

  calculateExtrasPrice();

  state.totalPrice =
    state.typePrice +
    state.toppingsPrice +
    state.extrasPrice +
    state.deliveryPrice;

  console.log("Type:", state.selectedType, `(${state.typePrice}€)`);
  console.log("Toppings:", state.selectedToppings, `(${state.toppingsPrice}€)`);
  console.log("Extras:", state.selectedExtras, `(${state.extrasPrice}€)`);
  console.log("Delivery:", state.deliveryPrice + "€");
  console.log("👉 Total price:", state.totalPrice + "€");

  animatePriceBanner();
}
