/* Tehtävä 1
Tallenna merkkijono `"Hello, LocalStorage!"` LocalStorageen avaimella `"message"`.
Hae se ja tulosta konsoliin.
*/

localStorage.setItem("message", "Hello, LocalStorage!");

const message = localStorage.getItem("message");

console.log(message);

/* Tehtävä 2
Luo olio `userSettings`, jossa on:
- `theme` ("dark" tai "light")
- `language` ("English", "Spanish" jne.)

Muunna se JSON-merkkijonoksi ja tallenna LocalStorageen.
Hae se, pura JSON ja tulosta `theme`-ominaisuus.
*/

const userSettings = {
  theme: "dark",
  language: "English",
};

localStorage.setItem("userSettings", JSON.stringify(userSettings));

const savedSettingsString = localStorage.getItem("userSettings");

const savedSettings = JSON.parse(savedSettingsString);

console.log(savedSettings.theme);

/* Tehtävä 3
Määrittele taulukko `favoriteBooks`, jossa on vähintään kolme kirjaoliota (`title` ja `author`).
Tallenna taulukko LocalStorageen.
Hae ja pura se, sitten tulosta kaikkien kirjojen nimet.
*/

const favoriteBooks = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
  },
  {
    title: "1984",
    author: "George Orwell",
  },
];

localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));

const savedfavoriteBooksString = localStorage.getItem("favoriteBooks");
const savedfavoriteBooks = JSON.parse(savedfavoriteBooksString);

savedfavoriteBooks.forEach((book) => {
  console.log(book.title);
});

/* Tehtävä 4
Kirjoita funktio `saveToLocalStorage(key, object)`, joka:
- Muuntaa olion JSONiksi.
- Tallentaa sen LocalStorageen annetulla avaimella.
Testaa tallentamalla olio ja hakemalla se.
*/

const saveToLocalStorage = (key, object) => {
  localStorage.setItem(key, JSON.stringify(object));
};

const testObject = [
  { name: "Maria", login: "Mari" },
  { name: "New", login: "Guest" },
];

saveToLocalStorage("test", testObject);

const savedString = localStorage.getItem("test");
const savedObject = JSON.parse(savedString);

console.log(savedObject);

/* Tehtävä 5
Kirjoita funktio `getFromLocalStorage(key)`, joka:
- Hakee arvon LocalStoragesta.
- Purkaa sen jos se on JSON.
- Tulostaa haetun arvon.
*/

const getFromLocalStorage = (key) => {
  const getObject = localStorage.getItem(key);

  try {
    const savedObject = JSON.parse(getObject);
    console.log(savedObject);
  } catch (error) {
    console.log(getObject);
  }
};

getFromLocalStorage("message");
getFromLocalStorage("test");

/* Tehtävä 6
Luo olio `userProfile`, jossa on:
- `username`
- `email`
- `preferences` (olio, jossa on `theme` ja `notifications`)

Tallenna se LocalStorageen.
Hae se ja päivitä `theme` arvoksi `"dark mode"`, sitten tulosta päivitetty olio.
*/

const userProfile = {
  username: "exampleUser",
  email: "user@example.com",
  preferences: {
    theme: "dark",
    notifications: true,
  },
};

localStorage.setItem("userProfile", JSON.stringify(userProfile));

const savedUserProfileString = localStorage.getItem("userProfile");
const savedUserProfile = JSON.parse(savedUserProfileString);

savedUserProfile.preferences.theme = "dark mode";

localStorage.setItem("userProfile", JSON.stringify(savedUserProfile));

console.log(savedUserProfile);

/* Tehtävä 7
Määrittele olio `shoppingList`, jossa on taulukko `items` (merkkijonoja).
Tallenna se LocalStorageen.
Kirjoita funktio `addItemToList(item)`, joka:
- Hakee `shoppingList` LocalStoragesta.
- Lisää uuden tuotteen.
- Tallentaa päivitetyn listan takaisin LocalStorageen.
- Tulostaa päivitetyn listan.
*/

const shoppingList = {
  items: ["Milk", "Bread", "Eggs", "Cheese", "Apples"],
};

localStorage.setItem("shoppingList", JSON.stringify(shoppingList));

const addItemToList = (item) => {
  const listString = localStorage.getItem("shoppingList");
  const list = JSON.parse(listString);

  list.items.push(item);
  localStorage.setItem("shoppingList", JSON.stringify(list));

  console.log(list.items);
};

addItemToList("Beer");

/* Tehtävä 8
Luo olio `counter`, jossa on:
- `count` (alkaa arvosta 0)
Tallenna se LocalStorageen.
Kirjoita funktio `incrementCounter()`, joka:
- Hakee counterin.
- Kasvattaa `count` arvoa yhdellä.
- Tallentaa päivitetyn counterin.
- Tulostaa uuden arvon.
*/

const counter = {
  count: 0,
};

localStorage.setItem("counter", JSON.stringify(counter));

const incrementCounter = () => {
  const counterString = localStorage.getItem("counter");
  const newcounter = JSON.parse(counterString);

  newcounter.count++;
  localStorage.setItem("counter", JSON.stringify(newcounter));

  console.log(newcounter.count);
};

incrementCounter();
incrementCounter();
incrementCounter();

/* Tehtävä 9
Luo taulukko `tasks`, jossa jokainen tehtävä on olio (`id`, `description`, `completed`).
Tallenna se LocalStorageen.
Kirjoita funktio `markTaskComplete(taskId)`, joka:
- Hakee `tasks` LocalStoragesta.
- Etsii annetulla ID:llä olevan tehtävän ja asettaa `completed` arvoksi `true`.
- Tallentaa päivitetyt tehtävät.
- Tulostaa päivitetyn listan.
*/

const tasks = [
  {
    id: 1,
    description: "Do the laundry",
    completed: false,
  },
  {
    id: 2,
    description: "Buy groceries",
    completed: true,
  },
  {
    id: 3,
    description: "Clean the house",
    completed: false,
  },
];

localStorage.setItem("tasks", JSON.stringify(tasks));

const markTaskComplete = (taskId) => {
  const tasksString = localStorage.getItem("tasks");
  const tasks = JSON.parse(tasksString);

  const taskToUpdate = tasks.find((task) => task.id === taskId);

  if (taskToUpdate) {
    taskToUpdate.completed = true;
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log(tasks);
};

markTaskComplete(1);

/* Tehtävä 10
Kirjoita funktio `clearLocalStorage()`, joka poistaa kaiken LocalStorageen tallennetun datan.
Kutsu funktiota ja varmista että LocalStorage on tyhjä.
*/

const clearLocalStorage = () => {
  localStorage.clear();
};

clearLocalStorage();
console.log(localStorage);
