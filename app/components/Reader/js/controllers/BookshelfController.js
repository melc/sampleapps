/**
 * Created by melc on 6/12/17.
 */
app.controller('BookshelfController', ['$scope', 'books', function($scope, books) {
    books.success(function(data) {
        $scope.myBooks = data;
    });
}]);