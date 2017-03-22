var mongoose = require('mongoose'),
    fs       = require('fs'),
    path     = require('path');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mean_messages');
var models_path = path.join(__dirname, '../models');

fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') >= 0){
        require(path.join(models_path + '/' + file));
    }
});
