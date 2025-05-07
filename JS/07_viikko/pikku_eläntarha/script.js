const type = document.getElementById("filterType");
const searchAnimals = document.getElementById("searchAnimal");

const animals = [
  // Nisäkkäät (Млекопитающие)
  { name: "Karhu", type: "Nisäkäs", newAnimal: false },
  { name: "Susi", type: "Nisäkäs", newAnimal: false },
  { name: "Hirvi", type: "Nisäkäs", newAnimal: false },
  { name: "Siili", type: "Nisäkäs", newAnimal: false },
  { name: "Ilves", type: "Nisäkäs", newAnimal: false },

  // Linnut (Птицы)
  { name: "Varis", type: "Lintu", newAnimal: false },
  { name: "Pöllö", type: "Lintu", newAnimal: false },
  { name: "Joutsen", type: "Lintu", newAnimal: false },
  { name: "Pääskynen", type: "Lintu", newAnimal: false },
  { name: "Käki", type: "Lintu", newAnimal: false },

  // Matelijat (Рептилии)
  { name: "Kyy", type: "Matelija", newAnimal: false },
  { name: "Vaskitsa", type: "Matelija", newAnimal: false },
  { name: "Sisilisko", type: "Matelija", newAnimal: false },
  { name: "Konna", type: "Matelija", newAnimal: false },
  { name: "Boa", type: "Matelija", newAnimal: false },

  // Sammakkoeläimet (Земноводные)
  { name: "Rana temporaria", type: "Sammakkoeläin", newAnimal: false },
  { name: "Viitasammakko", type: "Sammakkoeläin", newAnimal: false },
  { name: "Rupikonna", type: "Sammakkoeläin", newAnimal: false },
  { name: "Salamanderi", type: "Sammakkoeläin", newAnimal: false },
  { name: "Tritoni", type: "Sammakkoeläin", newAnimal: false },

  // Kalat (Рыбы)
  { name: "Ahven", type: "Kala", newAnimal: false },
  { name: "Hauki", type: "Kala", newAnimal: false },
  { name: "Lohi", type: "Kala", newAnimal: false },
  { name: "Made", type: "Kala", newAnimal: false },
  { name: "Särki", type: "Kala", newAnimal: false },
];

const animalTypes = [
  { singular: "Kaikki", plural: "Kaikki eläimet" },
  { singular: "Nisäkäs", plural: "Nisäkkäät" },
  { singular: "Lintu", plural: "Linnut" },
  { singular: "Matelija", plural: "Matelijat" },
  { singular: "Sammakkoeläin", plural: "Sammakkoeläimet" },
  { singular: "Kala", plural: "Kalat" },
];

const displayAnimals = (searchText, type, sort) => {
  const list = document.getElementById("animalList");
  const newArray = animals.filter(
    (animal) =>
      (animal.type === type || type === "Kaikki") &&
      animal.name.toLowerCase().startsWith(searchText.toLowerCase())
  );
  if (sort) {
    newArray.sort((a, b) =>
      a.name.localeCompare(b.name, "fi", { sensitivity: "base" })
    );
  }

  if (newArray.length != 0) {
    list.innerHTML = "";
    newArray.forEach((animal) => {
      const container = document.createElement("li");

      const addEl = document.createElement("p");
      addEl.textContent = `Name: ${animal.name} - Type: ${animal.type}`;
      container.appendChild(addEl);
      if (animal.newAnimal) {
        container.classList.add("newAnimal");
      }

      const poisBtn = document.createElement("button");
      poisBtn.textContent = "Pois";
      poisBtn.onclick = () => {
        const index = animals.findIndex((a) => a.name === animal.name);
        if (index !== -1) {
          animals.splice(index, 1);
        }

        displayAnimals(searchText, type, sort);
      };
      container.appendChild(poisBtn);
      list.appendChild(container);

      container.classList.add("animal-item");
    });
  } else list.innerHTML = "<p>Eläimiä ei löytynyt.</p>";
};

displayAnimals("", "Kaikki", false);

type.addEventListener("change", function (event) {
  displayAnimals(searchAnimals.value, type.value, false);
});

const sortAnimals = () => {
  const selectedValue = type.value;
  displayAnimals("", selectedValue, true);
};

const addAnimal = () => {
  const newName = document.getElementById("newAnimalName").value;
  const newType = document.getElementById("newAnimalType").value;

  const matchedType = animalTypes.find((type) => type.plural === newType);

  if (newName.trim() !== "") {
    const foundAnimal = animals.find((animal) => animal.name === newName);

    if (foundAnimal) {
      alert("Tämä eläin on jo listalla.");
    } else {
      animals.push({
        name: newName,
        type: matchedType.singular,
        newAnimal: true,
      });
      displayAnimals(searchAnimals.value, type.value, false);
    }
    document.getElementById("newAnimalName").value = "";
  }
};

searchAnimals.addEventListener("input", function (event) {
  displayAnimals(searchAnimals.value, type.value, false);
});

const displayType = () => {
  const list1 = document.getElementById("filterType");
  const list2 = document.getElementById("newAnimalType");

  list1.innerHTML = "";
  list2.innerHTML = "";

  animalTypes.forEach((type) => {
    const containerSingular = document.createElement("option");
    containerSingular.value = `${type.singular}`;
    containerSingular.textContent = `${type.singular}`;
    list1.appendChild(containerSingular);

    if (type.plural !== "Kaikki eläimet") {
      const containerPlural = document.createElement("option");
      containerPlural.value = `${type.plural}`;
      containerPlural.textContent = `${type.plural}`;
      list2.appendChild(containerPlural);
    }
  });
};

const addType = () => {
  const newType = document.getElementById("newType").value;
  const newTypes = document.getElementById("newTypes").value;

  if (newType.trim() !== "" && newTypes.trim() !== "") {
    const foundType = animalTypes.find(
      (type) =>
        type.singular === newType ||
        type.singular === newTypes ||
        type.plural === newType ||
        type.plural === newTypes
    );

    if (foundType) {
      alert("Tämä type on jo listalla.");
    } else {
      animalTypes.push({ singular: newType, plural: newTypes });
      displayType();
    }
  }
  document.getElementById("newType").value = "";
  document.getElementById("newTypes").value = "";
};

displayType();
