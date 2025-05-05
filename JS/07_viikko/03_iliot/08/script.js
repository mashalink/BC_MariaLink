/* Tehtävä 8
Luo konstruktori-funktio `Car`, joka ottaa `brand`, `model` ja `year`.
Lisää konstruktoriin metodi `age()`, joka laskee auton iän.
Luo uusi `Car`-olio ja näytä sen ikä verkkosivulla.
*/

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.age = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  };

  this.showInfo = function () {
    const str = document.getElementById("newCar");

    str.innerHTML = `Brand: ${this.brand}, Model: ${this.model}, Year: ${
      this.year
    }, Age: ${this.age()} years`;
  };
}

function addCar() {
  const car = new Car(
    document.getElementById("brand").value,
    document.getElementById("model").value,
    document.getElementById("year").value
  );

  car.showInfo();
}
