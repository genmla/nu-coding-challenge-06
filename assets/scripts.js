var searchForm = document.querySelector('#search')
var searchBar = document.querySelector('#searchBar')
var currentWeather = document.querySelector('#currentWeather')
var weather1 = document.querySelector('#weather1')
var weather2 = document.querySelector('#weather2')
var weather3 = document.querySelector('#weather3')
var weather4 = document.querySelector('#weather4')
var weather5 = document.querySelector('#weather5')

function searchCity(event) {
    event.preventDefault();

    var input = document.querySelector('#searchBar').value;

    // var searchBtn = document.querySelector('#searchBtn')

    if (!input) {
        console.error('Please enter a city');
        return;
    }
    console.log(input)

    function getCoordinates() {
        var geocodeURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + input + '&limit=5&appid=ea7c84a3e4005b409a9bd52d73a72b21'
        fetch(geocodeURL)
            .then(function (georesponse) {
                return georesponse.json();
            })
            .then(function (geodata) {
                console.log(geodata);
                // console.log(geodata[0].lat)
                // console.log(geodata[0].lon)
                lat = geodata[0].lat
                lon = geodata[0].lon

                function getCurrentWeather() {
                    currentWeather.innerHTML = ""
                    var weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=ea7c84a3e4005b409a9bd52d73a72b21&units=imperial'
                    fetch(weatherURL)
                        .then(function (weatherResponse) {
                            return weatherResponse.json();
                        })
                        .then(function (weatherData) {
                            console.log(weatherData);
                            //get variables from API
                            var cityname = weatherData.name
                            console.log(cityname)
                            var date = moment().format('M[/]DD[/]YYYY')
                            var iconcode = weatherData.weather[0].icon
                            var iconURL = 'https://openweathermap.org/img/wn/'+ iconcode + '@2x.png'
                            var icon = document.createElement('img')
                            icon.setAttribute('src', iconURL)

                            //write captured variables to html doc
                            var currentWeatherH2 = document.createElement('h2')
                            currentWeatherH2.textContent = cityname + " " + "(" + date + ")"
                            currentWeather.appendChild(currentWeatherH2)
                            currentWeather.appendChild(icon)

                            var description = weatherData.weather[0].description
                            var dispDescript = document.createElement('p')
                            dispDescript.textContent = 'Current Weather: ' + description
                            currentWeather.appendChild(dispDescript)

                            var temp = Math.floor(weatherData.main.temp)
                            var dispTemp = document.createElement('p')
                            dispTemp.textContent = 'Current Temperatue: ' + temp + '°F'
                            currentWeather.appendChild(dispTemp)
                            
                            var humidity = weatherData.main.humidity
                            var dispHumidity = document.createElement('p')
                            dispHumidity.textContent = 'Humidity: ' + humidity + '%'
                            currentWeather.appendChild(dispHumidity)

                            var wind = weatherData.wind.speed
                            dispWind = document.createElement('p')
                            dispWind.textContent = 'Wind: ' + wind + ' mph'
                            currentWeather.appendChild(dispWind)
                        })
                }
                getCurrentWeather()
                
                function getFutureWeather1 () {
                    weather1.innerHTML = ""
                    var weather1URL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=ea7c84a3e4005b409a9bd52d73a72b21&units=imperial'
                    fetch(weather1URL)
                        .then(function (weather1Response) {
                            return weather1Response.json();
                        })
                        .then(function (weather1Data) {
                            console.log(weather1Data);
                            //get variables from API
                            var cityname = weather1Data.city.name
                            var date = weather1Data.list[0].dt_txt
                            var iconcode = weather1Data.list[0].weather[0].icon
                            var iconURL = 'https://openweathermap.org/img/wn/'+ iconcode + '@2x.png'
                            var icon = document.createElement('img')
                            icon.setAttribute('src', iconURL)

                            //write captured variables to html doc
                            var weatherH3 = document.createElement('h3')
                            weatherH3.textContent = cityname + " " + date
                            weather1.appendChild(weatherH3)
                            weather1.appendChild(icon)

                            var description = weather1Data.list[0].weather[0].description
                            var dispDescript = document.createElement('p')
                            dispDescript.textContent = 'Current Weather: ' + description
                            weather1.appendChild(dispDescript)

                            var temp = Math.floor(weather1Data.list[0].main.temp)
                            var dispTemp = document.createElement('p')
                            dispTemp.textContent = 'Current Temperatue: ' + temp + '°F'
                            weather1.appendChild(dispTemp)
                            
                            var humidity = weather1Data.list[0].main.humidity
                            var dispHumidity = document.createElement('p')
                            dispHumidity.textContent = 'Humidity: ' + humidity + '%'
                            weather1.appendChild(dispHumidity)

                            var wind = weather1Data.list[0].wind.speed
                            dispWind = document.createElement('p')
                            dispWind.textContent = 'Wind: ' + wind + ' mph'
                            weather1.appendChild(dispWind)
                        })
                }
                getFutureWeather1()
                function getFutureWeather2 () {
                    weather2.innerHTML = ""
                    var weather2URL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=ea7c84a3e4005b409a9bd52d73a72b21&units=imperial'
                    fetch(weather2URL)
                        .then(function (weather2Response) {
                            return weather2Response.json();
                        })
                        .then(function (weather2Data) {
                            console.log(weather2Data);
                            //get variables from API
                            var cityname = weather2Data.city.name
                            var date = weather2Data.list[8].dt_txt
                            var iconcode = weather2Data.list[8].weather[0].icon
                            var iconURL = 'https://openweathermap.org/img/wn/'+ iconcode + '@2x.png'
                            var icon = document.createElement('img')
                            icon.setAttribute('src', iconURL)

                            //write captured variables to html doc
                            var weatherH3 = document.createElement('h3')
                            weatherH3.textContent = cityname + " " + date
                            weather2.appendChild(weatherH3)
                            weather2.appendChild(icon)

                            var description = weather2Data.list[8].weather[0].description
                            var dispDescript = document.createElement('p')
                            dispDescript.textContent = 'Current Weather: ' + description
                            weather2.appendChild(dispDescript)

                            var temp = Math.floor(weather2Data.list[8].main.temp)
                            var dispTemp = document.createElement('p')
                            dispTemp.textContent = 'Current Temperatue: ' + temp + '°F'
                            weather2.appendChild(dispTemp)
                            
                            var humidity = weather2Data.list[8].main.humidity
                            var dispHumidity = document.createElement('p')
                            dispHumidity.textContent = 'Humidity: ' + humidity + '%'
                            weather2.appendChild(dispHumidity)

                            var wind = weather2Data.list[8].wind.speed
                            dispWind = document.createElement('p')
                            dispWind.textContent = 'Wind: ' + wind + ' mph'
                            weather2.appendChild(dispWind)
                        })
                }
                getFutureWeather2()
            })
    }
    getCoordinates();

    searchBar.value = ""
}
searchForm.addEventListener('submit', searchCity);

// Geocode URL to get coordinates from city = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=ea7c84a3e4005b409a9bd52d73a72b21'
// Weather URL to get weather from coordinates = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=ea7c84a3e4005b409a9bd52d73a72b21'
