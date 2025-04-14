/*
Luo HTML tiedosto, jossa on <p> elementti ja nappi. 
Kirjoita JavaScript-koodi, joka vaihtaa tekstiosion näkyvyyttä - päälle ja pois - nappia painamalla.
 */

function textOn_Off() {
  const button = document.getElementById("turnOn_Off");
  const paragraph = document.querySelector("p");

  button.addEventListener("click", function () {
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
      button.innerText = "Turn off";
    } else {
      paragraph.style.display = "none";
      button.innerText = "Turn on";
    }
  });
}

textOn_Off();
