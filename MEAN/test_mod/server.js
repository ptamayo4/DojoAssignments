// require express and path
var express = require("express");
var path = require("path");
// create the express app
var app = express();
// require bodyParser since we need to handle post data for adding a user
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./client/static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');
//Connects this file to the new routes.js file
var routes_setter = require('./server/config/routes.js');

//sends the routes.js file the current app to use the routes specified
routes_setter(app);

app.listen(8000, function() {
  console.log("listening on port 8000");
})
