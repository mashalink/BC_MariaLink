/* Tehtävä 1
Luo konstruktori-funktio `User`, joka ottaa parametreina `username` ja `email`.
Sen tulee luoda olio, jolla on nämä ominaisuudet sekä metodi `showInfo`, joka tulostaa käyttäjän tiedot.
Luo uusi käyttäjä ja kutsu `showInfo()`.
*/

function User(username, email) {
  this.username = username;
  this.email = email;
  this.showInfo = function () {
    return `Käyttäjänimi: ${this.username}, Sähköposti: ${this.email}`;
  };
}

const user = new User("maija123", "maija@example.com");

function showUserInfo() {
  document.getElementById("userInfo").textContent = user.showInfo();
}
