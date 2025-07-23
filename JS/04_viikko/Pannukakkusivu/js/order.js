import { resetForm } from "./reset.js";
import { state } from "./state.js";
import { formContainer } from "./main.js";

export function handleConfirmOrder() {
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
