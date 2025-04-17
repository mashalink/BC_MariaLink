let accountBalance = 1000;
let pinCode = "2003";
let isLoggedIn = false;

function allowOnlyDigits(id) {
  document.getElementById(id).addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
  });
}

["pin", "balance", "withdraw"].forEach(allowOnlyDigits);

function showBalance(flag) {
  if (flag) {
    document.getElementById("showBalance").textContent = `${accountBalance} €`;
    document.getElementById("showHeader").textContent = `Balance`;
  } else {
    document.getElementById("showBalance").textContent = ``;
    document.getElementById("showHeader").textContent = ``;
  }
}

function disableActions(flag) {
  document.getElementById("buttonDeposit").disabled = flag;
  document.getElementById("buttonWithdraw").disabled = flag;
}

function login() {
  document.getElementById("Login").addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("pinError").textContent = "";
    let pinInput = document.getElementById("pin");

    if (pinInput.value === pinCode) {
      pinInput.value = "";
      isLoggedIn = true;
      document.getElementById("pinError").textContent = "";
      document.getElementById("balance").value = "";
      document.getElementById("withdraw").value = "";
      showBalance(true);
      disableActions(false);
    } else {
      document.getElementById("pinError").textContent = "Wrong PIN";
      pinInput.value = "";
      document.getElementById("withdraw").value = "";
      document.getElementById("balance").value = "";
      isLoggedIn = true;
      showBalance(false);
      disableActions(true);
    }
  });
}

function deposit() {
  document
    .getElementById("buttonDeposit")
    .addEventListener("click", function () {
      if (!isLoggedIn) return;

      document.getElementById("errorBalance").textContent = "";
      let balanceInput = Number(document.getElementById("balance").value);

      if (balanceInput > 0) {
        accountBalance += balanceInput;
        showBalance(true);
        document.getElementById("balance").value = "";
      }
    });
}

function withdraw() {
  document
    .getElementById("buttonWithdraw")
    .addEventListener("click", function () {
      if (!isLoggedIn) return;

      document.getElementById("errorWithdraw").textContent = "";
      let withdrawInput = Number(document.getElementById("withdraw").value);

      if (withdrawInput <= accountBalance && withdrawInput > 0) {
        accountBalance -= withdrawInput;
        showBalance(true);
        document.getElementById("withdraw").value = "";
      } else {
        document.getElementById("errorWithdraw").textContent =
          "Not enough balance";
        document.getElementById("withdraw").value = "";
      }
    });
}

function initATM() {
  disableActions(true);
  login();
  deposit();
  withdraw();
}

initATM();
