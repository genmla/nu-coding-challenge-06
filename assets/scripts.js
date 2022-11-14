var searchForm = document.querySelector('#search')
var searchBar = document.querySelector('#searchBar')
var currentWeather = document.querySelector('#currentWeather')
var weather1 = document.querySelector('#weather1')
var weather2 = document.querySelector('#weather2')
var weather3 = document.querySelector('#weather3')
var weather4 = document.querySelector('#weather4')
var weather5 = document.querySelector('#weather5')
var searchHistoryContainer = document.querySelector('#history')

function searchCity(event) {
    event.preventDefault();

    var input = document.querySelector('#searchBar').value;
    var inputEl = document.createElement('li')
    inputEl.textContent = input
    searchHistoryContainer.appendChild(inputEl)

    function getCoordinates() {
        var geocodeURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + input + '&limit=5&appid=ea7c84a3e4005b409a9bd52d73a72b21'
        fetch(geocodeURL)
            .then(function (georesponse) {
                return georesponse.json();
            })
            .then(function (geodata) {
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
                            //get variables from API
                            var cityname = weatherData.name
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
                            dispTemp.textContent = 'Current Temperature: ' + temp + '°F'
                            currentWeather.appendChild(dispTemp)
                            
                            var humidity = weatherData.main.humidity
                            var dispHumidity = document.createElement('p')
                            dispHumidity.textContent = 'Humidity: ' + humidity + '%'
                            currentWeather.appendChild(dispHumidity)

                            var wind = Math.floor(weatherData.wind.speed)
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
                            var cityname = weather1Data.city.name
                            var date = weather1Data.list[0].dt_txt
                            var iconcode = weather1Data.list[0].weather[0].icon
                            var iconURL = 'https://openweathermap.org/img/wn/'+ iconcode + '@2x.png'
                            var icon = document.createElement('img')
                            icon.setAttribute('src', iconURL)

                            var weatherH3 = document.createElement('h3')
                            weatherH3.textContent = cityname + " " + date
                            weather1.appendChild(weatherH3)
                            weather1.appendChild(icon)

                            var description = weather1Data.list[0].weather[0].description
                            var dispDescript = document.createElement('p')
                            dispDescript.textContent = 'Forecast: ' + description
                            weather1.appendChild(dispDescript)

                            var temp = Math.floor(weather1Data.list[0].main.temp)
                            var dispTemp = document.createElement('p')
                            dispTemp.textContent = 'Temperature: ' + temp + '°F'
                            weather1.appendChild(dispTemp)
                            
                            var humidity = Math.floor(weather1Data.list[0].main.humidity)
                            var dispHumidity = document.createElement('p')
                            dispHumidity.textContent = 'Humidity: ' + humidity + '%'
                            weather1.appendChild(dispHumidity)

                            var wind = Math.floor(weather1Data.list[0].wind.speed)
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
                            var cityname = weather2Data.city.name
                            var date = weather2Data.list[8].dt_txt
                            var iconcode = weather2Data.list[8].weather[0].icon
                            var iconURL = 'https://openweathermap.org/img/wn/'+ iconcode + '@2x.png'
                            var icon = document.createElement('img')
                            icon.setAttribute('src', iconURL)

                            var weatherH3 = document.createElement('h3')
                            weatherH3.textContent = cityname + " " + date
                            weather2.appendChild(weatherH3)
                            weather2.appendChild(icon)

                            var description = weather2Data.list[8].weather[0].description
                            var dispDescript = document.createElement('p')
                            dispDescript.textContent = 'Forecast: ' + description
                            weather2.appendChild(dispDescript)

                            var temp = Math.floor(weather2Data.list[8].main.temp)
                            var dispTemp = document.createElement('p')
                            dispTemp.textContent = 'Temperature: ' + temp + '°F'
                            weather2.appendChild(dispTemp)
                            
                            var humidity = weather2Data.list[8].main.humidity
                            var dispHumidity = document.createElement('p')
                            dispHumidity.textContent = 'Humidity: ' + humidity + '%'
                            weather2.appendChild(dispHumidity)

                            var wind = Math.floor(weather2Data.list[8].wind.speed)
                            dispWind = document.createElement('p')
                            dispWind.textContent = 'Wind: ' + wind + ' mph'
                            weather2.appendChild(dispWind)
                        })
                }
                getFutureWeather2()

                function getFutureWeather3 () {
                    weather3.innerHTML = ""
                    var weather3URL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=ea7c84a3e4005b409a9bd52d73a72b21&units=imperial'
                    fetch(weather3URL)
                        .then(function (weather3Response) {
                            return weather3Response.json();
                        })
                        .then(function (weather3Data) {
                            var cityname = weather3Data.city.name
                            var date = weather3Data.list[16].dt_txt
                            var iconcode = weather3Data.list[16].weather[0].icon
                            var iconURL = 'https://openweathermap.org/img/wn/'+ iconcode + '@2x.png'
                            var icon = document.createElement('img')
                            icon.setAttribute('src', iconURL)

                            var weatherH3 = document.createElement('h3')
                            weatherH3.textContent = cityname + " " + date
                            weather3.appendChild(weatherH3)
                            weather3.appendChild(icon)

                            var description = weather3Data.list[16].weather[0].description
                            var dispDescript = document.createElement('p')
                            dispDescript.textContent = 'Forecast: ' + description
                            weather3.appendChild(dispDescript)

                            var temp = Math.floor(weather3Data.list[16].main.temp)
                            var dispTemp = document.createElement('p')
                            dispTemp.textContent = 'Temperature: ' + temp + '°F'
                            weather3.appendChild(dispTemp)
                            
                            var humidity = weather3Data.list[16].main.humidity
                            var dispHumidity = document.createElement('p')
                            dispHumidity.textContent = 'Humidity: ' + humidity + '%'
                            weather3.appendChild(dispHumidity)

                            var wind = Math.floor(weather3Data.list[16].wind.speed)
                            dispWind = document.createElement('p')
                            dispWind.textContent = 'Wind: ' + wind + ' mph'
                            weather3.appendChild(dispWind)
                        })
                }
                getFutureWeather3()

                function getFutureWeather4 () {
                    weather4.innerHTML = ""
                    var weather4URL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=ea7c84a3e4005b409a9bd52d73a72b21&units=imperial'
                    fetch(weather4URL)
                        .then(function (weather4Response) {
                            return weather4Response.json();
                        })
                        .then(function (weather4Data) {
                            var cityname = weather4Data.city.name
                            var date = weather4Data.list[24].dt_txt
                            var iconcode = weather4Data.list[24].weather[0].icon
                            var iconURL = 'https://openweathermap.org/img/wn/'+ iconcode + '@2x.png'
                            var icon = document.createElement('img')
                            icon.setAttribute('src', iconURL)

                            var weatherH3 = document.createElement('h3')
                            weatherH3.textContent = cityname + " " + date
                            weather4.appendChild(weatherH3)
                            weather4.appendChild(icon)

                            var description = weather4Data.list[24].weather[0].description
                            var dispDescript = document.createElement('p')
                            dispDescript.textContent = 'Forecast: ' + description
                            weather4.appendChild(dispDescript)

                            var temp = Math.floor(weather4Data.list[24].main.temp)
                            var dispTemp = document.createElement('p')
                            dispTemp.textContent = 'Temperature: ' + temp + '°F'
                            weather4.appendChild(dispTemp)
                            
                            var humidity = weather4Data.list[24].main.humidity
                            var dispHumidity = document.createElement('p')
                            dispHumidity.textContent = 'Humidity: ' + humidity + '%'
                            weather4.appendChild(dispHumidity)

                            var wind = Math.floor(weather4Data.list[24].wind.speed)
                            dispWind = document.createElement('p')
                            dispWind.textContent = 'Wind: ' + wind + ' mph'
                            weather4.appendChild(dispWind)
                        })
                }
                getFutureWeather4()

                function getFutureWeather5 () {
                    weather5.innerHTML = ""
                    var weather5URL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=ea7c84a3e4005b409a9bd52d73a72b21&units=imperial'
                    fetch(weather5URL)
                        .then(function (weather5Response) {
                            return weather5Response.json();
                        })
                        .then(function (weather5Data) {
                            var cityname = weather5Data.city.name
                            var date = weather5Data.list[32].dt_txt
                            var iconcode = weather5Data.list[32].weather[0].icon
                            var iconURL = 'https://openweathermap.org/img/wn/'+ iconcode + '@2x.png'
                            var icon = document.createElement('img')
                            icon.setAttribute('src', iconURL)

                            var weatherH3 = document.createElement('h3')
                            weatherH3.textContent = cityname + " " + date
                            weather5.appendChild(weatherH3)
                            weather5.appendChild(icon)

                            var description = weather5Data.list[32].weather[0].description
                            var dispDescript = document.createElement('p')
                            dispDescript.textContent = 'Forecast: ' + description
                            weather5.appendChild(dispDescript)

                            var temp = Math.floor(weather5Data.list[32].main.temp)
                            var dispTemp = document.createElement('p')
                            dispTemp.textContent = 'Temperature: ' + temp + '°F'
                            weather5.appendChild(dispTemp)
                            
                            var humidity = weather5Data.list[32].main.humidity
                            var dispHumidity = document.createElement('p')
                            dispHumidity.textContent = 'Humidity: ' + humidity + '%'
                            weather5.appendChild(dispHumidity)

                            var wind = Math.floor(weather5Data.list[32].wind.speed)
                            dispWind = document.createElement('p')
                            dispWind.textContent = 'Wind: ' + wind + ' mph'
                            weather5.appendChild(dispWind)
                        })
                }
                getFutureWeather5()
            })

    }
    getCoordinates();

    searchBar.value = ""
}
searchForm.addEventListener('submit', searchCity);

