function VehcicleConstructor(name, wheels, passengers, speed){
    var distance_traveled = 0;
    var updateDistanceTraveled = function(){
        distance_traveled += speed;
    }
    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.speed = speed;
    this.makeNoise = function(){
        console.log("Hurr Durr");
    }
    this.move = function(){
        updateDistanceTraveled();
        this.makeNoise();
        console.log(distance_traveled);
    }
}
var bike = new VehcicleConstructor("Red", 2, 2, 15);
bike.makeNoise = function(){
    console.log("Ring ring");
}
bike.move();

var sedan = new VehcicleConstructor("Black", 4, 5, 110);
sedan.makeNoise = function(){
    console.log("Honk Honk!");
}

var bus = new VehcicleConstructor("Yello", 4, 10, 90);
bus.addPassengers = function(num){
    bus.passengers += num;
}
