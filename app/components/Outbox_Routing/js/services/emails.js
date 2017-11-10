/**
 * Created by melc on 6/12/17.
 */
app.factory('emails', ['$http', function($http) {
    return $http.get('data/emails.json')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);