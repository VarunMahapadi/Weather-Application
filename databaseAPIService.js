app.service('databaseAPIService', function($q, databaseAPITranslator, HistoryListItem) {
    this.getUserHistory = function(city) {
        var deferred = $q.defer();
        var user = firebase.auth().currentUser.uid;
        if (user) {
            var historyList = [];
            var locationsHistory = firebase.database().ref().child("users").child(user);
            locationsHistory.once("value").then(function(snapshot) {
            snapshot.forEach(function(childSnapShot) {
                    
                var item = childSnapShot.val();
                var currentItem = new HistoryListItem(item.city, item.lat, item.lng);
                if (item.time != "")
                    currentItem.time = item.time;
                historyList.push(currentItem);
            });
                deferred.resolve(historyList);
        });
        }

        return deferred.promise;
    }

    this.putIntoDB = function(city, latitude, longitude) {

        var user = firebase.auth().currentUser.uid;
        var firebaseRef = firebase.database().ref();
        var locations = firebase.database().ref().child("users").child(user);

        //locations.push({ city: city, lat: latitude, lng: longitude, time: date });
        
        /*if(!latitude && !longitude)
            locations.push({ city: city, lat: "", lng: "" });
        else if(!city)
            locations.push({ city: "", lat: latitude, lng: longitude });
        else*/
            locations.push({ city: city, lat: latitude, lng: longitude });
    }
});