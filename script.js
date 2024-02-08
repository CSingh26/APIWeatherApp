const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=tempe';
const apiKey = '1d534f012371e137651f74a277b7c985';

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    var data = await response.json()

    console.log(data)
}

checkWeather()