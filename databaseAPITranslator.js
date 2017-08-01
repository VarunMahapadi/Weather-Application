app.service('databaseAPITranslator', function(HistoryListItem) {

    this.getSearchHistory = function(data) {
        var historyList = [];
        angular.forEach(history, function(item) {
            var currentItem = new HistoryListItem(item.city, item.lat, item.lng);
            if (item.time)
                currentItem.time = item.time;
            historyList.push(currentItem);
        });

        return historyList;
    }
});