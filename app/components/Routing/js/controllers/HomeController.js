/**
 * Created by melc on 6/12/17.
 */
app.controller('HomeController', ['$scope', 'photos', function($scope, photos) {
    photos.success(function(data) {
        $scope.photos = data;
    });
}]);