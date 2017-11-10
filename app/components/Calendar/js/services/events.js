/**
 * Created by melc on 6/12/17.
 */
app.factory('events', ['$http', function($http) {
    return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/events-api/events.json')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);