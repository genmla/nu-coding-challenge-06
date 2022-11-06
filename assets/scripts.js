var searchForm = document.querySelector('#search')
var searchBar = document.querySelector('#searchBar')

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
                console.log(geodata[0].lat)
                console.log(geodata[0].lon)
                lat = geodata[0].lat
                lon = geodata[0].lon

                function getWeather() {
                    var weatherURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=ea7c84a3e4005b409a9bd52d73a72b21'
                    fetch(weatherURL)
                        .then(function (weatherResponse) {
                            return weatherResponse.json();
                        })
                        .then(function (weatherData) {
                            console.log(weatherData);
                            console.log(weatherData.list[0].clouds)
                        })
                }
                getWeather()
            })
    }
    getCoordinates();

    searchBar.value = ""
}
searchForm.addEventListener('submit', searchCity);

// Geocode URL to get coordinates from city = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=ea7c84a3e4005b409a9bd52d73a72b21'
// Weather URL to get weather from coordinates = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=ea7c84a3e4005b409a9bd52d73a72b21'
