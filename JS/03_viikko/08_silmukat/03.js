/* Luo funktio averageSpeed, joka pyytää jatkuvasti käyttäjää syöttämään etäisyyden (kilometreinä)
 ja ajan (tunteina) ja laskee sitten keskinopeuden.
 Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi.
 Saadessaan etäisyyden 0 ohjelman ei pitäisi pyytää enempää syöttöä. */

// Tehdään tämä opettajan esimerkkinä, koska promptin käyttö ei ole vielä tuttua.

function averageSpeed() {
  while (true) {
    let distance = parseFloat(prompt("Anna etäisyys tai 0"));

    // Ohjelman tulisi lopetta, kuin käyttäjä syöttää 0 etäisyys.
    if (distance == 0) {
      break;
    }

    // ei ole luku tai on negatiivinen
    if (isNaN(distance) || distance < 0) {
      // palaa silmukan alkuun
      continue;
    }

    let time = parseFloat(prompt("Anna aika."));

    // ei ole luku tai on negatiivinen
    if (isNaN(time) || time < 0) {
      // palaa silmukan alkuun
      continue;
    }

    let average = distance / time;
    alert("Average speed is " + average);
  }
}

averageSpeed();
