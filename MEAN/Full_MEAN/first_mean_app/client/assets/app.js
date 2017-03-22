var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeController'
        })
        .when('/new', {
            templateUrl: 'partials/new.html',
            controller: 'NewController'
        })
        .when('/edit/:id', {
            templateUrl: 'partials/edit.html',
            controller: 'EditController'
        })
        .when('/show/:id', {
            templateUrl: 'partials/show.html',
            controller: 'ShowController'
        })
});
