// // const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// // const options = {
// // 	method: 'GET',
// // 	headers: {
// // 		'X-RapidAPI-Key': 'e23375a7dbmsh718daae0cff22e6p12e9ebjsn608139763f74',
// // 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// // 	}
// // };

// // fetch(url, options)
// //     .then(response => response.json())
// //     .then(response => console.log(response))
// //     .catch(err => console.error(err));

// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'e23375a7dbmsh718daae0cff22e6p12e9ebjsn608139763f74',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// fetch(url, options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

const apiKey = "0116eca437a705ba609f86ac4bfdefb7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(place_name) {
    const response = await fetch(apiUrl + place_name + `&appid = ${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".details").style.display = "none";
    
    } else {
        
    var data = await response.json();

    console.log(data);
    const cityEl = document.querySelector(".city");
    const temp = document.querySelector(".temp");
    const humidity = document.querySelector(".humidity");
    const wind = document.querySelector(".wind");

    cityEl.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "℃";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.main.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";

    }else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".details").style.display = "block";
    document.querySelector(".error").style.display = "none";    
}


}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
