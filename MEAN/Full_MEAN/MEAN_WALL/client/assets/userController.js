app.controller('UserController', ['$scope','WallFactory', function($scope, WallFactory){
    $scope.login = function(user){
        WallFactory.login(user);
    }
    $scope.register = function(user){
        WallFactory.register(user);
    }
}])
