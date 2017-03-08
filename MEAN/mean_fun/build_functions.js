function runningLogger(){
    console.log("I am running");
}

function multiplyByTen(num){
    return num * 10;
}

// console.log(multiplyByTen(5));

function stringReturnOne(){
    return "Wubba Lubba"
}

function stringReturnTwo() {
    return "Dub Dub"
}

// console.log(stringReturnOne() + " " + stringReturnTwo());

function caller(test){
    if (typeof(test) === 'function'){
        test();
    }
    else {
        console.log("fail");
    }
}

// caller(runningLogger);

function myDoubleConsoleLog(param1, param2) {
    if (typeof(param1) === 'function'){
        console.log(param1());
    }
    if (typeof(param2) === 'function'){
        console.log(param2());
    }
}

// myDoubleConsoleLog(stringReturnOne, stringReturnTwo)

function caller2(test){
    console.log("Starting");
    setTimeout(function(){
        if (typeof(test) === 'function'){
        test(stringReturnOne, stringReturnTwo);
        }
    }, 2000);
    console.log("ending?");
    return "interesting";
}

console.log(caller2(myDoubleConsoleLog));
