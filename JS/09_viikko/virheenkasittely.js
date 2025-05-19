"use strict";

/* Tehtävä 1: Try-Catch virheenkorjaukseen
/*
Tehtävä: Kääri koodi `try-catch`-lohkoon.
         Simuloi virhe kutsumalla määrittelemätöntä funktiota.

Testitapaus:
task1(); // Pitää tulostaa: "Virhe havaittu: function is not defined"
*/

function task1() {
  try {
    undefinedFunction(); // Tämä funktio ei ole olemassa → aiheuttaa virheen
  } catch (error) {
    console.log("Virhe havaittu: " + error.message);
  }
}

// Testaus
task1();

/* Tehtävä 2: Käsittele ReferenceError
/*
Tehtävä: Yritä käyttää muuttujaa, jota ei ole määritelty.
         Ota virhe kiinni ja tulosta: "ReferenceError havaittu: [virheviesti]"

Testitapaus:
task2(); // Pitää tulostaa: "ReferenceError havaittu: myVariable is not defined"
*/

function task2() {
  try {
    console.log(myVariable);
  } catch (error) {
    console.log("ReferenceError havaittu: " + error.message);
  }
}

task2();

/* Tehtävä 3: Käytä Finally-lohkoa
/*
Tehtävä: Simuloi virhe, kirjaa se ja varmista, että "Tehtävä valmis." aina suoritetaan.

Testitapaus:
task3(); // Pitää tulostaa virheviesti ja "Tehtävä valmis."
*/

function task3() {
  try {
    notDefinedFunction();
  } catch (error) {
    console.log("Virhe havaittu: " + error.message);
  } finally {
    console.log("Tehtävä valmis.");
  }
}

task3();

/* Tehtävä 4: Korjaa JSON-virhe
/*
Tehtävä: Yritä jäsentää virheellinen JSON. Jos epäonnistuu, tulosta "Virheellinen JSON-muoto"

Testitapaukset:
parseJSON('{"name": "Alice", "age": 25}'); // Palauttaa olion
parseJSON("Invalid JSON text"); // Tulostaa virheen ja palauttaa null
*/

function parseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.log("Virheellinen JSON-muoto");
    return null;
  }
}

console.log(parseJSON('{"name": "Alice", "age": 25}'));
console.log(parseJSON("Invalid JSON text"));

/* Tehtävä 5: Heitä mukautettu virhe
/*
Tehtävä: Jos ikä on alle 18, heitä virhe "Sinun on oltava vähintään 18."

Testitapaukset:
checkAge(20); // Tulostaa: "Pääsy myönnetty."
checkAge(16); // Tulostaa: "Virhe: Sinun on oltava vähintään 18."
*/

function checkAge(age) {
  try {
    if (age < 18) {
      throw new Error("Sinun on oltava vähintään 18.");
    }
    console.log("Pääsy myönnetty.");
  } catch (error) {
    console.log("Virhe: " + error.message);
  }
}

checkAge(20); // Tulostaa: "Pääsy myönnetty."
checkAge(16); // Tulostaa: "Virhe: Sinun on oltava vähintään 18."

/* Tehtävä 6: Tallenna ja hae LocalStoragesta
/*
Tehtävä: Kirjoita funktio, joka tallentaa olion **LocalStorageen**.
         Hae se sitten takaisin ja käsittele virheet, jos JSON on virheellinen.

Testitapaukset:
saveUser({ name: "Alice", age: 25 }); // Tallentaa käyttäjän
console.log(getUser()); // Palauttaa tallennetun käyttäjäolion
localStorage.setItem("user", "{ invalid JSON }"); // Simuloi vioittunutta dataa
console.log(getUser()); // Kirjaa virheen ja palauttaa null
*/

function saveUser(user) {
  try {
    const json = JSON.stringify(user);
    localStorage.setItem("user", json);
  } catch (error) {
    console.log("Tallennusvirhe: " + error.message);
  }
}

function getUser() {
  try {
    const data = localStorage.getItem("user");
    return JSON.parse(data);
  } catch (error) {
    console.log("Virheellinen JSON-muoto");
    return null;
  }
}

const circularUser = {};
circularUser.self = circularUser;
saveUser(circularUser);
console.log(getUser());

saveUser({ name: "Alice", age: 25 });
console.log(getUser());

localStorage.setItem("user", "{ invalid JSON }");
console.log(getUser());

/* Tehtävä 7: Tarkista löytyykö ominaisuus oliosta
/*
Tehtävä: Jos ominaisuus puuttuu, tulosta `"Ominaisuutta ei löydy"`

Testitapaukset:
checkProperty({ name: "Bob", age: 30 }, "name"); // Tulostaa arvon
checkProperty({ name: "Bob", age: 30 }, "email"); // Tulostaa "Ominaisuutta ei löydy"
*/

function checkProperty(obj, key) {
  try {
    if (!(key in obj)) {
      throw new Error("Ominaisuutta ei löydy");
    }
    console.log(obj[key]);
  } catch (error) {
    console.log(error.message);
  }
}

checkProperty({ name: "Bob", age: 30 }, "name"); // Tulostaa arvon
checkProperty({ name: "Bob", age: 30 }, "email"); // Tulostaa "Ominaisuutta ei löydy"

/* Tehtävä 8: Fetch API -virheenkäsittely
/*
Tehtävä: Käytä `fetch()`-funktiota datan hakemiseen, käsittele virheet asianmukaisesti.

Testitapaukset:
fetchData("https://jsonplaceholder.typicode.com/users"); // Tulostaa API-datan
fetchData("invalid-url"); // Tulostaa verkkovirheen
*/

async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Virhe palvelimelta: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

fetchData("https://jsonplaceholder.typicode.com/users"); // Tulostaa API-datan
fetchData("invalid-url"); // Tulostaa verkkovirheen
fetchData("https://there_is_no.domain");

/* Tehtävä 9: Korjaa URI-virhe
/*
Tehtävä: Yritä dekoodata virheellinen URI-merkkijono.

Testitapaukset:
task9("https%3A%2F%2Fexample.com"); // Pitäisi dekoodata oikein
task9("%"); // Pitäisi kirjata URIError
*/

function task9(malformedURI) {
  try {
    const decoded = decodeURIComponent(malformedURI);
    console.log(decoded);
  } catch (error) {
    if (error instanceof URIError) {
      console.log("URIError: " + error.message);
    } else {
      console.log("Virhe: " + error.message);
    }
  }
}

task9("https%3A%2F%2Fexample.com"); // Tulostaa: https://example.com
task9("%");

/* Tehtävä 10: Tyhjennä LocalStorage
/*
Tehtävä: Varmista, että LocalStorage tyhjennetään turvallisesti.

Testitapaukset:
clearStorage(); // Pitäisi kirjata "LocalStorage tyhjennetty."
*/

function clearStorage() {
  try {
    localStorage.clear();
    console.log("LocalStorage tyhjennetty.");
  } catch (error) {
    console.log("Virhe LocalStoragea tyhjennettäessä: " + error.message);
  }
}

clearStorage();
