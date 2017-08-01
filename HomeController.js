app.controller('HomeCtrl', function($scope, apiService, databaseAPIService, helperService, Position) {
    $scope.init = function() {
        console.log("Init");
        getWeather("New York", 0, null);
    }

    $scope.searchByLatLong = function(lat, lng, city, date) {
        /*if (!city) {
            city = apiService.getCityByLatLng(lat, lng);
        }*/
        if(date)
            date = date.toISOString().substring(0, 10);
        if (lat && lng && !city) {
            getWeatherByCoords(date, lat, lng);
        }
        if (!lat && !lng && city) {
            getWeather(city, 1, date, lat, lng);
        }
    }

    function getWeather(city, flag, date, lat, lng) {
        apiService.getLatLongByCity(city).then(function(position) {
            var url = helperService.createUrl(position.lat, position.lng, date);
            console.log(url);
            apiService.getWeatherByLatLong(url).then(function(weather) {
                $scope.isLoaded = true;
                $scope.weather = weather;
                if(flag)
                    databaseAPIService.putIntoDB(city, "", "");
            });;
        });
    }
    
    function getWeatherByCoords(date, lat, lng){
        var url = helperService.createUrl(lat, lng, date);
        apiService.getWeatherByLatLong(url).then(function(weather) {
            $scope.isLoaded = true;
            $scope.weather = weather;
            databaseAPIService.putIntoDB("", lat, lng);
        });;
    }
});