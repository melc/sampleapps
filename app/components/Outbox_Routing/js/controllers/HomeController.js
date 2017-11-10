/**
 * Created by melc on 6/12/17.
 */
app.controller('HomeController', ['$scope', 'emails', function($scope, emails) {
    emails.success(function(data) {
        $scope.emails = data;
    });
}]);