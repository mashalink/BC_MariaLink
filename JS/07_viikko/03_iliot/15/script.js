const foxTracker = {
  foxes: [],

  addFox(name, location) {
    if (name.trim() !== "" && location.trim() !== "") {
      this.foxes.push({ name, location });
    }
  },

  displayFoxes() {
    const list = document.getElementById("foxList");
    list.innerHTML = "";

    this.foxes.forEach((fox) => {
      const container = document.createElement("div");

      const nameEl = document.createElement("p");
      nameEl.textContent = `Name: ${fox.name}`;
      container.appendChild(nameEl);

      const locationEl = document.createElement("p");
      locationEl.textContent = `Location: ${fox.location}`;
      container.appendChild(locationEl);

      list.appendChild(container);
    });
  },
};

function addFox() {
  const name = document.getElementById("foxName").value;
  const location = document.getElementById("foxLocation").value;
  foxTracker.addFox(name, location);
  foxTracker.displayFoxes();

  document.getElementById("foxName").value = "";
  document.getElementById("foxLocation").value = "";
}
