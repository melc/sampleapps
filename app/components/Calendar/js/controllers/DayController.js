/**
 * Created by melc on 6/12/17.
 */
app.controller('DayController', ['$scope', 'events', function($scope, events) {
    events.success(function(data) {
        $scope.day = data;
    });
}]);