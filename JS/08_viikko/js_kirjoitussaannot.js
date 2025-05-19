/* Tehtävä 1: Käytä \"strict mode\" -tilaa

Luo funktio `task1`, joka käyttää \"use strict\" -tilaa.
Yritä käyttää muuttujaa ilman sen julistamista.
Ota virhe kiinni ja loggaa: \"Strict mode -virhe: [virheilmoitus]\"
*/

function task1() {
  "use strict";
  try {
    x = 10; // Virhe: x ei ole julistettu
  } catch (error) {
    console.log("Strict mode -virhe: " + error.message);
  }
}

task1();

/* Tehtävä 2: Muuttujien oikea julistus

Julista vakio `MAX_USERS = 100` ja muuttuja `currentUsers = 10`.
Yritä muuttaa vakion arvoa ja ota virhe kiinni.
*/

function task2() {
  "use strict";
  const MAX_USERS = 100;
  let currentUsers = 10;

  try {
    MAX_USERS = 150;
  } catch (error) {
    console.log("Strict mode -virhe: " + error.message);
  }
}

task2();

/* Tehtävä 3: Luo objekti ja tulosta se

Luo objekti `userProfile`, jossa kentät:
- name
- email
- isAdmin
Tulosta objekti konsoliin.
*/

function task3() {
  "use strict";

  try {
    const userProfile = {
      name: "Maria",
      email: "name@gmail.com",
      isAdmin: true,
    };
    console.log(userProfile);
  } catch (error) {
    console.log(error.message);
  }
}

task3();

/* Tehtävä 4: Yksinkertainen funktio pinta-alan laskemiseen

Luo funktio `calculateArea(width, height)`, joka palauttaa suorakulmion pinta-alan.
*/

function calculateArea(width, height) {
  "use strict";
  try {
    return width * height;
  } catch (error) {
    console.log(error.message);
  }
}

console.log(calculateArea(12, 2));

/* Tehtävä 5: Vältä taikalukuja

Määritä vakio `DISCOUNT = 0.1`.
Luo funktio `applyDiscount(price)`, joka laskee hinnasta alennuksen.
*/

const DISCOUNT = 0.1;
function applyDiscount(price) {
  "use strict";
  try {
    const discountedPrice = price - price * DISCOUNT;
    return discountedPrice;
  } catch (error) {
    console.log(error.message);
  }
}

console.log(applyDiscount(154.87));

/* Tehtävä 6: Kirjoita hyödyllisiä kommentteja

Kirjoita funktio `greetUser(name)`, joka palauttaa tervehdyksen käyttäjälle.
Lisää funktioon kommentti, joka selittää sen tarkoituksen.
*/

function greetUser(name) {
  try {
    return "Hei, " + name + "!";
  } catch (error) {
    console.log(error.message);
  }
}

console.log(greetUser("Maria"));

/* Tehtävä 7: Refaktoroi epäselvä koodi selkeämmäksi

Paranna epäselvää funktiota käyttämällä parempia nimiä ja muotoilua.

Ennen:
function f(n){return n<0 ? 'negative' : 'positive';}
*/

function checkNumber(number) {
  try {
    return number < 0 ? "negative" : "positive";
  } catch (error) {
    console.log(error.message);
  }
}

console.log(checkNumber(-5));
console.log(checkNumber(10));

/* Tehtävä 8: Korjaa koodin muotoilu

Kirjoita koodi uudelleen käyttäen oikeaa muotoilua ja sisennystä.

Ennen:
let x=10; function example(){console.log(x);}
*/

let x = 10;

function example() {
  try {
    console.log(x);
  } catch (error) {
    console.log(error.message);
  }
}

example();
