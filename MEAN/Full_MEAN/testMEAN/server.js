var express = require('express'),
    path    = require('path'),
    bp      = require('body-parser'),
    app     = express();

app.use(express.static(path.join(__dirname, 'client')));  //Serves static files from client folder
app.use(express.static(path.join(__dirname, 'bower_components'))); //server static files from bower_components folder

app.use(bp.urlencoded({extended:true}));
app.use(bp.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app)

app.listen(8000, function(){
    console.log("Listening on 8000");
});
