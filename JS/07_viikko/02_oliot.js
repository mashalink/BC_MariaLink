/* Tehtävä 1
Luo olio `weather`, jossa on ominaisuudet `temperature`, `humidity` ja `condition` (esim. "Aurinkoinen", "Sateinen").
Kirjoita funktio, joka tulostaa `"Ota sateenvarjo!"` jos sää on sateinen.
*/

const weatherList = [
  { temperature: 18, humidity: 70, condition: "Sateinen" },
  { temperature: 22, humidity: 50, condition: "Aurinkoinen" },
  { temperature: 16, humidity: 90, condition: "Sateinen" },
  { temperature: 25, humidity: 40, condition: "Pilvinen" },
  { temperature: 20, humidity: 60, condition: "Aurinkoinen" },
];

function checkWeather(weather) {
  weather.condition === "Sateinen"
    ? console.log("Ota sateenvarjo!")
    : console.log("Ei tarvitse sateenvarjoa.");
}

weatherList.forEach((day, index) => {
  console.log(`Päivä ${index + 1}:`);
  checkWeather(day);
});

/* Tehtävä 2
Määrittele olio nimeltä `shoppingCart`, joka sisältää taulukon tuotteista.
Jokaisella tuotteella on `name`, `price` ja `quantity`.
Kirjoita funktio, joka laskee kaikkien ostoskorin tuotteiden kokonaishinnan.
*/

const shoppingCart = {
  products: [
    { name: "Maito", price: 1.5, quantity: 2 },
    { name: "Leipä", price: 2.0, quantity: 1 },
    { name: "Juusto", price: 3.5, quantity: 1 },
    { name: "Kahvi", price: 4.2, quantity: 1 },
    { name: "Omena", price: 0.5, quantity: 6 },
  ],
};

function calculateTotalShoppingCart(products) {
  return products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
}

console.log(calculateTotalShoppingCart(shoppingCart.products));

/* Tehtävä 3
Luo taulukko nimeltä `restaurants`, jossa jokainen ravintola on olio, jolla on ominaisuudet `name`, `cuisineType` ja `rating`.
Kirjoita funktio, joka palauttaa vain ne ravintolat, joiden arvio on 4 tai enemmän.
*/

const restaurants = [
  { name: "Mama Italia", cuisineType: "Italialainen", rating: 4.5 },
  { name: "Sushi Master", cuisineType: "Japanilainen", rating: 4.8 },
  { name: "Curry House", cuisineType: "Intialainen", rating: 4.2 },
  { name: "Taco Fiesta", cuisineType: "Meksikolainen", rating: 4.0 },
  { name: "Nordic Bites", cuisineType: "Skandinaavinen", rating: 4.6 },
  { name: "Burger Bros", cuisineType: "Amerikkalainen", rating: 3.9 },
  { name: "Green Leaf", cuisineType: "Kasvisruoka", rating: 4.7 },
];

const goodRestaurant = (restaurants) => {
  return restaurants.filter((restaurant) => restaurant.rating >= 4);
};

console.log(goodRestaurant(restaurants));

/* Tehtävä 4
Määrittele olio nimeltä `bankAccount`, jossa on ominaisuudet `accountHolder`, `balance` ja `transactions` (numeroiden taulukko).
Kirjoita funktio, joka laskee kokonaissaldon kaikkien tapahtumien jälkeen.
*/

const bankAccount = {
  accountHolder: "Anna Virtanen",
  balance: 1500.0,
  transactions: [200, -50, -100, 500, -75],
};

function newBalance(account) {
  return account.transactions.reduce(
    (acc, transaction) => acc + transaction,
    account.balance
  );
}

console.log(newBalance(bankAccount));

/* Tehtävä 5
Luo taulukko `students`, jossa jokaisella opiskelijalla on `name`, `scores` (numeroiden taulukko) ja `averageScore` (aluksi null).
Kirjoita funktio, joka laskee ja päivittää kunkin opiskelijan `averageScore`-arvon.
*/

const students = [
  {
    name: "Emma",
    scores: [85, 90, 78],
    averageScore: null,
  },
  {
    name: "Leo",
    scores: [70, 88, 92],
    averageScore: null,
  },
  {
    name: "Aino",
    scores: [95, 94, 96],
    averageScore: null,
  },
  {
    name: "Olavi",
    scores: [60, 65, 70],
    averageScore: null,
  },
  {
    name: "Sara",
    scores: [88, 82, 91],
    averageScore: null,
  },
];

