/* Tehtävä 1
Luo JavaScript-taulukko nimeltä `library`, joka edustaa kirjakokoelmaa.
Jokaisella kirjalla tulee olla ominaisuudet `title` (otsikko), `author` (kirjoittaja) ja `yearPublished` (julkaisuvuosi).
Lisää kokoelmaan vähintään kaksi kirjaoliota.
*/

const library = [
  {
    title: "Kuolema ja Pingviini",
    author: " Kurkov, Andrei",
    yearPublished: 1996,
  },
  {
    title: "Nevermoor: Morriganin koetukset",
    author: "Townsend, Jessica",
    yearPublished: 2008,
  },
  {
    title: "Tuntematon sotilas",
    author: "Väinö Linna",
    yearPublished: 1954,
  },
  {
    title: "Seitsemän veljestä",
    author: "Aleksis Kivi",
    yearPublished: 1870,
  },
];

/* Tehtävä 2
Hae `library`-kokoelman ensimmäisen kirjan `title` ja tulosta se konsoliin.
Muokkaa toisen kirjan `yearPublished` uudeksi vuodeksi ja tulosta päivitetty kirja konsoliin.
*/

console.log(library[0].title);
library[1].yearPublished = 2005;
console.log(library[1].yearPublished);

/* Tehtävä 3
Käytä piste-notaatiota lisätäksesi uuden ominaisuuden `genres` (merkkijonotaulukko) ensimmäiseen kirjaan `library`-taulukossa.
Käytä hakasulkunotaatiota lisätäksesi boolean-tyyppisen ominaisuuden `isAvailable`, joka kertoo onko kirja saatavilla.
*/
library[0].genres = ["Satire", "Dark Comedy", "Drama"];
library[0]["isAvailable"] = true;

/* Tehtävä 4
Määrittele konstruktori-funktio nimeltä `Book`, joka luo uusia kirjoja, joilla on `title`, `author`, `yearPublished` ja `genres`.
Luo uusi kirjaolio `Book`-konstruktorilla ja lisää se `library`-kokoelmaan.
*/

class Book {
  constructor(title, author, yearPublished, genres) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.genres = genres;
  }
}

const newBook = new Book("Kuolema ja Pingviini", "Kurkov, Andrei", 1996, [
  "Satire",
  "Dark Comedy",
  "Drama",
]);

/* Tehtävä 5
Kirjoita funktio nimeltä `createBook`, joka ottaa parametreina `title`, `author`, `yearPublished` ja `genres` (taulukko).
Funktion tulee palauttaa uusi kirjaolio näillä ominaisuuksilla.
Testaa `createBook`-funktiota luomalla uusi kirja käyttäjän antamilla arvoilla ja tulosta se konsoliin.
*/

function createBook(title, author, yearPublished, genres) {
  return {
    title: title,
    author: author,
    yearPublished: yearPublished,
    genres: genres,
  };
}

const userBook = createBook("The Hobbit", "Tolkien, J.R.R.", 1937, [
  "Fantasy",
  "Adventure",
]);

/* Tehtävä 6
Muunna `library`-kokoelma JSON-merkkijonoksi ja tulosta se konsoliin.
Jäsennä JSON-merkkijono takaisin JavaScript-olioksi ja tulosta ensimmäisen kirjan `title` konsoliin.
*/

const jsonString = JSON.stringify(library);
console.log(jsonString);

const parsedLibrary = JSON.parse(jsonString);
console.log(parsedLibrary[0].title);

/* Tehtävä 7
Luo taulukko nimeltä `students`, jossa jokaisella oppilaalla on `name`, `age` ja `grade`.
Tulosta niiden oppilaiden nimet, joiden arvosana on yli 90.
*/

const students = [
  {
    name: "Anna",
    age: 22,
    grade: 92,
  },
  {
    name: "Mikko",
    age: 24,
    grade: 85,
  },
  {
    name: "Kaisa",
    age: 21,
    grade: 78,
  },
  {
    name: "Janne",
    age: 23,
    grade: 60,
  },
  {
    name: "Laura",
    age: 20,
    grade: 88,
  },
];

console.log(students.filter((student) => student.grade > 90));

/* Tehtävä 8
Määrittele olio nimeltä `car`, jossa on ominaisuudet `brand`, `model`, `year` ja `isElectric`.
Käytä funktiota tarkistamaan onko auto sähköinen. Jos on, tulosta `"This car is eco-friendly!"`, muussa tapauksessa `"This car runs on fuel."`
*/

