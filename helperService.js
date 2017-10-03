app.service('helperService', function() {
    this.createUrl = function(lat, long, date) {
        if (date) {
            var url = 'https://api.darksky.net/forecast/MY_KEY/' + lat + ',' + long + "," + date + 'T12:00:00';
            return url;
            /*
            Get UNIX time
            var unixtime = date.getTime();
            return 'https://api.darksky.net/forecast/MY_KEY/' + lat + ',' + long + ',' + unixtime;*/
        } else {
            return 'https://api.darksky.net/forecast/MY_KEY/' + lat + ',' + long;
        }
    }
});
