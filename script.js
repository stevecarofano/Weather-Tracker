var searchButton = $(".searchBtn");
var apiKey = "8f65064bc12ad625bee67dd73bafd07c";

searchButton.click(function() {
    var searchInput = $(".searchInput").val();
    var urlFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput + "&Appid=" + apiKey + "&units=imperial";
    if (searchInput == "") {
        return} 
        else {
        // Getting info from API
        $.ajax({
            url: urlFiveDay,
            method: "GET"
        }).then(function(response) {
            var day = [0, 8, 16, 24, 32];
            var weatherEl = $(".weatherEl").addClass("card-text");
            
            day.forEach(function(i) {
                var timeUTC1 = new Date(response.list[i].dt * 1000);
                timeUTC1 = timeUTC1.toLocaleDateString("en-US");
                // Setting images and content for forecast
                weatherEl.append("<div class=fiveDayColor>" + "<p>" + timeUTC1 + "</p>" + 
                `<img src="https://openweathermap.org/img/wn/${response.list[i].weather[0].icon}@2x.png">` + "<p>" + "Temperature: " + 
                response.list[i].main.temp + "</p>" + "<p>" + "Humidity: " + response.list[i].main.humidity + "%" + "</p>" + "</div>");
            })

        });
    }
});