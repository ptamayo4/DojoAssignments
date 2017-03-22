console.log("Future MONGOOSE!");
var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

mongoose.connect('mongodb://localhost/my_mean_friends');
var models_path = path.join(__dirname, '../models');

fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') >= 0){
        require(path.join(models_path + '/' + file));
    }
});
