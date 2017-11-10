/**
 * Created by melc on 6/11/17.
 */
app.controller('MainController', ['$scope', 'shows', function($scope, shows) {
    shows.success(function(data) {
        $scope.shows = data;
    });
}])