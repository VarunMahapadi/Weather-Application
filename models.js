app.factory('Position', function() {
    function Position(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
    return Position;
});

app.factory('Weather', function() {
    function Weather(desc, temperature, humidity, windSpeed) {
        this.desc = desc;
        this.temperature = temperature;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.time = null;
    }
    return Weather;
});

app.factory('WeatherMinMax', function() {
    function WeatherMinMax(desc, maxTemperature, minTemperature, humidity, windSpeed) {
        this.desc = desc;
        this.maxTemperature = maxTemperature;
        this.minTemperature = minTemperature;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.time = null;
    }
    return WeatherMinMax;
});

app.factory('WeatherWrapper', function() {
    function WeatherWrapper(currentWeather, hourlyWeather, dailyWeather) {
        this.currentWeather = currentWeather;
        this.hourlyWeather = hourlyWeather;
        this.dailyWeather = dailyWeather;
    }

    return WeatherWrapper;
});

app.factory('HistoryListItem', function() {
    function HistoryListItem(city, latitude, longitude) {
        this.city = city;
        this.latitude = latitude;
        this.longitude = longitude;
        this.date = null;
    }

    return HistoryListItem;
});
