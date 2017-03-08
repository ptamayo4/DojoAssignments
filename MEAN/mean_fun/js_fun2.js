var mathThing = {
    adder: function(x,y){
        var sum = 0;
        if(y < x){
            var temp = x;
            x = y;
            y = temp;
        }
        for(var i = x; i <= y; i++){
            sum += i;
        }
        return sum
    },

    findMin: function(arr){
        var min = arr[0];
        for(var i = 0; i < arr.length; i++){
            if (arr[i] < min){
                min = arr[i];
            }
        }
        return min;
    },

    average: function(arr){
        var sum = 0;
        for(var i = 0; i < arr.length; i++){
            sum += arr[i];
        }
        return sum / arr.length
    }
}
// arr = [2,3,4,5,-6,7,8,-9,10];
// console.log(findMin(arr));

console.log(mathThing.adder(4,6));

var person = {
    name: "Patrick",
    distance_traveled: 0,

    say_name: function(){
        console.log(this.name);
    },
    say_something: function(arg){
        console.log(this.name + " says '" + arg + "'");
    },
    walk: function(){
        console.log(this.name + " is walking");
        this.distance_traveled += 3;
    },
    run: function(){
        console.log(this.name + " is running");
        this.distance_traveled += 10;
    },
    crawl: function(){
        console.log(this.name + " is crawling");
        this.distance_traveled += 1;
    }
}
person.say_name()
person.say_something("I am cool")
person.walk()
console.log(person.distance_traveled);
