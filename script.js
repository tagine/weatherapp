//Materialize side nav

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
  // var collapsibleElem = document.querySelector('.collapsible');
  // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

// This is our API key
var APIKey = "986bd5af56b3d8724d12f185ce2409ca";
var latlon = "lat=39.95&lon=-75.16";
// FIGURE OUT WHY UV INDEX API CALL NOT AUTHORIZED

// Here we are building the URL we need to query the database
var weatherURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=Philadelphia,US&units=imperial&appid=" + APIKey;
var uviURL = "https://api.openweathermap.org/data/2.5/uvi?" + "lat=39.95&lon=-75.16&appid=" + APIKey;
//MIGHT JUST BE A BAD CALL SYNTAX

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
    url: weatherURL,
    method: "GET"
})
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {

            // Log the queryURL
            console.log(weatherURL);

            // Log the resulting object
            console.log(response);

            // Transfer content to HTML
            $(".city").html("<p><h3>" + response.name + " Weather Details</h3></p>");
            $(".wind").text("Wind Speed: " + response.wind.speed);
            $(".humidity").text("Humidity: " + response.main.humidity);
            $(".temp").text("Temperature (F) " + response.main.temp);

            // Converts the temp to Kelvin with the below formula
            var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            $(".tempF").text("Temperature (Kelvin) " + tempF);

            // Log the data in the console as well
            console.log("Wind Speed: " + response.wind.speed);
            console.log("Humidity: " + response.main.humidity);
            console.log("Temperature (F): " + response.main.temp);

        });

    $.ajax({
        url: uviURL,
        method: "GET"
    })
            .then(function (response) {

         $(".uvi").html("UV Index " + response.value);
        console.log("UV Index" + response.value);
    
    });