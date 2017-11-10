/**
 * Created by melc on 6/12/17.
 */
app.controller('BookController', ['$scope', 'books', '$routeParams', function($scope, books, $routeParams) {
    // Your code here
    books.success(function(data) {
        // Using this property to create the URL in line 9 of views/book.html
        $scope.currentBookIndex = parseInt($routeParams.bookId);
        $scope.book = data[$scope.currentBookIndex];
    });
}]);
