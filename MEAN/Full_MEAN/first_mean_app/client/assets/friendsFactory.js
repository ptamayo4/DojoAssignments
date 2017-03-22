app.factory('FriendsFactory', ['$location', '$http', function($location, $http){
    var factory = {};
    factory.getFriends = function(callback){
        $http({
            url: '/friends',
            method: 'GET'
        }).then(function(res){
            callback(res.data);
        })
    }
    factory.newFriend = function(friend){
        $http({
            url: '/friends',
            method: 'POST',
            data: friend
        }).then(function(res){
            $location.url('/')
        }, function(res){
            console.log(res);
        });
    }
    factory.show = function(id, callback){
        $http({
            url: '/friends/' + id,
            method: 'GET'
        }).then(function(res){
            callback(res.data)
        }, function(res){
            console.log(res);
        })
    }
    factory.edit = function(friend, id){
        $http({
            url: '/friends/' + id,
            method: 'PUT',
            data: friend
        }).then(function(res){
            $location.url('/show/' + id)
        }, function(res){
            console.log(res);
        })
    }
    factory.deleteUser = function(id, callback){
        $http({
            url: '/friends/' + id,
            method: 'DELETE',
        }).then(function(res){
            console.log(res);
            callback();
        })
    }
    return factory;
}]);
