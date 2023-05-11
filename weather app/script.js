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

async function checkWeather(place_name) {
    const response = await fetch(apiUrl + place_name + `&appid = ${apiKey}`);
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

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
