/* Tehtävä 9
Luo taulukko `users`, jossa jokaisella käyttäjällä on `name` ja `score`.
Lisää HTML:ään painike, joka lajittelee käyttäjät pistemäärän mukaan laskevasti ja päivittää näkyvän listan.
*/

function User(name, score) {
  this.name = name;
  this.score = score;
}

const users = [];

function addUser() {
  const newUser = new User(
    document.getElementById("name").value,
    document.getElementById("score").value
  );
  users.push(newUser);
  if (users.length > 1) users.sort((a, b) => b.score - a.score);
  displayUsers();
}

function displayUsers() {
  const list = document.getElementById("usersList");
  list.innerHTML = "";

  users.forEach((user) => {
    const item = document.createElement("li");
    item.textContent = `${user.name} - ${user.score}`;
    list.appendChild(item);
  });
}