const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2022,
  isElectric: true,
};

function isElectricCar(car) {
  car.isElectric
    ? console.log("This car is eco-friendly!")
    : console.log("This car runs on fuel.");
}

isElectricCar(car);

/* Tehtävä 9
Luo `movies`-taulukko, jossa jokainen elokuva on olio, jolla on ominaisuudet `title`, `director` ja `rating`.
Kirjoita silmukka, joka tulostaa kaikkien niiden elokuvien otsikot, joiden arvio on yli 8.
*/

const movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    rating: 8.8,
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    rating: 9.0,
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    rating: 8.9,
  },
  {
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    rating: 8.7,
  },
  {
    title: "Fight Club",
    director: "David Fincher",
    rating: 8.8,
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    rating: 8.8,
  },
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    rating: 9.3,
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    rating: 8.6,
  },
  // Добавляем фильмы с низким рейтингом
  {
    title: "Movie A",
    director: "Director A",
    rating: 4.5,
  },
  {
    title: "Movie B",
    director: "Director B",
    rating: 5.2,
  },
  {
    title: "Movie C",
    director: "Director C",
    rating: 6.1,
  },
  {
    title: "Movie D",
    director: "Director D",
    rating: 3.8,
  },
  {
    title: "Movie E",
    director: "Director E",
    rating: 7.0,
  },
];

console.log(movies.filter((movie) => movie.rating > 8));

/* Tehtävä 10
Kirjoita funktio `findOldestCar`, joka ottaa vastaan taulukon auto-olioita ja palauttaa auton, jolla on varhaisin `year`.
*/

const cars = [
  { brand: "Tesla", model: "Model 3", year: 2022, isElectric: true },
  { brand: "Ford", model: "Model T", year: 1908, isElectric: false },
  { brand: "Chevrolet", model: "Chevelle", year: 1964, isElectric: false },
  { brand: "BMW", model: "i8", year: 2014, isElectric: true },
  { brand: "Mercedes-Benz", model: "S-Class", year: 2021, isElectric: false },
  { brand: "Nissan", model: "Leaf", year: 2010, isElectric: true },
  { brand: "Audi", model: "Q7", year: 2005, isElectric: false },
  { brand: "Porsche", model: "Taycan", year: 2020, isElectric: true },
  { brand: "Honda", model: "Civic", year: 1995, isElectric: false },
  { brand: "Toyota", model: "Prius", year: 1997, isElectric: true },
  { brand: "Jaguar", model: "I-PACE", year: 2018, isElectric: true },
  { brand: "Ford", model: "Mustang", year: 1965, isElectric: false },
  { brand: "Cadillac", model: "CT6", year: 2017, isElectric: false },
  { brand: "Buick", model: "LaCrosse", year: 2013, isElectric: false },
  { brand: "Chevrolet", model: "Bolt EV", year: 2017, isElectric: true },
];

const findOldestCar = (cars) => {
  return cars.reduce((oldest, current) => {
    return current.year < oldest.year ? current : oldest;
  });
};

console.log(findOldestCar(cars));

/* Tehtävä 11
Määrittele `userProfiles`-taulukko, joka sisältää käyttäjäolioita.
Jokaisella käyttäjällä tulee olla `username`, `email` ja `isAdmin` -ominaisuudet.
Kirjoita funktio, joka suodattaa ja palauttaa vain ne käyttäjät, jotka ovat ylläpitäjiä.
*/

const userProfiles = [
  {
    username: "john_doe",
    email: "john.doe@example.com",
    isAdmin: false,
  },
  {
    username: "alice_smith",
    email: "alice.smith@example.com",
    isAdmin: true,
  },
  {
    username: "bob_jones",
    email: "bob.jones@example.com",
    isAdmin: false,
  },
  {
    username: "charlie_brown",
    email: "charlie.brown@example.com",
    isAdmin: false,
  },
  {
    username: "eva_white",
    email: "eva.white@example.com",
    isAdmin: true,
  },
];

const isAdmin = (users) => {
  return users.filter((user) => user.isAdmin === true);
};

console.log(isAdmin(userProfiles));

