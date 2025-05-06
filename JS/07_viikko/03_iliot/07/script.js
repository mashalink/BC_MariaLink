/* Tehtävä 7
Luo olio `weatherApp`, jossa on metodi `fetchWeather(city)`.
Käytä `fetch`-funktiota hakeaksesi säätietoja API:sta ja näytä ne HTML-elementissä.
(API: OpenWeather tai jokin muu ilmainen sää-API)
*/

const weatherApp = {
  async fetchWeather(city) {
    try {
      // Vaihe 1: Hae kaupungin koordinaatit
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          city
        )}&count=1`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        document.getElementById("weather").textContent = "City not found.";
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // Vaihe 2: Hae säätiedot koordinaattien perusteella
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      const weather = weatherData.current_weather;

      // Näytä tulokset
      document.getElementById("weather").innerHTML = `
        <h3>Weather in ${name}, ${country}</h3>
        <p>Temperature: ${weather.temperature}°C</p>
        <p>Windspeed: ${weather.windspeed} km/h</p>
        <p>Condition code: ${weather.weathercode}</p>
      `;
    } catch (error) {
      console.error("Error fetching weather:", error);
      document.getElementById("weather").textContent = "Error fetching data.";
    }
  },
};

function getWeather() {
  const city = document.getElementById("city").value;
  if (city.trim() !== "") {
    weatherApp.fetchWeather(city);
  }
}
