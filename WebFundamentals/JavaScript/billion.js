var val = .01; //1 penny day one
for(var i = 2; i <= Infinity; i++){ //start multiplying day 2
    val *= 2;
    console.log(val);

    //Code to show how quickly the value becomes 10,000 > 21 days.
    if(val >= 10000){
        console.log(i + " days");
        break;
    }

    //Code to show how quickly value becomes 1,000,000,000 > 38 days
    //changed i to go to infinity, also couldve done a while loop
    //Also can modify this to show how long to reach Infinity > 1032 days
    
    //if(val >= Infinity)

    if(val >= 1000000000){
        console.log(i + " days");
        break;
    }
}
