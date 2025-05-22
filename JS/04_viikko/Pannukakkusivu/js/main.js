import {
  updateTotalPrice,
  selectedToppings,
  selectedExtras,
} from "./priceCalculation.js";
import { showOrderSummary } from "./summaryModal.js";
let deliveryPrice = 0;

const formContainer = document.querySelector(".form-container");
const totalPriceDisplay = document.getElementById("totalPriceDisplay");
const totalPrice = document.getElementById("totalPrice");
const pancakeType = formContainer.querySelector("#type");
const showSummaryButton = document.getElementById("showSummaryButton");

function handleInputChange(event) {
  const target = event.target;

  if (target.classList.contains("topping")) {
    if (target.checked) {
      selectedToppings.push(target);
    } else {
      const index = selectedToppings.indexOf(target);
      if (index > -1) selectedToppings.splice(index, 1);
    }
  }

  if (target.classList.contains("extra")) {
    if (target.checked) {
      selectedExtras.push(target);
    } else {
      const index = selectedExtras.indexOf(target);
      if (index > -1) selectedExtras.splice(index, 1);
    }
  }

  if (target.name === "delivery") {
    deliveryPrice = parseFloat(target.dataset.price || 0);
  }

  updateTotalPrice(pancakeType, totalPriceDisplay, totalPrice, deliveryPrice);
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

updateTotalPrice(pancakeType, totalPriceDisplay, totalPrice, deliveryPrice);

showSummaryButton.addEventListener("click", () => {
  showOrderSummary(formContainer, pancakeType);

  setTimeout(() => {
    const confirmButton = document.getElementById("confirmOrderButton");
    if (confirmButton) {
      confirmButton.addEventListener("click", () => {
        const name = formContainer.querySelector("#name").value;
        const phone = formContainer.querySelector("#phone").value;
        const selectedPancake =
          pancakeType.options[pancakeType.selectedIndex].textContent;

        const toppings = Array.from(
          formContainer.querySelectorAll(".topping:checked")
        ).map((cb) => cb.parentElement.textContent.trim());

        const extras = Array.from(
          formContainer.querySelectorAll(".extra:checked")
        ).map((cb) => cb.parentElement.textContent.trim());

        const delivery = formContainer
          .querySelector("input[name='delivery']:checked")
          ?.parentElement.textContent.trim();

        const price = parseFloat(
          document.getElementById("totalPriceDisplay").textContent
        );

        const order = {
          id: Date.now(),
          phone,
          customerName: name,
          selectedPancake,
          toppings,
          extras,
          deliveryMethod: delivery,
          totalPrice: price,
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
