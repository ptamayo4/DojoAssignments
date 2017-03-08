module.exports = function(){
    return {
        add: function(num1, num2){
            return num1 + num2;
        },
        multiply: function(num1,num2){
            return num1 * num2;
        },
        square: function(num){
            return num * num;
        },
        random: function(num1,num2){
            if(num1 > num2){
                temp = num1;
                num1 = num2;
                num2 = temp;
            }
            return Math.round(Math.random() * (num2 - num1)) + num1
        }
    }
};
