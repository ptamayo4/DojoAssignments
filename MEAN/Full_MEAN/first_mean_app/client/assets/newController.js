app.controller('NewController', ['$scope', 'FriendsFactory', '$routeParams', function($scope, FriendsFactory, $routeParams){
    $scope.addFriend = function(friend){
        FriendsFactory.newFriend(friend);
    }
}]);
