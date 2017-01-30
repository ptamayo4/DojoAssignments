function arrNumOnly(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] === "number"){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

//Function to avoid creating a new array. Popcount keeps track of home many items reassigned and shuffled, then pops that amount off the back
function noNewArr(arr){
    var popCount = 0;
    for(var i = 0; i < arr.length - 1; i++){
        if(typeof arr[i] !== "number"){
            popCount++;
            for(var t = i; t < arr.length -1; t++){
                arr[t] = arr[t + 1];
            }
        }
    }
    for(var i = popCount; i > 0; i--){
        arr.pop(arr[i]);
    }
}


var arr = [5, "pepperoni", 6, "pizza", 42, "test", 16, 87];
noNewArr(arr);
console.log(arr);

//You do not need to return a new array.
