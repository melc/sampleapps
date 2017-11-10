/**
 * Created by melc on 6/11/17.
 */
app.factory('shows', ['$http', function($http) {
    return $http.get('data/shows.json')

        .success(function(data) {
            return data;
        })

        .error(function(err) {
            return err;
        });
}]);