app.controller('HomeController', ['$scope', 'FriendsFactory', '$routeParams', function($scope, FriendsFactory, $routeParams){
    function getUsers(){
        FriendsFactory.getFriends(function(data){
            $scope.friends = data;
            console.log($scope.friends);
        })
    }
    getUsers();
    $scope.deleteUser = function(id){
        FriendsFactory.deleteUser(id, getUsers);
    }
}]);
