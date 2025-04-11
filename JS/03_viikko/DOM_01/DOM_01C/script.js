/* Kopioi tähän koodi edellisestä tehtävästä. Kopioi myös tekemäsi HTML tiedosto tähän samaan kansioon. 

Lisää sivulle toinen nappi, jota klikkaamalla laskurin arvo vähenee yhdellä. 

Muista lisätä uudelle napille oma id ja sille oma tapahtumankuuntelija. Tee kaksi funktiota, jotka muuttavat saman muuttujan arvoa. 
*/

function minusButtom() {
  document.getElementById("text2").textContent =
    parseInt(document.getElementById("text2").textContent) - 1;
}

function changeColorButtom() {
  let buttons = document.getElementsByClassName("myButton");
  let texts = document.getElementsByClassName("myText");

  let currentColor = window.getComputedStyle(buttons[0]).backgroundColor;

  if (currentColor === "rgb(251, 254, 114)") {
    for (let button of buttons) {
      button.style.backgroundColor = "rgb(102, 226, 117)";
    }
    for (let text of texts) {
      text.style.color = "rgb(0, 129, 16)";
    }
  } else if (currentColor === "rgb(230, 104, 171)") {
    for (let button of buttons) {
      button.style.backgroundColor = "rgb(251, 254, 114)";
    }
    for (let text of texts) {
      text.style.color = "rgb(161, 165, 0)";
    }
  } else {
    for (let button of buttons) {
      button.style.backgroundColor = "rgb(230, 104, 171)";
    }
    for (let text of texts) {
      text.style.color = "rgb(135, 0, 71)";
    }
  }
}
