function personConstructor(name){
    var person = {
        name: name,
        distance_traveled: 0,

        say_name: function(){
            console.log(this.name);
        },
        say_something: function(arg){
            console.log(this.name + " says '" + arg + "'");
        },
        walk: function(){
            alert(this.name + " is walking");
            this.distance_traveled += 3;
        },
        run: function(){
            alert(this.name + " is running");
            this.distance_traveled += 10;
        },
        crawl: function(){
            alert(this.name + " is crawling");
            this.distance_traveled += 1;
        }
    }
    return person;
}
// console.log(personConstructor("Pat"));

function ninjaConstructor(name){
    var ninja = {
        name: name,
        cohort: "January",
        belt: "Yellow",

        level_up: function(){
            if (ninja.belt == "Yellow"){
                ninja.belt = "Red";
            } else if (ninja.belt == "Red") {
                ninja.belt = "Black";
            } else if (ninja.belt == "Black") {
                alert("Maximum Belt Achieved");
            }
        }
    }
    return ninja;
}
test = ninjaConstructor("Guy");
console.log(test);
test.level_up();
console.log(test);
