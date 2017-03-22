app.controller('newController', ['$scope','friendsFactory', function($scope, friendsFactory) {
  var index = function(){
      friendsFactory.index(function(data){
          $scope.friends = data;
      })
  }
  index();
  $scope.create = function() {
      friendsFactory.create($scope.newFriend, function(data) {
          // If we needed to display an updated list of friends on this page, we would have to do this;
          $scope.friends = data;
      });
  }
}]);
