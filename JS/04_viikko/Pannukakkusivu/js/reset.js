import { updateTotalPrice } from "./price.js";
import { resetState } from "./state.js";
import { state } from "./state.js";
import { formContainer } from "./main.js";

export function resetForm() {
  resetState();

  formContainer.querySelector("#name").value = "";
  formContainer.querySelector("#phone").value = "";

  const typeSelect = formContainer.querySelector("#type");
  typeSelect.selectedIndex = 0;

  const checkboxes = formContainer.querySelectorAll(".topping, .extra");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  const deliveryOptions = formContainer.querySelectorAll(
    'input[name="delivery"]'
  );
  deliveryOptions.forEach((radio) => {
    if (radio.value === "Eat-in") {
      radio.checked = true;
      state.deliveryPrice = parseFloat(radio.dataset.price || 0);
      state.deliveryMethod = radio.value;
    } else {
      radio.checked = false;
    }
  });

  updateTotalPrice();
}
