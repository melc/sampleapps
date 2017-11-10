/**
 * Created by melc on 6/12/17.
 */
var app = angular.module('OutboxApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/outbox', {
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        })
        .when('/outbox/:id', {
            controller: 'EmailController',
            templateUrl: 'views/email.html'
        })
        .otherwise({
            redirectTo: '/outbox'
        });

});