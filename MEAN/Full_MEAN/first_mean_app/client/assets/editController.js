app.controller('EditController', ['$scope', 'FriendsFactory', '$routeParams', function($scope, FriendsFactory, $routeParams){
    function show(id){
        FriendsFactory.show(id, function(data){
            $scope.friend = data;
        })
    }
    show($routeParams.id);
    $scope.editFriend = function(friend, id){
        console.log("MEH");
        FriendsFactory.edit(friend, id);
    }
}]);
