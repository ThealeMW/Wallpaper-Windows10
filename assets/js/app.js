$(document).ready(function() {
        $('#datetime').html(moment().format('hh:mm A'));
        var apiKey = "#";
        var displaycity = "#";
        var curtemp;
        var country_name;
        var weather_description;
  
        $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + displaycity + "&appid=" + apiKey + "&units=metric", function(data) {
  
          city_name = data["name"];
          country_name = data["sys"]["country"];
          weather_description = data["weather"][0]["description"];
          curtemp = data["main"]["temp"];
  
          $("#cityname").html(city_name + " &#40;" + country_name + "&#41; " + "<br>" + weather_description);
          $(".temp").html(curtemp);
  
        })
    })
    function update() {
        $('#datetime').html(moment().format('hh:mm A'));
    }
setInterval(update, 40000);