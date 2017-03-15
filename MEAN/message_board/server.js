var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/message_board');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var MessageSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 4},
    body: {type: String, required: true, minlength: 4},
    comments: []
}, {timestamps: true});

mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    Message.find({}, function(error, data){
        if(error){
            console.log(error);
        }
        else{
            res.render('index', {messages: data});
        }
    });
});

app.post('/message', function(req, res){
    console.log(req.body);
    var message = new Message(req.body);
    message.save(function(error){
        if(error){
            console.log(error);
            res.redirect('/');
        }
        else{
            console.log("Success");
            res.redirect('/');
        }
    });
});

app.post("/comment/:id", function(req,res){
    if(req.body.name.length < 4 || req.body.body.length < 4){
        console.log("Invalid name or comment");
        res.redirect('/');
    }else{
        Message.update({_id:req.params.id}, {$push: {comments: {comment_name: req.body.name, comment_body: req.body.body}}}, function(err,data){
            if(err){
                console.log(err);
            }
            else{
                console.log(data);
            }
        });
        res.redirect('/');    
    }
});

app.listen(8000, function(){
    console.log("Listening on 8000");
});