searchHistoryContainer.addEventListener('click', function (event) {
    var searchedCity = event.target;

    if (searchedCity.matches('li')) {
        oldSearch = searchedCity.textContent
        console.log(oldSearch)
        function getCoordinates() {
            var geocodeURL = 'https://api.openweathermap.org/geo/1.0/direct?q=' + oldSearch + '&limit=5&appid=ea7c84a3e4005b409a9bd52d73a72b21'
            fetch(geocodeURL)
                .then(function (georesponse) {
                    return georesponse.json();
                })
                .then(function (geodata) {
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
                                //get variables from API
                                var cityname = weatherData.name
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
                                dispTemp.textContent = 'Current Temperature: ' + temp + '°F'
                                currentWeather.appendChild(dispTemp)
                                
                                var humidity = weatherData.main.humidity
                                var dispHumidity = document.createElement('p')
                                dispHumidity.textContent = 'Humidity: ' + humidity + '%'
                                currentWeather.appendChild(dispHumidity)
    
                                var wind = Math.floor(weatherData.wind.speed)
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
                                var cityname = weather1Data.city.name
                                var date = weather1Data.list[0].dt_txt
                                var iconcode = weather1Data.list[0].weather[0].icon
                                var iconURL = 'https://openweathermap.org/img/wn/'+ iconcode + '@2x.png'
                                var icon = document.createElement('img')
                                icon.setAttribute('src', iconURL)
    
                                var weatherH3 = document.createElement('h3')
                                weatherH3.textContent = cityname + " " + date
                                weather1.appendChild(weatherH3)
                                weather1.appendChild(icon)
    
                                var description = weather1Data.list[0].weather[0].description
                                var dispDescript = document.createElement('p')
                                dispDescript.textContent = 'Forecast: ' + description
                                weather1.appendChild(dispDescript)
    
                                var temp = Math.floor(weather1Data.list[0].main.temp)
                                var dispTemp = document.createElement('p')
                                dispTemp.textContent = 'Temperature: ' + temp + '°F'
                                weather1.appendChild(dispTemp)
                                
                                var humidity = Math.floor(weather1Data.list[0].main.humidity)
                                var dispHumidity = document.createElement('p')
                                dispHumidity.textContent = 'Humidity: ' + humidity + '%'
                                weather1.appendChild(dispHumidity)
    
                                var wind = Math.floor(weather1Data.list[0].wind.speed)
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
                                var cityname = weather2Data.city.name
                                var date = weather2Data.list[8].dt_txt
                                var iconcode = weather2Data.list[8].weather[0].icon
                                var iconURL = 'https://openweathermap.org/img/wn/'+ iconcode + '@2x.png'
                                var icon = document.createElement('img')
                                icon.setAttribute('src', iconURL)
    
                                var weatherH3 = document.createElement('h3')
                                weatherH3.textContent = cityname + " " + date
                                weather2.appendChild(weatherH3)
                                weather2.appendChild(icon)
    
                                var description = weather2Data.list[8].weather[0].description
                                var dispDescript = document.createElement('p')
                                dispDescript.textContent = 'Forecast: ' + description
                                weather2.appendChild(dispDescript)
    
                                var temp = Math.floor(weather2Data.list[8].main.temp)
                                var dispTemp = document.createElement('p')
                                dispTemp.textContent = 'Temperature: ' + temp + '°F'
                                weather2.appendChild(dispTemp)
                                
                                var humidity = weather2Data.list[8].main.humidity
                                var dispHumidity = document.createElement('p')
                                dispHumidity.textContent = 'Humidity: ' + humidity + '%'
                                weather2.appendChild(dispHumidity)
    
                                var wind = Math.floor(weather2Data.list[8].wind.speed)
                                dispWind = document.createElement('p')
                                dispWind.textContent = 'Wind: ' + wind + ' mph'
                                weather2.appendChild(dispWind)
                            })
                    }
                    getFutureWeather2()
    
                    function getFutureWeather3 () {
                        weather3.innerHTML = ""
                        var weather3URL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=ea7c84a3e4005b409a9bd52d73a72b21&units=imperial'
                        fetch(weather3URL)
                            .then(function (weather3Response) {
                                return weather3Response.json();
                            })
                            .then(function (weather3Data) {
                                var cityname = weather3Data.city.name
                                var date = weather3Data.list[16].dt_txt
                                var iconcode = weather3Data.list[16].weather[0].icon
                                var iconURL = 'https://openweathermap.org/img/wn/'+ iconcode + '@2x.png'
                                var icon = document.createElement('img')
                                icon.setAttribute('src', iconURL)
    
                                var weatherH3 = document.createElement('h3')
                                weatherH3.textContent = cityname + " " + date
                                weather3.appendChild(weatherH3)
                                weather3.appendChild(icon)
    
                                var description = weather3Data.list[16].weather[0].description
                                var dispDescript = document.createElement('p')
                                dispDescript.textContent = 'Forecast: ' + description
                                weather3.appendChild(dispDescript)
    
                                var temp = Math.floor(weather3Data.list[16].main.temp)
                                var dispTemp = document.createElement('p')
                                dispTemp.textContent = 'Temperature: ' + temp + '°F'
                                weather3.appendChild(dispTemp)
                                
                                var humidity = weather3Data.list[16].main.humidity
                                var dispHumidity = document.createElement('p')
                                dispHumidity.textContent = 'Humidity: ' + humidity + '%'
                                weather3.appendChild(dispHumidity)
    
                                var wind = Math.floor(weather3Data.list[16].wind.speed)
                                dispWind = document.createElement('p')
                                dispWind.textContent = 'Wind: ' + wind + ' mph'
                                weather3.appendChild(dispWind)
                            })
                    }
                    getFutureWeather3()
    
                    function getFutureWeather4 () {
                        weather4.innerHTML = ""
                        var weather4URL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=ea7c84a3e4005b409a9bd52d73a72b21&units=imperial'
                        fetch(weather4URL)
                            .then(function (weather4Response) {
                                return weather4Response.json();
                            })
                            .then(function (weather4Data) {
                                var cityname = weather4Data.city.name
                                var date = weather4Data.list[24].dt_txt
                                var iconcode = weather4Data.list[24].weather[0].icon
                                var iconURL = 'https://openweathermap.org/img/wn/'+ iconcode + '@2x.png'
                                var icon = document.createElement('img')
                                icon.setAttribute('src', iconURL)
    
                                var weatherH3 = document.createElement('h3')
                                weatherH3.textContent = cityname + " " + date
                                weather4.appendChild(weatherH3)
                                weather4.appendChild(icon)
    
                                var description = weather4Data.list[24].weather[0].description
                                var dispDescript = document.createElement('p')
                                dispDescript.textContent = 'Forecast: ' + description
                                weather4.appendChild(dispDescript)
    
                                var temp = Math.floor(weather4Data.list[24].main.temp)
                                var dispTemp = document.createElement('p')
                                dispTemp.textContent = 'Temperature: ' + temp + '°F'
                                weather4.appendChild(dispTemp)
                                
                                var humidity = weather4Data.list[24].main.humidity
                                var dispHumidity = document.createElement('p')
                                dispHumidity.textContent = 'Humidity: ' + humidity + '%'
                                weather4.appendChild(dispHumidity)
    
                                var wind = Math.floor(weather4Data.list[24].wind.speed)
                                dispWind = document.createElement('p')
                                dispWind.textContent = 'Wind: ' + wind + ' mph'
                                weather4.appendChild(dispWind)
                            })
                    }
                    getFutureWeather4()
    
                    function getFutureWeather5 () {
                        weather5.innerHTML = ""
                        var weather5URL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=ea7c84a3e4005b409a9bd52d73a72b21&units=imperial'
                        fetch(weather5URL)
                            .then(function (weather5Response) {
                                return weather5Response.json();
                            })
                            .then(function (weather5Data) {
                                var cityname = weather5Data.city.name
                                var date = weather5Data.list[32].dt_txt
                                var iconcode = weather5Data.list[32].weather[0].icon
                                var iconURL = 'https://openweathermap.org/img/wn/'+ iconcode + '@2x.png'
                                var icon = document.createElement('img')
                                icon.setAttribute('src', iconURL)
    
                                var weatherH3 = document.createElement('h3')
                                weatherH3.textContent = cityname + " " + date
                                weather5.appendChild(weatherH3)
                                weather5.appendChild(icon)
    
                                var description = weather5Data.list[32].weather[0].description
                                var dispDescript = document.createElement('p')
                                dispDescript.textContent = 'Forecast: ' + description
                                weather5.appendChild(dispDescript)
    
                                var temp = Math.floor(weather5Data.list[32].main.temp)
                                var dispTemp = document.createElement('p')
                                dispTemp.textContent = 'Temperature: ' + temp + '°F'
                                weather5.appendChild(dispTemp)
                                
                                var humidity = weather5Data.list[32].main.humidity
                                var dispHumidity = document.createElement('p')
                                dispHumidity.textContent = 'Humidity: ' + humidity + '%'
                                weather5.appendChild(dispHumidity)
    
                                var wind = Math.floor(weather5Data.list[32].wind.speed)
                                dispWind = document.createElement('p')
                                dispWind.textContent = 'Wind: ' + wind + ' mph'
                                weather5.appendChild(dispWind)
                            })
                    }
                    getFutureWeather5()
                })
    
        }
        getCoordinates();
    
        searchBar.value = ""      
    }
})
    

// Geocode URL to get coordinates from city = 'https://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=ea7c84a3e4005b409a9bd52d73a72b21'
// Weather URL to get weather from coordinates = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=ea7c84a3e4005b409a9bd52d73a72b21'
