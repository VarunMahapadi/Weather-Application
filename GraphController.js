app.controller('GraphCtrl', function($scope, apiService) {
    $scope.isLoaded = false;
    $scope.init = function() {
            //var graphData = apiService.getStoredWeatherData();
            //console.log(graphData);
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart);

            function drawChart() {
                var data = google.visualization.arrayToDataTable([
                  ['Day', 'Max Temperature', 'Min Temperature'],
                  ['1',  1000,     900],
                  ['2',  1500,     800],
                  ['3',  900,      1200],
                  ['4',  700,      500],
                  ['5',  1300,     600],
                  ['6',  800,      1500],
                  ['7',  600,      1100]
                ]);

                var options = {
                  title: 'Temperature',
                  curveType: 'function',
                  legend: { position: 'bottom' }
                };

                var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

                chart.draw(data, options);
            } 
    }
    
    function createGraphForTemperature() {
        var dailyData = apiService.weatherdata;
        
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Day', 'Max Temperature', 'Min Temperature'],
              ['1',  1000,     900],
              ['2',  1500,     800],
              ['3',  900,      1200],
              ['4',  700,      500],
              ['5',  1300,     600],
              ['6',  800,      1500],
              ['7',  600,      1100]
            ]);

            var options = {
              title: 'Temperature',
              legend: { position: 'bottom' }
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
        } 
    }
    
    function createGraphForFactor(factor) {
        
        var dailyData = apiService.getStoredWeatherData();
        
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Day', factor],
              ['1',  1000],
              ['2',  1500],
              ['3',  900],
              ['4',  700],
              ['5',  1300],
              ['6',  800],
              ['7',  600]
            ]);

            var options = {
              title: factor,
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
                createGraphForFactor("Humidity");
                break;
            case 2:
                createGraphForFactor("Wind Speed");
                break;
            default:
                alert("catch default");
                break;
        }
    })
});