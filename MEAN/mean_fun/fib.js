function fib(){
    var prev1 = 0;
    var prev2 = 1;

    function nacho(){
        var temp = prev1 + prev2;
        console.log(prev2);
        prev1 = prev2;
        prev2 = temp;
    }
    return nacho
}
var test = fib()
test()
test()
test()
test()
test()
test()
