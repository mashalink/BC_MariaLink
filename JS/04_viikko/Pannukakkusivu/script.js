const form = document.querySelector("form");
const totalPriceDisplay = document.getElementById("totalPriceDisplay");
const totalPrice = document.getElementById("totalPrice");
const pancakeType = document.getElementById("type");
const showSummaryButton = document.getElementById("showSummaryButton");

let selectedToppings = [];
let selectedExtras = [];
let deliveryPrice = 0;

function handleInputChange(inputEvent) {
  const target = inputEvent.target;

  if (target.classList.contains("topping")) {
    if (target.checked) {
      selectedToppings.push(target); // Store the actual checkbox element
    } else {
      selectedToppings = selectedToppings.filter(
        (checkbox) => checkbox !== target
      );
    }
  }

  if (target.classList.contains("extra")) {
    if (target.checked) {
      selectedExtras.push(target); // Store the actual checkbox element
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

  // Calculate pancake price
  const selectedPancake = pancakeType.options[pancakeType.selectedIndex];
  price += parseFloat(selectedPancake.dataset.price || 0);

  // Calculate toppings price
  selectedToppings.forEach((checkbox) => {
    price += parseFloat(checkbox.dataset.price || 0);
  });

  // Calculate extras price
  selectedExtras.forEach((checkbox) => {
    price += parseFloat(checkbox.dataset.price || 0);
  });

  // Add delivery price
  price += deliveryPrice;

  // Update total price display
  totalPriceDisplay.textContent = `${price.toFixed(2)}€`;
  totalPrice.textContent = `${price.toFixed(0)}€`;

  // Animate the price update
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
  const name = document.getElementById("name").value;
  const selectedPancake = pancakeType.options[pancakeType.selectedIndex];
  const selectedToppings = Array.from(
    form.querySelectorAll(".topping:checked")
  ).map((checkbox) => checkbox.parentElement.textContent.trim());
  const selectedExtras = Array.from(
    form.querySelectorAll(".extra:checked")
  ).map((checkbox) => checkbox.parentElement.textContent.trim());
  const deliveryMethod = form
    .querySelector("input[name='delivery']:checked")
    ?.parentElement.textContent.trim();

  let summaryHTML = `<h3>Order Summary</h3>`;
  summaryHTML += `<p><strong>Customer Name:</strong> ${name}</p>`;
  summaryHTML += `<p><strong>Pancake Type:</strong> ${selectedPancake.textContent}</p>`;

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

  const summaryContainer = document.querySelector(".order-summary");
  summaryContainer.innerHTML = summaryHTML;
}

showSummaryButton.addEventListener("click", showOrderSummary);

form.addEventListener("change", handleInputChange);

// Initial update of the total price and order summary
updateTotalPrice();
