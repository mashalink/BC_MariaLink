/* Tehtävä 2
Muokkaa tehtävää 1: Käytä ES6 `class`-syntaksia `User`-luokan määrittelyyn.
Lisää metodi `changeEmail(newEmail)`, joka päivittää käyttäjän sähköpostiosoitteen.
*/

class UserES6 {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  showInfo() {
    return `Käyttäjänimi: ${this.username}, Sähköposti: ${this.email}`;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

const user = new UserES6("anna123", "anna@example.com");

function showUserInfo() {
  document.getElementById("userInfo").textContent = user.showInfo();
}

function showNewUserInfo() {
  user.changeEmail("new_anna@example.com");
  document.getElementById("userNewInfo").textContent = user.showInfo();
}
