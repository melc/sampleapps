/**
 * Created by melc on 6/12/17.
 */
app.factory('photos', ['$http', function($http) {
    return $http.get('data/photos.json')
        .success(function(data) {
            return data;
        })
        .error(function(data) {
            return data;
        });
}]);
