var searchButton = document.getElementById("searchButton");
var searchBar = document.getElementById("searchBar");
var searchedLocation;
var DateTime = luxon.DateTime;
var searched;

// this function gets the coordinates of the searched location
function getWeatherData(location) {
    // format the Open Weather api url                         User entered location             api key
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=imperial&appid=53da33d8b6627eb9f8435bf1404e57cb";

    // make a request to the url
    fetch(apiUrl)
        .then(function (response) {
            // request was successful
            if (response.ok) {
                response.json().then(function (data) {
                    var lat = data.coord.lat;
                    var lon = data.coord.lon;
                    searchedLocation = data.name;

                    getAdditionalData(lat, lon);
                });
            } else {
                // request was unsuccessful 
                alert("Error: weather info not found");
            }
        })
        .catch(function (error) {
            alert("Unable to connect to Open Weather");
        });
};

