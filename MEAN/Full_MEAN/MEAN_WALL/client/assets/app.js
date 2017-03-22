var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'partials/login.html',
            controller: 'UserController'
        })
        .when('/wall', {
            templateUrl: 'partials/wall.html',
            controller: 'WallController'
        })
        .otherwise({
            redirectTo: '/'
        })
})
