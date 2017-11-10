/**
 * Created by melc on 6/11/17.
 */
app.factory('forecast', ['$http', function($http) {
    return $http.get('data/forecast.json')

        .success(function(data) {
            return data;
        })

        .error(function(err) {
            return err;
        });
}]);