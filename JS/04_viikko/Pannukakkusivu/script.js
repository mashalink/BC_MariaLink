const formContainer = document.querySelector(".form-container");
const totalPriceDisplay = document.getElementById("totalPriceDisplay");
const totalPrice = document.getElementById("totalPrice");
const pancakeType = formContainer.querySelector("#type");
const showSummaryButton = document.getElementById("showSummaryButton");

let selectedToppings = [];
let selectedExtras = [];
let deliveryPrice = 0;

function handleInputChange(event) {
  const target = event.target;

  if (target.classList.contains("topping")) {
    if (target.checked) {
      selectedToppings.push(target);
    } else {
      selectedToppings = selectedToppings.filter(
        (checkbox) => checkbox !== target
      );
    }
  }

  if (target.classList.contains("extra")) {
    if (target.checked) {
      selectedExtras.push(target);
    } else {
      selectedExtras = selectedExtras.filter((checkbox) => checkbox !== target);
    }
  }

  if (target.name === "delivery") {
    deliveryPrice = parseFloat(target.dataset.price || 0);
  }

  updateTotalPrice();
}

function updateTotalPrice() {
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

function showOrderSummary() {
  const name = formContainer.querySelector("#name").value;
  const selectedPancake =
    pancakeType.options[pancakeType.selectedIndex].textContent;

  const selectedToppingsList = Array.from(
    formContainer.querySelectorAll(".topping:checked")
  ).map((checkbox) => checkbox.parentElement.textContent.trim());

  const selectedExtrasList = Array.from(
    formContainer.querySelectorAll(".extra:checked")
  ).map((checkbox) => checkbox.parentElement.textContent.trim());

  const deliveryMethod = formContainer
    .querySelector("input[name='delivery']:checked")
    ?.parentElement.textContent.trim();

  let summaryHTML = `<h3>Order Summary</h3>`;
  summaryHTML += `<p><strong>Customer Name:</strong> ${name}</p>`;
  summaryHTML += `<p><strong>Pancake Type:</strong> ${selectedPancake}</p>`;

  if (selectedToppingsList.length > 0) {
    summaryHTML += `<p><strong>Toppings:</strong><ul>`;
    selectedToppingsList.forEach((topping) => {
      summaryHTML += `<li>${topping}</li>`;
    });
    summaryHTML += `</ul></p>`;
  }

  if (selectedExtrasList.length > 0) {
    summaryHTML += `<p><strong>Extras:</strong><ul>`;
    selectedExtrasList.forEach((extra) => {
      summaryHTML += `<li>${extra}</li>`;
    });
    summaryHTML += `</ul></p>`;
  }

  summaryHTML += `<p><strong>Delivery Method:</strong> ${deliveryMethod}</p>`;

  const summaryContainer = document.querySelector(".order-summary");
  summaryContainer.innerHTML = summaryHTML;
}

formContainer.addEventListener("change", handleInputChange);
showSummaryButton.addEventListener("click", showOrderSummary);

updateTotalPrice();

const modal = document.getElementById("orderModal");
const orderSummaryModal = document.querySelector(".order-summary-modal");
const closeModal = document.getElementById("closeModal");

function showOrderSummary() {
  const name = formContainer.querySelector("#name").value;
  const selectedPancake =
    pancakeType.options[pancakeType.selectedIndex].textContent;

  const selectedToppingsList = Array.from(
    formContainer.querySelectorAll(".topping:checked")
  ).map((checkbox) => checkbox.parentElement.textContent.trim());

  const selectedExtrasList = Array.from(
    formContainer.querySelectorAll(".extra:checked")
  ).map((checkbox) => checkbox.parentElement.textContent.trim());

  const deliveryMethod = formContainer
    .querySelector("input[name='delivery']:checked")
    ?.parentElement.textContent.trim();

  let summaryHTML = `<h3>Order Summary</h3>`;
  summaryHTML += `<p><strong>Customer Name:</strong> ${name}</p>`;
  summaryHTML += `<p><strong>Pancake Type:</strong> ${selectedPancake}</p>`;

  if (selectedToppingsList.length > 0) {
    summaryHTML += `<p><strong>Toppings:</strong><ul>`;
    selectedToppingsList.forEach((topping) => {
      summaryHTML += `<li>${topping}</li>`;
    });
    summaryHTML += `</ul></p>`;
  }

  if (selectedExtrasList.length > 0) {
    summaryHTML += `<p><strong>Extras:</strong><ul>`;
    selectedExtrasList.forEach((extra) => {
      summaryHTML += `<li>${extra}</li>`;
    });
    summaryHTML += `</ul></p>`;
  }

  summaryHTML += `<p><strong>Delivery Method:</strong> ${deliveryMethod}</p>`;

  orderSummaryModal.innerHTML = summaryHTML;

  modal.classList.remove("hidden");
}

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
