/* Tehtävä 4
Luo olio `counter`, jolla on ominaisuus `value`.
Lisää HTML:ään kaksi painiketta: toinen kasvattaa `value`, toinen pienentää.
Näytä `value` HTML-elementissä ja päivitä se reaaliaikaisesti painikkeiden avulla.
*/

const counter = {
  value: 0,
};

function updateDisplay() {
  document.getElementById("valueDisplay").textContent = counter.value;
}

function increaseValue() {
  counter.value++;
  updateDisplay();
}

function decreaseValue() {
  counter.value--;
  updateDisplay();
}
