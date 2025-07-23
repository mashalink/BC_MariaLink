import { state } from "./state.js";
import { resetState } from "./state.js";

const formContainer = document.querySelector(".form-container");

function getSelectedPancakeType() {
  const typeSelect = document.querySelector("#type");
  const selectedOption = typeSelect.options[typeSelect.selectedIndex];

  state.selectedType = typeSelect.value;
  state.typePrice = parseFloat(selectedOption.dataset.price || 0);

  console.log("Changed to:", state.selectedType);
  console.log("Price:", state.typePrice);
}

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

function updateTotalPrice() {
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

function handleInputChange(event) {
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

formContainer.addEventListener("change", handleInputChange);

document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("orderModal").classList.add("hidden");
});

document.getElementById("orderModal").addEventListener("click", (e) => {
  if (e.target.id === "orderModal") {
    document.getElementById("orderModal").classList.add("hidden");
  }
});

const showSummaryButton = document.getElementById("showSummaryButton");

function resetForm() {
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

function handleConfirmOrder() {
  const name = formContainer.querySelector("#name").value;
  const phone = formContainer.querySelector("#phone").value;

  console.log(state.deliveryMethod);
  const order = {
    id: Date.now(),
    customerName: name,
    phone: phone,
    selectedPancake: state.selectedType,
    toppings: state.selectedToppings,
    extras: state.selectedExtras,
    delivery: state.deliveryMethod,
    price: state.totalPrice,
    status: "waiting",
  };

  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  alert("Order saved successfully!");
  document.getElementById("orderModal").classList.add("hidden");

  resetForm();
}

function showOrderSummary() {
  const name = formContainer.querySelector("#name").value;
  const phone = formContainer.querySelector("#phone").value;

  let summaryHTML = `<h3>Order Summary</h3>`;
  summaryHTML += `<p><strong>Customer Name:</strong> ${name}</p>`;
  summaryHTML += `<p><strong>Customer phone:</strong> ${phone}</p>`;
  summaryHTML += `<p><strong>Pancake Type:</strong> ${state.selectedType}</p>`;

  if (state.selectedToppings.length > 0) {
    summaryHTML += `<p><strong>Toppings:</strong><ul>`;
    state.selectedToppings.forEach((topping) => {
      summaryHTML += `<li>${topping}</li>`;
    });
    summaryHTML += `</ul></p>`;
  }

  if (state.selectedExtras.length > 0) {
    summaryHTML += `<p><strong>Extras:</strong><ul>`;
    state.selectedExtras.forEach((extra) => {
      summaryHTML += `<li>${extra}</li>`;
    });
    summaryHTML += `</ul></p>`;
  }

  summaryHTML += `<p><strong>Delivery Method:</strong> ${state.deliveryMethod}</p>`;

  summaryHTML += `<p><strong>Total price:</strong> ${state.totalPrice} € </p>`;

  summaryHTML += `<button id="confirmOrderButton">Confirm Order</button>`;

  const orderSummaryModal = document.querySelector(".order-summary-modal");
  const modal = document.getElementById("orderModal");
  orderSummaryModal.innerHTML = summaryHTML;
  modal.classList.remove("hidden");

  const confirmButton = document.getElementById("confirmOrderButton");
  if (confirmButton) {
    confirmButton.addEventListener("click", handleConfirmOrder);
  }
}

showSummaryButton.addEventListener("click", () => {
  const name = formContainer.querySelector("#name").value.trim();
  const phone = formContainer.querySelector("#phone").value.trim();
  const type = formContainer.querySelector("#type").value;

  if (!name || !phone || !type) {
    alert("Please fill in your name, phone number and select pancake type.");
    return;
  }

  showOrderSummary();
});

//разбить на файлы
