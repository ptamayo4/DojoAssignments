app.factory('WallFactory', ['$location', '$http', function($location, $http){
    var factory = {};
    factory.login = function(user){
        $http({
            url: '/login',
            method: 'POST',
            data: user
        }).then(function(res){
            console.log(res.data);
            $location.url('/wall')
        }, function(res){
            console.log(res.data);
        });
    },
    factory.register = function(user){
        $http({
            url: '/register',
            method: 'POST',
            data: user
        }).then(function(res){
            $location.url('/wall')
        })
    }
    factory.currentUser = function(callback){
        $http({
            url: '/current',
            method: 'GET'
        }).then(function(res){
            callback(res.data)
        }, function(res){
            $location.url('/')
            console.log(res);
        })
    }
    factory.addPost = function(post, callback){
        $http({
            url: '/post',
            method: 'POST',
            data: post
        }).then(function(res){
            callback();
        }, function(res){
            console.log(res);
        })
    }
    factory.getPosts = function(callback){
        $http({
            url: '/post',
            method: 'GET'
        }).then(function(res){
            callback(res.data)
        })
    }
    factory.addComment = function(comment, post_id, callback){
        $http({
            url: '/comment/' + post_id,
            method: 'POST',
            data: comment
        }).then(function(res){
            callback();
            console.log(res);
        }, function(res){
            console.log(res);
        })
    }
    return factory;
}])
