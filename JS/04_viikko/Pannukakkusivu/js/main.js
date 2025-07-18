const formContainer = document.querySelector(".form-container");

let selectedType = "";
let typePrice = 0;
let selectedToppings = [];
let toppingsPrice = 0;
let selectedExtras = [];
let extrasPrice = 0;
let deliveryMethod = "";
let deliveryPrice = 0;
let totalPrice = 0;

function getSelectedPancakeType() {
  const typeSelect = document.querySelector("#type");
  const selectedOption = typeSelect.options[typeSelect.selectedIndex];

  selectedType = typeSelect.value;
  typePrice = parseFloat(selectedOption.dataset.price || 0);

  console.log("Changed to:", selectedType);
  console.log("Price:", typePrice);
}

function calculateExtrasPrice() {
  extrasPrice = 0;

  selectedExtras.forEach((extraValue) => {
    const extraInput = formContainer.querySelector(
      `.extra[value="${extraValue}"]`
    );

    if (extraInput) {
      const price = parseFloat(extraInput.dataset.price || 0);
      extrasPrice += price;
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
  updateSelectionList(selectedToppings, topping, target.checked);
  console.log("Selected toppings:", selectedToppings);
}

function updateExtras(target) {
  const extra = target.value;
  updateSelectionList(selectedExtras, extra, target.checked);
  console.log("Selected extras:", selectedExtras);
}

function animatePriceBanner() {
  const totalPriceLine = document.querySelector("#totalPriceLine");
  const totalPriceBanner = document.querySelector("#totalPriceBanner");
  const priceBannerContainer = document.querySelector(".price-banner");

  totalPriceLine.textContent = `${totalPrice.toFixed(2)}€`;
  totalPriceBanner.textContent = `${totalPrice.toFixed(0)}€`;

  if (!totalPriceLine || !totalPriceBanner || !priceBannerContainer) return;

  totalPriceLine.classList.add("animate");
  priceBannerContainer.classList.add("animate");

  setTimeout(() => {
    totalPriceLine.classList.remove("animate");
    priceBannerContainer.classList.remove("animate");
  }, 300);
}

function updateTotalPrice() {
  toppingsPrice = selectedToppings.length * 1;

  calculateExtrasPrice();

  totalPrice = typePrice + toppingsPrice + extrasPrice + deliveryPrice;

  console.log("Type:", selectedType, `(${typePrice}€)`);
  console.log("Toppings:", selectedToppings, `(${toppingsPrice}€)`);
  console.log("Extras:", selectedExtras, `(${extrasPrice}€)`);
  console.log("Delivery:", deliveryPrice + "€");
  console.log("👉 Total price:", totalPrice + "€");

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
    deliveryPrice = parseFloat(target.dataset.price || 0);
    deliveryMethod = target.value;
    console.log("Selected delivery:", deliveryMethod);
    console.log("Delivery price:", deliveryPrice);
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

function showOrderSummary() {
  const name = formContainer.querySelector("#name").value;
  const phone = formContainer.querySelector("#phone").value;

  let summaryHTML = `<h3>Order Summary</h3>`;
  summaryHTML += `<p><strong>Customer Name:</strong> ${name}</p>`;
  summaryHTML += `<p><strong>Customer phone:</strong> ${phone}</p>`;
  summaryHTML += `<p><strong>Pancake Type:</strong> ${selectedType}</p>`;

  if (selectedToppings.length > 0) {
    summaryHTML += `<p><strong>Toppings:</strong><ul>`;
    selectedToppings.forEach((topping) => {
      summaryHTML += `<li>${topping}</li>`;
    });
    summaryHTML += `</ul></p>`;
  }

  if (selectedExtras.length > 0) {
    summaryHTML += `<p><strong>Extras:</strong><ul>`;
    selectedExtras.forEach((extra) => {
      summaryHTML += `<li>${extra}</li>`;
    });
    summaryHTML += `</ul></p>`;
  }

  summaryHTML += `<p><strong>Delivery Method:</strong> ${deliveryMethod}</p>`;

  summaryHTML += `<p><strong>Total price:</strong> ${totalPrice} € </p>`;

  summaryHTML += `<button id="confirmOrderButton">Confirm Order</button>`;

  const orderSummaryModal = document.querySelector(".order-summary-modal");
  const modal = document.getElementById("orderModal");
  orderSummaryModal.innerHTML = summaryHTML;
  modal.classList.remove("hidden");
}

showSummaryButton.addEventListener("click", () => {
  showOrderSummary();

  setTimeout(() => {
    const confirmButton = document.getElementById("confirmOrderButton");
    if (confirmButton) {
      confirmButton.addEventListener("click", () => {
        const name = formContainer.querySelector("#name").value;
        const phone = formContainer.querySelector("#phone").value;

        const order = {
          id: Date.now(),
          customerName: name,
          phone: phone,
          selectedPancake: selectedType,
          toppings: selectedToppings,
          extras: selectedExtras,
          delivery: deliveryMethod,
          price: totalPrice,
          status: "waiting",
        };

        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        orders.push(order);
        console.log(orders);
        localStorage.setItem("orders", JSON.stringify(orders));

        alert("Order saved successfully!");
        document.getElementById("orderModal").classList.add("hidden");
      });
    }
  }, 100);
});

// добавить зачистку полей и разбить на файлы
