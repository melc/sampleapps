/**
 * Created by melc on 6/12/17.
 */
app.controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
    photos.success(function(data) {
        $scope.detail = data[$routeParams.id];
    });
}]);