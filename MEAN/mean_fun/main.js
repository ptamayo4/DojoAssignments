var x = [3,5,"Dojo","rocks","Michael","Sensei"];
for (var i=0; i < x.length; i++){
    console.log(x[i])
}
x.push(100);
x = x + ["hello", "world", "JavaScript is fun"]; //Add additional array to existing array
console.log(x);

var sum = 0;
for(var i = 1; i <= 500; i++){
    sum += i;
}
console.log(sum); //Sums all numbers 1-500

var min_arr = [1, 5, 90, 25, -3, 0]; //Finds the minimum value in this array
var min = min_arr[0];
for(var i = 0; i < min_arr.length; i++){
    if(min_arr[i] < min){
        min = min_arr[i];
    }
}
console.log(min);

var avg_sum = 0; //Finds the average value of the previous array
for(var i = 0; i < min_arr.length; i++){
    avg_sum += min_arr[i];
}
avg = avg_sum / min_arr.length;
console.log(avg);

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (var key in newNinja){
    console.log(key + ":", newNinja[key]);
}
