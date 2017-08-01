app.controller('GraphCtrl', function($scope, apiService) {
    $scope.isLoaded = false;
    $scope.init = function() {
            var dailyData = apiService.getSharedVariables();
        
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart);

            function drawChart() {
                var data = google.visualization.arrayToDataTable([
                  ['Day', 'Max Temperature', 'Min Temperature'],
                  ['1',  dailyData.weather.dailyWeather[0].maxTemperature,      dailyData.weather.dailyWeather[0].minTemperature],
                  ['2',  dailyData.weather.dailyWeather[1].maxTemperature,      dailyData.weather.dailyWeather[1].minTemperature],
                  ['3',  dailyData.weather.dailyWeather[2].maxTemperature,      dailyData.weather.dailyWeather[2].minTemperature],
                  ['4',  dailyData.weather.dailyWeather[3].maxTemperature,      dailyData.weather.dailyWeather[3].minTemperature],
                  ['5',  dailyData.weather.dailyWeather[4].maxTemperature,      dailyData.weather.dailyWeather[4].minTemperature],
                  ['6',  dailyData.weather.dailyWeather[5].maxTemperature,      dailyData.weather.dailyWeather[5].minTemperature],
                  ['7',  dailyData.weather.dailyWeather[6].maxTemperature,      dailyData.weather.dailyWeather[6].minTemperature],
                  ['8',  dailyData.weather.dailyWeather[7].maxTemperature,      dailyData.weather.dailyWeather[7].minTemperature]
                ]);

                var options = {
                  title: 'Temperature',
                  legend: { position: 'bottom' }
                };

                var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

                chart.draw(data, options);
            } 
    }
    
    function createGraphForTemperature() {
        var dailyData = apiService.getSharedVariables();
        
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Day', 'Max Temperature', 'Min Temperature'],
              ['1',  dailyData.weather.dailyWeather[0].maxTemperature,      dailyData.weather.dailyWeather[0].minTemperature],
              ['2',  dailyData.weather.dailyWeather[1].maxTemperature,      dailyData.weather.dailyWeather[1].minTemperature],
              ['3',  dailyData.weather.dailyWeather[2].maxTemperature,      dailyData.weather.dailyWeather[2].minTemperature],
              ['4',  dailyData.weather.dailyWeather[3].maxTemperature,      dailyData.weather.dailyWeather[3].minTemperature],
              ['5',  dailyData.weather.dailyWeather[4].maxTemperature,      dailyData.weather.dailyWeather[4].minTemperature],
              ['6',  dailyData.weather.dailyWeather[5].maxTemperature,      dailyData.weather.dailyWeather[5].minTemperature],
              ['7',  dailyData.weather.dailyWeather[6].maxTemperature,      dailyData.weather.dailyWeather[6].minTemperature],
              ['8',  dailyData.weather.dailyWeather[7].maxTemperature,      dailyData.weather.dailyWeather[7].minTemperature]
            ]);

            var options = {
              title: 'Temperature',
              legend: { position: 'bottom' }
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
        } 
    }
    
    function createGraphForHumidity() {
        
        var dailyData = apiService.getSharedVariables();
        
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        
        function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Day', "Humidity"],
              ['1',  dailyData.weather.dailyWeather[0].humidity],
              ['2',  dailyData.weather.dailyWeather[1].humidity],
              ['3',  dailyData.weather.dailyWeather[2].humidity],
              ['4',  dailyData.weather.dailyWeather[3].humidity],
              ['5',  dailyData.weather.dailyWeather[4].humidity],
              ['6',  dailyData.weather.dailyWeather[5].humidity],
              ['7',  dailyData.weather.dailyWeather[6].humidity],
              ['8',  dailyData.weather.dailyWeather[7].humidity]
            ]);

            var options = {
              title: "Humidity",
              curveType: 'function',
              legend: { position: 'bottom' }
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
        } 
    }
    
    function createGraphForWindSpeed() {
        
        var dailyData = apiService.getSharedVariables();
        
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        
        function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Day', "Wind Speed"],
              ['1',  dailyData.weather.dailyWeather[0].windSpeed],
              ['2',  dailyData.weather.dailyWeather[1].windSpeed],
              ['3',  dailyData.weather.dailyWeather[2].windSpeed],
              ['4',  dailyData.weather.dailyWeather[3].windSpeed],
              ['5',  dailyData.weather.dailyWeather[4].windSpeed],
              ['6',  dailyData.weather.dailyWeather[5].windSpeed],
              ['7',  dailyData.weather.dailyWeather[6].windSpeed],
              ['8',  dailyData.weather.dailyWeather[7].windSpeed]
            ]);

            var options = {
              title: "Wind Speed",
              curveType: 'function',
              legend: { position: 'bottom' }
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
        } 
    }
    
   $('#cmbMoreFunction').change(function() 
    { 
        var selectedValue = parseInt(jQuery(this).val());

        //Depend on Value i.e. 0 or 1 respective function gets called. 
        switch(selectedValue){
            case 0:
                createGraphForTemperature();
                break;
            case 1:
                createGraphForHumidity();
                break;
            case 2:
                createGraphForWindSpeed();
                break;
            default:
                alert("catch default");
                break;
        }
    })
});