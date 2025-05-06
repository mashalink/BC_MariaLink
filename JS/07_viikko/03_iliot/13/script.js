/* Tehtävä 13
Luo olio `timer`, jolla on `seconds` ja metodi `start()`, joka laskee sekunteja ylöspäin.
Näytä ajastin HTML-elementissä ja päivitä se sekunnin välein.
*/

const timer = {
  seconds: 0,
  intervalId: null,

  start() {
    if (this.intervalId === null) {
      // Проверяем, что таймер ещё не запущен
      this.intervalId = setInterval(() => {
        this.seconds += 1;
        this.updateDisplay();
      }, 1000);
    }
  },

  updateDisplay() {
    const display = document.getElementById("timerDisplay");
    display.textContent = this.seconds;
  },

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  },

  reset() {
    this.stop();
    this.seconds = 0;
    this.updateDisplay();
  },
};

function startTimer() {
  timer.start();
}

function stopTimer() {
  timer.stop();
}

function resetTimer() {
  timer.reset();
}
