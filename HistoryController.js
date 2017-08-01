app.controller('HistoryCtrl', function($scope, databaseAPIService) {
    $scope.isLoaded = false;
    $scope.init = function() {
        databaseAPIService.getUserHistory().then(function(historyList) {
            $scope.historyList = historyList;
        });
    }
});