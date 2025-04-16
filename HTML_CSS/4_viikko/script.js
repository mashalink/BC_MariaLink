function showMessage(text, type) {
  const messageEl = document.getElementById("message");
  messageEl.textContent = text;
  messageEl.className = "message " + type;
  messageEl.style.display = "block";

  setTimeout(() => {
    messageEl.style.display = "none";
  }, 5000);
}

function submitForm() {
  document
    .getElementById("registrationForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      [
        "firstNameError",
        "lastNameError",
        "emailError",
        "passwordError",
        "confirmPasswordError",
      ].forEach((id) => {
        document.getElementById(id).textContent = "";
      });

      const firstName = document.getElementById("firstName").value.trim();
      const lastName = document.getElementById("lastName").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      let formValid = true;

      if (firstName === "") {
        document.getElementById("firstNameError").textContent =
          "Please enter your first name.";
        formValid = false;
      }

      if (lastName === "") {
        document.getElementById("lastNameError").textContent =
          "Please enter your last name.";
        formValid = false;
      }

      if (email === "") {
        document.getElementById("emailError").textContent =
          "Please enter your email.";
        formValid = false;
      } else if (!validateEmail(email)) {
        document.getElementById("emailError").textContent =
          "Please enter a valid email address.";
        formValid = false;
      }

      if (password === "") {
        document.getElementById("passwordError").textContent =
          "Please enter your password.";
        formValid = false;
      }

      if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").textContent =
          "Please enter your confirm password.";
        formValid = false;
      }

      if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent =
          "Passwords do not match.";
        formValid = false;
      }

      if (formValid && firstName === "Maria") {
        showMessage("Form submitted successfully!", "success");
        document.getElementById("registrationForm").reset();
        // document.getElementById("registrationForm").submit();
      }
    });

  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  }
}

submitForm();
