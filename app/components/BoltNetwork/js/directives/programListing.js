/**
 * Created by melc on 6/11/17.
 */
app.directive('programListing', function() {
    return {
        restrict: 'E',
        scope: {
            listing: "="
        },
        templateUrl: 'js/directives/programListing.html'
    };
});
