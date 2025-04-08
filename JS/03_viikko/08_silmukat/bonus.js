/* 
Muokkaa harjoituksen 4 (tehty opettajan kanssa) ohjelmaa niin, että 
ohjelma laskee KAIKKIEN annettujen matkojen keskinopeuden. 

Luo funktio allTripsAverageSpeed, joka pyytää jatkuvasti käyttäjää syöttämään 
etäisyyden (kilometreinä) ja ajan (tunteina). 
Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi.
Silloin ohjelma tulostaa kaikkien matkojen yhteenlasketun keskinopeuden. 
 */

function allTripsAverageSpeed() {
  let fullDistance = 0,
    fullTime = 0;

  while (true) {
    let distance = parseFloat(prompt("Anna etäisyys tai 0 jos haluat lopua"));

    if (distance == 0) {
      break;
    }

    if (isNaN(distance) || distance < 0) {
      continue;
    }

    let time = parseFloat(prompt("Anna aika."));

    if (isNaN(time) || time < 0) {
      continue;
    }

    fullDistance += distance;
    fullTime += time;
  }
  alert("Full average speed is " + (fullDistance / fullTime).toFixed(2));
}

allTripsAverageSpeed();
