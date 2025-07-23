export const state = {
  selectedType: "",
  typePrice: 0,
  selectedToppings: [],
  toppingsPrice: 0,
  selectedExtras: [],
  extrasPrice: 0,
  deliveryMethod: "Eat-in",
  deliveryPrice: 0,
  totalPrice: 0,
};

export function resetState() {
  state.selectedType = "";
  state.typePrice = 0;
  state.selectedToppings.length = 0;
  state.toppingsPrice = 0;
  state.selectedExtras.length = 0;
  state.extrasPrice = 0;
  state.deliveryMethod = "Eat-in";
  state.deliveryPrice = 0;
  state.totalPrice = 0;
}
