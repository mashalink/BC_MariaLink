/*
Luo HTML-tiedosto, jossa on <input>-kenttä ja <div>, jonka ID on displayText.
Kirjoita JavaScript-koodi, joka:
- Päivittää jatkuvasti <div>-elementin sisällön input-kentän arvolla sitä mukaa, kun käyttäjä kirjoittaa.
- Käyttää input-tapahtumaa, jotta päivitys tapahtuu reaaliajassa.
*/

function textRealTime() {
  const textInput = document.getElementById("textInput");
  const displayText = document.getElementById("displayText");

  textInput.addEventListener("input", function () {
    displayText.textContent = textInput.value;
  });
}

textRealTime();
