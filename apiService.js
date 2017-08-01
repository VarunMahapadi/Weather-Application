app.service('apiService', function($http, $q, apiTranslator, WeatherWrapper) {
    
    this.weatherdata = null;
    
    this.getWeatherByLatLong = function(url) {
        var deferred = $q.defer();
        $.ajax({
            url: url,
            type: "GET",
            dataType: "jsonp",
            success: function(data) {
                var weather = apiTranslator.getWeather(data);
                weatherdata = setStoredWeatherData(weather);
                deferred.resolve(weather);
            }
        });

        return deferred.promise;
    }
    
    function setStoredWeatherData(data) {
        weatherdata = data;
    }
    
    this.getStoredWeatherData = function() {
        return weatherdata;
    }
    
    this.getWeatherData = function(){
        return weatherdata;
    }
    
    this.getLatLongByCity = function(city) {
        var deferred = $q.defer();
        $http({
            url: "http://maps.google.com/maps/api/geocode/json",
            method: "GET",
            params: { address: city }
        }).then(function(result) {
            var position = apiTranslator.getPosition(result)
            deferred.resolve(position);
        }, function(response) {
            //error
            deferred.reject(null);
        });
        return deferred.promise;
    }

    this.getLatlongPosition = function(lat, lng) {
        var position = apiTranslator.getPosition(result)
        return position;
    }

    this.getCityByLatLng = function(lat, lng) {
        var deferred = $q.defer();
        $.ajax({
            url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=AIzaSyDHv-CoECbzIeZV9Y12-ZRUs2HIFKIc72k",
            type: "GET",
            dataType: "json",
            success: function(data) {
                var address = apiTranslator.getAddress(data);
                deferred.resolve(address);
            }
        });
        return deferred.promise;
    }
});