/* Tehtävä 12
Määrittele taulukko nimeltä `orders`, jossa jokaisella tilauksella on `orderId`, `customerName`, `totalAmount` ja `status` ("pending" tai "completed").
Kirjoita funktio, joka palauttaa vain valmiit tilaukset.
*/

const orders = [
  {
    orderId: 1,
    customerName: "John Doe",
    totalAmount: 120.5,
    status: "completed",
  },
  {
    orderId: 2,
    customerName: "Alice Smith",
    totalAmount: 55.3,
    status: "pending",
  },
  {
    orderId: 3,
    customerName: "Bob Johnson",
    totalAmount: 200.0,
    status: "completed",
  },
  {
    orderId: 4,
    customerName: "Charlie Brown",
    totalAmount: 75.2,
    status: "pending",
  },
  {
    orderId: 5,
    customerName: "David Williams",
    totalAmount: 300.0,
    status: "completed",
  },
  {
    orderId: 6,
    customerName: "Eva White",
    totalAmount: 40.1,
    status: "pending",
  },
  {
    orderId: 7,
    customerName: "Grace Lee",
    totalAmount: 150.75,
    status: "completed",
  },
  {
    orderId: 8,
    customerName: "Hannah Martin",
    totalAmount: 99.99,
    status: "pending",
  },
  {
    orderId: 9,
    customerName: "Jack Taylor",
    totalAmount: 180.25,
    status: "completed",
  },
  {
    orderId: 10,
    customerName: "Sophia Brown",
    totalAmount: 250.6,
    status: "pending",
  },
];

const isComleted = (orders) => {
  return orders.filter((order) => order.status == "completed");
};

console.log(isComleted(orders));

/* Tehtävä 13
Luo olio nimeltä `smartphone`, jolla on ominaisuudet `brand`, `model`, `batteryLife` ja `is5GEnabled`.
Kirjoita funktio, joka tulostaa `"This phone supports 5G!"` jos `is5GEnabled` on `true`, muussa tapauksessa tulostaa `"This phone does not support 5G."`
*/

const smartphone1 = {
  brand: "Samsung",
  model: "Galaxy S23",
  batteryLife: "24h",
  is5GEnabled: true,
};

const smartphone2 = {
  brand: "Nokia",
  model: "3310",
  batteryLife: "72h",
  is5GEnabled: false,
};

function is5GEnabledPhone(smartphone) {
  smartphone.is5GEnabled
    ? console.log("This phone supports 5G!")
    : console.log("This phone does not support 5G");
}

is5GEnabledPhone(smartphone1);
is5GEnabledPhone(smartphone2);

/* Tehtävä 14
Määrittele olio nimeltä `fox`, jolla on ominaisuudet `name`, `age` ja `habitat`.
Kirjoita funktio, joka tulostaa `"This fox is young"` jos ikä on alle 3, ja `"This fox is an adult"` jos 3 tai enemmän.
*/

const fox1 = {
  name: "Ruby",
  age: 2,
  habitat: "forest",
};

const fox2 = {
  name: "Blaze",
  age: 5,
  habitat: "mountains",
};

function isYoungFox(fox) {
  fox.age < 3
    ? console.log("This fox is young")
    : console.log("This fox is an adult");
}

isYoungFox(fox1);
isYoungFox(fox2);

/* Tehtävä 15
Määrittele taulukko nimeltä `employees`, jossa jokaisella työntekijällä on `name`, `position` ja `salary`.
Kirjoita funktio, joka laskee kaikkien työntekijöiden yhteenlasketun palkan.
*/

const employees = [
  {
    name: "Anna Virtanen",
    position: "Software Engineer",
    salary: 4500,
  },
  {
    name: "Mikko Laine",
    position: "Project Manager",
    salary: 5200,
  },
  {
    name: "Kaisa Niemi",
    position: "UX Designer",
    salary: 4000,
  },
  {
    name: "Jari Mäkelä",
    position: "Data Analyst",
    salary: 4700,
  },
  {
    name: "Laura Korhonen",
    position: "HR Specialist",
    salary: 3800,
  },
  {
    name: "Antti Salmi",
    position: "DevOps Engineer",
    salary: 4900,
  },
  {
    name: "Emilia Ranta",
    position: "Marketing Coordinator",
    salary: 3600,
  },
];

function calculateTotalSalary(employees) {
  return employees.reduce((total, employee) => total + employee.salary, 0);
}

console.log(calculateTotalSalary(employees));
