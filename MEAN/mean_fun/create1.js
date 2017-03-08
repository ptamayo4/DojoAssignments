function VehcicleConstructor(name, wheels, passengers){
    var vehicle = {}
    vehicle.name = name;
    vehicle.wheels = wheels;
    vehicle.passengers = passengers;

    vehicle.makeNoise = function(){
        console.log("Hurr Durr");
    }
    return vehicle;
}
var bike = VehcicleConstructor("Red", 2, 2);
bike.makeNoise = function(){
    console.log("Ring ring");
}
bike.makeNoise()

var sedan = VehcicleConstructor("Black", 4, 5);
sedan.makeNoise = function(){
    console.log("Honk Honk!");
}

var bus = VehcicleConstructor("Yello", 4, 10);
bus.addPassengers = function(num){
    bus.passengers += num;
}

bus.addPassengers(12);
console.log(bus.passengers);
