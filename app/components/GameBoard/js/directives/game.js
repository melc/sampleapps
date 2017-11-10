/**
 * Created by melc on 6/11/17.
 */
app.directive("game",function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/game.html'
    };
});