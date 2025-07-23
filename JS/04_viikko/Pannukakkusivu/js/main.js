import { handleInputChange } from "./input.js";
import { showOrderSummary } from "./modal.js";

export const formContainer = document.querySelector(".form-container");
const showSummaryButton = document.getElementById("showSummaryButton");

formContainer.addEventListener("change", handleInputChange);

document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("orderModal").classList.add("hidden");
});

document.getElementById("orderModal").addEventListener("click", (e) => {
  if (e.target.id === "orderModal") {
    document.getElementById("orderModal").classList.add("hidden");
  }
});

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
