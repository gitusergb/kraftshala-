document.getElementById('search-btn').addEventListener('click', function () {
    var city = document.getElementById('city-input').value;
    var apiKey ='9c48e0a3ad981f892080be0592fd919a';
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            alert(error.message);
        });
});

function displayWeather(data) {
    var weatherInfo = document.getElementById('weather-info');
    var date = new Date().toLocaleDateString();
    var time = new Date().toLocaleTimeString();

    weatherInfo.innerHTML = `

        <h2>Current location : ${data.name}, ${data.sys.country}</h2>
        <hr />
        <p>Temperature : ${data.main.temp} °C</p>
        <p>Date and Time : ${date} , ${time}</p>
        <hr />
        <p>Description: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>

    `;
}

document.getElementById('toggle-mode').addEventListener('click', function () {
    if (document.getElementById("toggle-mode").src == "https://i.ibb.co/FzbHfSv/light.jpg"){
        document.getElementById("toggle-mode").src = "https://i.ibb.co/3kGhDxZ/dark.png";
      
    } else {
        document.getElementById("toggle-mode").src = "https://i.ibb.co/FzbHfSv/light.jpg";
    }
//gb
document.body.classList.toggle('dark-mode');
});