students.forEach((student) => {
  const sum = student.scores.reduce((total, score) => total + score, 0);
  student.averageScore = sum / student.scores.length;
});

students.forEach((student) => {
  console.log(
    `${student.name} has an average score of: ${student.averageScore.toFixed(
      2
    )}`
  );
});

/* Tehtävä 6
Määrittele taulukko nimeltä `courses`, jossa jokaisessa kurssissa on `courseName`, `instructor` ja `studentsEnrolled`.
Kirjoita funktio, joka tulostaa niiden kurssien nimet, joissa on yli 30 opiskelijaa.
*/

const courses = [
  {
    courseName: "JavaScript Basics",
    instructor: "Laura Niemi",
    studentsEnrolled: 35,
  },
  {
    courseName: "Frontend Development",
    instructor: "Mikko Salonen",
    studentsEnrolled: 30,
  },
  {
    courseName: "Backend with Node.js",
    instructor: "Emma Virtanen",
    studentsEnrolled: 20,
  },
  {
    courseName: "Data Structures & Algorithms",
    instructor: "Antti Koskinen",
    studentsEnrolled: 18,
  },
  {
    courseName: "React & Redux",
    instructor: "Sanna Lehtonen",
    studentsEnrolled: 32,
  },
];

function checkStudentsEnrolled(courses) {
  courses.forEach((course) => {
    if (course.studentsEnrolled > 30) {
      console.log(`${course.courseName}`);
    }
  });
}

checkStudentsEnrolled(courses);

/* Tehtävä 7
Luo olio `pet`, jossa on ominaisuudet `species`, `name` ja `isVaccinated`.
Kirjoita funktio, joka palauttaa `"Rokotusta tarvitaan"` jos lemmikkiä ei ole rokotettu.
*/

const pet = {
  species: "Koira",
  name: "Rex",
  isVaccinated: false,
};

function checkVaccination(pet) {
  if (!pet.isVaccinated) {
    return "Rokotusta tarvitaan";
  }
  return "";
}

console.log(checkVaccination(pet));

/* Tehtävä 8
Määrittele olio nimeltä `city`, jossa on ominaisuudet `name`, `population` ja `landmark`.
Kirjoita funktio, joka tulostaa `"Tämä on suuri kaupunki!"` jos väkiluku ylittää 1 000 000.
*/

const city = {
  name: "Helsinki",
  population: 1655281,
  landmark: "Suomenlinna",
};

function checkPopulation(city) {
  if (city.population > 1000000) {
    return "Tämä on suuri kaupunki!";
  }
  return "";
}

console.log(checkPopulation(city));

/* Tehtävä 9
Luo taulukko `transactions`, jossa jokainen tapahtuma on olio, jolla on `type` ("credit" tai "debit") ja `amount`.
Kirjoita funktio, joka laskee kokonaissaldon kaikkien tapahtumien jälkeen.
*/

const transactions = [
  { type: "credit", amount: 500 },
  { type: "debit", amount: 200 },
  { type: "credit", amount: 1200 },
  { type: "debit", amount: 50 },
  { type: "credit", amount: 350 },
  { type: "debit", amount: 700 },
];

const balance = (transactions) => {
  return transactions.reduce((total, transaction) => {
    return transaction.type === "credit"
      ? total + transaction.amount
      : total - transaction.amount;
  }, 0);
};

console.log(balance(transactions));

/* Tehtävä 10
Määrittele olio nimeltä `foxPack`, joka sisältää taulukon kettuolioita.
Jokaisella ketulla on `name`, `age` ja `furColor`.
Kirjoita funktio, joka suodattaa ja palauttaa vain ne ketut, jotka ovat alle 2-vuotiaita.
*/

const foxPack = {
  foxes: [
    { name: "Fenix", age: 4, furColor: "punainen" },
    { name: "Luna", age: 2, furColor: "harmaa" },
    { name: "Rex", age: 1, furColor: "valkoinen" },
    { name: "Nora", age: 5, furColor: "punainen" },
    { name: "Milo", age: 2, furColor: "ruskea" },
  ],
};

function filterYoungFoxes(pack) {
  return pack.foxes.filter((fox) => fox.age < 2);
}

console.log(filterYoungFoxes(foxPack));

/* Tehtävä 11
Luo olio nimeltä `gameCharacter`, jolla on ominaisuudet `name`, `level`, `health` ja `inventory` (taulukko).
Kirjoita funktio, joka tulostaa hahmon koko varustelistan.
*/

