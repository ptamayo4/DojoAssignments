app.controller('ShowController', ['$scope', 'FriendsFactory', '$routeParams', function($scope, FriendsFactory, $routeParams){
    function show(id){
        FriendsFactory.show(id, function(data){
            $scope.user = data;
        })
    }
    show($routeParams.id);
}]);
