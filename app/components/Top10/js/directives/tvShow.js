/**
 * Created by melc on 6/11/17.
 */
app.directive('tvShow', function() {
    return {
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/tvShow.html'
    };
});