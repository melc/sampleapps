/**
 * Created by melc on 6/12/17.
 */
var app = angular.module('CalendarApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'DayController',
            templateUrl: 'views/day.html'
        })
        .when('/:id', {
            controller: 'EventController',
            templateUrl: 'views/event.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});