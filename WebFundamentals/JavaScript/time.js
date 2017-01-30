//If minutes less than 30, "just after" the hour, more than 30, "almost" the next hour
//AM / PM, "in the morning", "in the evening",

function timeTeller(hour, minute, ampm){
    var ampmVal;
    if(ampm === "AM"){
        ampmVal = " in the morning"
    } else {
        ampmVal = " in the evening"
    }

    if(minute % 15 == 0){
        if(minute === 15){
            console.log("It's a quarter after " + hour + ampmVal);
            return;
        } else if(minute === 30){
            console.log("It's half past " + hour + ampmVal);
            return;
        } else if(minute === 45){
            console.log("It's a quarter till " + (hour + 1) + ampmVal);
            return;
        }
    }

    if(minute < 30){
        console.log("It's just after " + hour + ampmVal);
    } else if(minute > 30){
        console.log("It's almost " + (hour + 1) + ampmVal);
    }
}

timeTeller(8,0,"PM");
