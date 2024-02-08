const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const apiKey = '1d534f012371e137651f74a277b7c985';
const cityName = document.querySelector('.search-box input');
const searchBtn = document.querySelector('.search-box button');
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if(response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }

    var data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + `${'°C'}`;
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + ` km/h`;

    if (data.weather[0].main == 'Clouds') {
        weatherIcon.src = 'assets/images/clouds.png';
    } else if(data.weather[0].main == 'Scattered Clouds') {
        weatherIcon.src = 'assets/images/clouds.png';
    } else if(data.weather[0].main == 'Clear') {
        weatherIcon.src = 'assets/images/clear.png';
    } else if(data.weather[0].main == 'Drizzle') {
        weatherIcon.src = 'assets/images/drizzle.png';
    } else if(data.weather[0].main == 'Rain') {
        weatherIcon.src = 'assets/images/drizzle.png';
    } else if(data.weather[0].main == 'Snow') {
        weatherIcon.src = 'assets/images/snow.png';
    } else if(data.weather[0].main == 'Mist') {
        weatherIcon.src = 'assets/images/snow.png';
    }

    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';
}

searchBtn.addEventListener('click', () => {
    checkWeather(cityName.value)
})
