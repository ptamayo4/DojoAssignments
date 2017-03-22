app.controller('editController', ['$scope', 'friendsFactory', '$routeParams', function($scope, friendsFactory, $routeParams){
    friendsFactory.show($routeParams.id, function(returnedData){
        $scope.friend = data;
        console.log($scope.friend);
    })
    $scope.update = function(){
        friendsFactory.update($routeParams.id, function(returnedData){
            $scope.friend = data;
            console.log($scope.friend);
        })
    }
}]);
