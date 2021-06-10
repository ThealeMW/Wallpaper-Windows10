$(document).ready(function() {
weather();
timenow();
})
function weather() {
  var apiKey = "#"; //MODIFY THIS
  var displaycity = "#"; //MODIFY THIS - https://openweathermap.org/find
  var curtemp;
  var country_name;
  var weather_description;

  $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + displaycity + "&appid=" + apiKey + "&units=metric", function(data) {

    city_name = data["name"];
    country_name = data["sys"]["country"];
    weather_description = data["weather"][0]["description"];
    curtemp = data["main"]["temp"];

    $("#cityname").html(city_name + " &#40;" + country_name + "&#41; " + "<br>" + weather_description);
    $(".temp").html(curtemp + " &#8451;");

  })
}
function timenow() {
  $('#datetime').html(moment().format('hh:mm A'));
}
  setInterval(weather, 1000 * 60 * 60);
  setInterval(timenow, 1000);
