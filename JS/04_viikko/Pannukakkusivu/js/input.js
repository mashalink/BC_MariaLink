import { state } from "./state.js";
import { updateTotalPrice } from "./price.js";

function getSelectedPancakeType() {
  const typeSelect = document.querySelector("#type");
  const selectedOption = typeSelect.options[typeSelect.selectedIndex];

  state.selectedType = typeSelect.value;
  state.typePrice = parseFloat(selectedOption.dataset.price || 0);

  console.log("Changed to:", state.selectedType);
  console.log("Price:", state.typePrice);
}

function updateSelectionList(list, value, isChecked) {
  const index = list.indexOf(value);

  if (isChecked) {
    if (index === -1) {
      list.push(value);
    }
  } else {
    if (index > -1) {
      list.splice(index, 1);
    }
  }
}

function updateToppings(target) {
  const topping = target.value;
  updateSelectionList(state.selectedToppings, topping, target.checked);
  console.log("Selected toppings:", state.selectedToppings);
}

function updateExtras(target) {
  const extra = target.value;
  updateSelectionList(state.selectedExtras, extra, target.checked);
  console.log("Selected extras:", state.selectedExtras);
}

export function handleInputChange(event) {
  const target = event.target;

  if (target.id === "type") {
    getSelectedPancakeType();
  }

  if (target.classList.contains("topping")) {
    updateToppings(target);
  }

  if (target.classList.contains("extra")) {
    updateExtras(target);
  }

  if (target.name === "delivery") {
    state.deliveryPrice = parseFloat(target.dataset.price || 0);
    state.deliveryMethod = target.value;
    console.log("Selected delivery:", state.deliveryMethod);
    console.log("Delivery price:", state.deliveryPrice);
  }

  updateTotalPrice();
}