const gameCharacter = {
  name: "Luna",
  level: 7,
  health: 92,
  inventory: ["jousi", "nuolia", "taikajuoma", "kartta"],
};

function printInventory(character) {
  console.log(`${character.name}n varustelista:`);
  character.inventory.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
}

printInventory(gameCharacter);

/* Tehtävä 12
Määrittele taulukko nimeltä `employees`, jossa jokaisella työntekijällä on `name`, `role` ja `workingHours`.
Kirjoita funktio, joka etsii ja tulostaa ne työntekijät, jotka työskentelevät yli 40 tuntia viikossa.
*/

const employees = [
  { name: "Anna", role: "Myyjä", workingHours: 38 },
  { name: "Mikko", role: "Kassanhoitaja", workingHours: 40 },
  { name: "Laura", role: "Varastotyöntekijä", workingHours: 35 },
  { name: "Jari", role: "Esimies", workingHours: 42 },
  { name: "Sanna", role: "Asiakaspalvelija", workingHours: 37 },
  { name: "Antti", role: "Siivooja", workingHours: 30 },
  { name: "Emilia", role: "Turvamies", workingHours: 39 },
];

const workALot = (employees) => {
  return employees.filter((employee) => employee.workingHours > 40);
};

console.log(workALot(employees));

/* Tehtävä 13
Luo taulukko `musicAlbums`, jossa jokaisella albumilla on `title`, `artist` ja `releaseYear`.
Kirjoita funktio, joka tulostaa ne albumit, jotka on julkaistu vuoden 2000 jälkeen.
*/

const musicAlbums = [
  { title: "Abbey Road", artist: "The Beatles", releaseYear: 1969 },
  { title: "Thriller", artist: "Michael Jackson", releaseYear: 1982 },
  { title: "Back to Black", artist: "Amy Winehouse", releaseYear: 2006 },
  { title: "Nevermind", artist: "Nirvana", releaseYear: 1991 },
  { title: "25", artist: "Adele", releaseYear: 2015 },
  {
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    releaseYear: 1973,
  },
  { title: "1989", artist: "Taylor Swift", releaseYear: 2014 },
];

function printAlbumsAfter2000(albums) {
  const filtered = albums.filter((album) => album.releaseYear > 2000);
  filtered.forEach((album) => {
    console.log(`${album.title}`);
  });
}

printAlbumsAfter2000(musicAlbums);

/* Tehtävä 14
Määrittele taulukko nimeltä `cars`, jossa jokaisella autolla on `brand`, `model` ja `horsepower`.
Kirjoita funktio, joka etsii ja palauttaa auton, jolla on suurin hevosvoimamäärä.
*/

const cars = [
  { brand: "Toyota", model: "Corolla", horsepower: 132 },
  { brand: "BMW", model: "M3", horsepower: 473 },
  { brand: "Audi", model: "A4", horsepower: 201 },
  { brand: "Ford", model: "Mustang", horsepower: 450 },
  { brand: "Tesla", model: "Model S", horsepower: 1020 },
  { brand: "Chevrolet", model: "Camaro", horsepower: 275 },
];

const biggestHorsepower = (cars) => {
  return cars.reduce((biggest, car) => {
    return biggest > car.horsepower ? biggest : car.horsepower;
  }, 0);
};

console.log(biggestHorsepower(cars));

/* Tehtävä 15
Luo taulukko `airports`, jossa jokaisella lentokentällä on `name`, `country` ja `flightsPerDay`.
Kirjoita funktio, joka etsii lentokentän, jolla on eniten lentoja päivässä.
*/

const airports = [
  { name: "Helsinki-Vantaa", country: "Suomi", flightsPerDay: 350 },
  { name: "Los Angeles International", country: "USA", flightsPerDay: 800 },
  { name: "London Heathrow", country: "Iso-Britannia", flightsPerDay: 900 },
  {
    name: "Dubai International",
    country: "Yhdistyneet Arabiemiirikunnat",
    flightsPerDay: 1200,
  },
  { name: "Tokyo Narita", country: "Japani", flightsPerDay: 400 },
];

const airportWithMostFlights = (airports) => {
  return airports.reduce((maxAirport, airport) => {
    return maxAirport > airport.flightsPerDay
      ? maxAirport
      : airport.flightsPerDay;
  }, 0);
};

console.log(airportWithMostFlights(airports));
