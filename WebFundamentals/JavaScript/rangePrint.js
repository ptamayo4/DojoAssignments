function printRange(start, end, skip) {
    //First catch to see if end and skip values aren't passed
    //Can we overload functions in javascript?
    if(!end && !skip){
        for(var i = 0; i < start; i++){
            console.log(i);
        }
    } else if(!skip){
        for(var i = start; i < end; i++){
            console.log(i);
        }
    } else {
        for(var i = start; i < end; i+=skip){
            console.log(i);
        }
    }
}
printRange(2,10,2);
