function printFancy(arr, reverse, symbol){
    if(!symbol){
        symbol = " -> ";
    }
    if(reverse){
        for(var i = arr.length - 1; i >= 0; i--){
            console.log(i + symbol + arr[i]);
        }
    } else {
        for(var i = 0; i < arr.length; i++){
            console.log(i + symbol + arr[i]);
        }
    }
}
var arr = ["James", "Jill", "Jane", "Jack"];
//User can pass true to reverse array and can also specify symbol to seperate index and value
printFancy(arr,true," => ");
