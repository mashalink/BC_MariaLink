/* 
Luo lomake, jossa on pakolliset nimi- ja sähköpostikentät.
Kirjoita JavaScript-koodi, joka:
- Estää lomakkeen lähetyksen, jos jompikumpi kenttä on tyhjä.
- Näyttää virheilmoituksen, jos kenttiä on tyhjänä.
*/

function submitForm() {
  document
    .getElementById("registrationForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;

      let formValid = true;

      if (firstName.trim() === "") {
        document.getElementById("firstNameError").textContent =
          "Please enter your first name.";
        formValid = false;
      }

      if (lastName.trim() === "") {
        document.getElementById("lastNameError").textContent =
          "Please enter your last name.";
        formValid = false;
      }

      if (email.trim() === "") {
        document.getElementById("emailError").textContent =
          "Please enter your email.";
        formValid = false;
      } else if (!validateEmail(email)) {
        document.getElementById("emailError").textContent =
          "Please enter a valid email address.";
        formValid = false;
      }

      if (formValid) {
        alert("Form submitted successfully!");
        document.getElementById("registrationForm").submit();
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("email").value = "";
      }
    });

  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  }
}

submitForm();
