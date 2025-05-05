/* Tehtävä 3
Luo olio `theme`, jolla on ominaisuudet `name` (light tai dark) ja `isActive`.
Lisää HTML:ään painike. Kun sitä klikataan, vaihdetaan teema light ↔ dark ja päivitetään `isActive`-arvo.
*/

const theme = {
  name: "light",
  isActive: true,
};

function turnOnOff() {
  const button = document.getElementById("onOff");
  const body = document.body;

  if (theme.name === "light") {
    theme.name = "dark";
    theme.isActive = false;
    body.className = "dark";
    button.textContent = "Turn on";
  } else {
    theme.name = "light";
    theme.isActive = true;
    body.className = "light";
    button.textContent = "Turn off";
  }
}
