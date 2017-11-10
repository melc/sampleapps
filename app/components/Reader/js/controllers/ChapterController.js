/**
 * Created by melc on 6/12/17.
 */
app.controller('ChapterController', ['$scope', 'books', '$routeParams', function($scope, books, $routeParams) {
    books.success(function(data) {
        // Your code here
        $scope.currentBook = data[$scope.currentBookIndex];
        $scope.chapter = $scope.currentBook.chapters[$scope.currentChapterIndex];

        // If there no more chapters left, go back to the bookshelf view
        if($scope.currentChapterIndex >= $scope.book.chapters.length - 1) {
            $scope.nextChapterIndex = "#";
        }
    });


    // Using these properties to create the URLs in line 1 and line 11 of view/chapter.html
    $scope.currentBookIndex = parseInt($routeParams.bookId);
    $scope.currentChapterIndex = parseInt($routeParams.chapterId);
    $scope.nextChapterIndex = $scope.currentChapterIndex + 1;

}]);
