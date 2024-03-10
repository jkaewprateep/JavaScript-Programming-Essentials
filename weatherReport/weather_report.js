function showweatherDetails(event) {
    event.preventDefault();
}

const city = document.getElementById('city').value;
// const apiKey = '2b1618c807b4f15aa9d84c07c0dbd127'; // Replace 'YOUR_API_KEY' with your actual API key
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=2b1618c807b4f15aa9d84c07c0dbd127";

fetch(apiUrl)
.then(response => response.json())
.then(data => {
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                          <p> 🧸💬  Temperature: ${data.main.temp} 🌡️ ºF</p>
                          <p> 🦭💬  Weather: ${data.weather[0].description}</p>
                          <p> 🦭💬  🗺️ Location: latitude celcious on 44.34 and longtitude  celcious on 10.99</p>`;
}).catch(error => {
    console.error('Error fetching weather:', error);
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
  });

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );