console.log("Friends Factory");
app.factory('friendsFactory', ['$http', function($http){
    var factory = {}
    factory.index = function(){
        $http.get('/friends').then(function(data, callback){
            var friends = data;
            console.log(friends);
            if (typeof(callback) == 'function'){
                callback(friends);
            }
        })
    }
    factory.show = function(){
        $http.get('/friends/:id').then(function(data){
            console.log(data);
        })
    }
    factory.create = function(newFriend, callback){
        $http.post('/friends').then(function(data){
            console.log(data);
            if(typeof(callback) == 'function'){
                callback(data.data)
            }
        })
    }
    factory.update = function(id, callback) {
        $http.put('/friends/:id').then(function(returned_data) {
            console.log(returned_data.data);
            if (typeof(callback) == 'function'){
                callback(returned_data.data);
            }
        })
    }
    return factory;
}]);
