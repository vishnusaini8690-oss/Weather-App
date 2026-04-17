const APIKey = '9e1ac06a6f72dc48dc80d70b4f040583';

async function getWeather() {
  const city = document.getElementById("cityInput").value;

  if (!city) return alert("Enter city name");

  const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${APIKey}`;

  try {
    const res = await fetch(APIURL);
    const data = await res.json();

    if (data.cod !== 200) {
      alert("City not found");
      return;
    }

    document.getElementById("city").innerText = data.name;
    document.getElementById("temp").innerText = Math.round(data.main.temp) + "°C";
    document.getElementById("desc").innerText = data.weather[0].description;

    document.getElementById("humidity").innerText = data.main.humidity + "%";
    document.getElementById("wind").innerText = data.wind.speed + " km/h";
    document.getElementById("feels").innerText = Math.round(data.main.feels_like) + "°C";
    document.getElementById("pressure").innerText = data.main.pressure + " hPa";

  } catch (err) {
    console.log(err);
    alert("Error fetching data");
  }
}