/*
Luo HTML-tiedosto, joka sisältää:
- <button> taustavärin vaihtamiseen.
- <input>-kenttä, johon käyttäjä voi syöttää värin.
- <p>-elementti, jonka tekstin väri muuttuu syötetyn värin mukaan.

Kirjoita JavaScript-koodi, joka:
- Vaihtaa taustavärin satunnaiseksi, kun painiketta klikataan.
- Päivittää kappaleen tekstivärin vastaamaan käyttäjän syöttämää arvoa.
*/

function colorButton() {
  document.getElementById("changeColor").addEventListener("click", function () {
    const textInput = document.getElementById("textInput");

    if (textInput.value.trim() !== "") {
      let text = document.getElementById("paragraph");
      text.style.color = textInput.value;
    }

    const newBack = document.getElementById("backColor");
    let currentColor = window.getComputedStyle(newBack).backgroundColor;

    if (currentColor === "rgb(251, 254, 114)") {
      newBack.style.backgroundColor = "rgb(102, 226, 117)";
    } else if (currentColor === "rgb(102, 226, 117)") {
      newBack.style.backgroundColor = "rgb(230, 104, 171)";
    } else {
      newBack.style.backgroundColor = "rgb(251, 254, 114)";
    }
  });
}

colorButton();
