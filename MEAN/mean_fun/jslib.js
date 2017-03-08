var _ = {
    map: function(arr, callback){
        for(var i = 0; i < arr.length; i++){
            arr[i] = callback(arr[i]);
        }
        return arr;
    },

    reduce: function(arr, callback){
        var sum = 0;
        for(var i = 0; i < arr.length; i++){
            sum = callback(sum, arr[i]);
        }
        return sum
    },

    find: function(arr, callback){
        for(var i = 0; i < arr.length; i++){
            if(callback(arr[i])){
                return arr[i]
            }
        }
    },

    filter: function(arr, callback){
        filterArr = [];
        for(var i = 0; i < arr.length; i++){
            if(callback(arr[i])){
                filterArr.push(arr[i])
            }
        }
        return filterArr
    },

    reject: function(arr, callback){
        rejectArr = []
        for(var i = 0; i < arr.length; i++){
            if(!callback(arr[i]) && arr[i] != 7){
                rejectArr.push(arr[i]);
            }
        }
        return rejectArr
    }
}
var arr = [1,2,3,4,5,6,7,8,9];
// console.log(_.map(arr, function(num){return num * 3})); //Returns array multiplied by value
// console.log(_.reduce(arr, function(num, memo){return num + memo})); //Adds all elements in array
// console.log(_.find(arr, function(num){return num % 2 == 0})); //Returns first even value
// console.log(_.filter(arr, function(num){return num % 3 == 0})); //Returns all multiples of 3
console.log(_.reject(arr, function(num){return num % 2 == 0})); //Rejects all even values and returns list of odds
//Also rejects 1 just for fun
