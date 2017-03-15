var express = require('express');
var path = require('path');
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
});
mongoose.model('User', UserSchema);
var User = mongoose.model('User');


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    User.find({}, function(err,users){
        if(err){
            console.log(error);
        }
        res.render('index', {users:users})
    })
});

app.post('/users', function(req, res){
    console.log("POST DATA", req.body);
    var user = new User(req.body)
    user.save(function(error){
        if(error){
            console.log("You dun goofed");
        }
        else {
            console.log("Success");
        }
    })
    res.redirect('/')
})

app.listen(8000, function(){
    console.log("Listening on 8000");
});
