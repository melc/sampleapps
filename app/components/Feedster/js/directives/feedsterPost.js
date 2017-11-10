/**
 * Created by melc on 6/11/17.
 */
app.directive("feedsterPost", function() {
    return {
        scope: {
            post: '='
        },
        templateUrl: 'js/directives/feedsterPost.html'
    };
});