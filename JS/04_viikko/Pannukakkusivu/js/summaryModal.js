export function showOrderSummary(formContainer, pancakeType) {
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

  summaryHTML += `<button id="confirmOrderButton">Confirm Order</button>`;

  const orderSummaryModal = document.querySelector(".order-summary-modal");
  const modal = document.getElementById("orderModal");
  orderSummaryModal.innerHTML = summaryHTML;
  modal.classList.remove("hidden");
}
