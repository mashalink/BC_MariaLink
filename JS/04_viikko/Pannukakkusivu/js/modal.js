import { handleConfirmOrder } from "./order.js";
import { state } from "./state.js";
import { formContainer } from "./main.js";

export function showOrderSummary() {
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
