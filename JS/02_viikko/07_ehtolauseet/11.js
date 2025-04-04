/* 
Kirjoita funktio nimeltä getDayName:
Ota parametri day.
Käytä switch-rakennetta seuraavasti:
Palauta viikonpäivän nimi (1 = "Maanantai", 2 = "Tiistai", jne.).
Käytä default-haaraa palauttaaksesi "Epäkelpo päivä" virheellisille arvoille.
Kutsu funktiota sekä kelvollisilla että virheellisillä päivämääränumeroilla.
*/

const getDayName = (day) => {
  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thusday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Epäkelpo päivä";
  }
};

console.log(getDayName(Math.floor(Math.random() * 8)));
