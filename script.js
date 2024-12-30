const apikey = '88c75e04b05e5c0fac2aab1b5c53c26e';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city = 'Mangalore') {
    const response = await fetch(apiURL + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hrs";
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "assests/wind.png";
    } else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "assests/clear.png";
    } else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "assests/rain.png";
    } else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "assests/drizzle.png";
    } else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "assests/mist.png";
    }
}

searchbtn.addEventListener('click', ()=>{
    checkWeather(searchbox.value);
})

checkWeather();