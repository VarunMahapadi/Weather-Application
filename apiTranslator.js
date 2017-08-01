app.service('apiTranslator', function(Position, Weather, WeatherMinMax, WeatherWrapper) {

    function getWeatherItem(current) {
        var weather = new Weather(current.summary, current.temperature, current.humidity, current.windSpeed);
        
        return weather;
    }

    function getHourlyWeather(hourly) {
        var hourlyWeather = [];
        for (var i = 0; i < 12; i++) {
            hourlyWeather.push(getWeatherItem(hourly.data[i]));
        }

        return hourlyWeather;
    }

    function getDailyWeather(daily) {
        var dailyWeather = [];
        angular.forEach(daily.data, function(item) {
            var weather = new WeatherMinMax(item.summary, item.temperatureMax, item.temperatureMin, item.humidity, item.windSpeed);
            dailyWeather.push(weather);
        });

        return dailyWeather;
    }

    this.getPosition = function(result) {
        var position = new Position(result.data.results[0].geometry.location.lat, result.data.results[0].geometry.location.lng);
        return position;
    }

    this.getWeather = function(data) {
        var currentWeather = getWeatherItem(data.currently);
        var hourlyWeather = getHourlyWeather(data.hourly);
        var dailyWeather = getDailyWeather(data.daily);
        var weatherWrapper = new WeatherWrapper(currentWeather, hourlyWeather, dailyWeather);
        return weatherWrapper;
    }
    
    this.getAddress = function(data) {
        var address = data.results.formatted_address;
        return address;
    }
});