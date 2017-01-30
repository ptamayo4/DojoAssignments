var hour = 7;
var minute = 30;
var period = "PM";

function timeTeller(hour, minute, period){
    var timeVal;

    if(period === "AM"){
        timeVal = " in the morning.";
    } else {
        timeVal = " in the evening.";
    }

    if(minute === 15){
        console.log("It's a quarter after " + hour + timeVal);
    } else if(minute === 30){
        console.log("It's half past " + hour + timeVal);
    } else if(minute === 45){
        console.log("It's a quarter till " + hour + timeVal);
    } else if(minute < 30){
        console.log("It's just after " + hour + timeVal);
    } else {
        console.log("It's almost " + (hour + 1) + timeVal);
    }
}
timeTeller(hour, minute, period);
