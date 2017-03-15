var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/mongoose_pack');
mongoose.Promise = global.Promise;

var MongooseSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    age: {type: Number, required: true}
});

mongoose.model('Mongoose', MongooseSchema);
var Mongoose = mongoose.model('Mongoose');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    Mongoose.find({}, function(err, data){
        if(err){
            console.log(err);
        }
        res.render('index', {mongoose: data});
    });
});

app.get('/mongooses/new', function(req,res){
    res.render('newgoose')
});

app.get('/mongooses/:id', function(req,res){
    Mongoose.find({_id:req.params.id}, function(err, data){
        if(err){
            console.log(err);
            res.redirect('/')
        }
        else{
            res.render('mongoose', {mongoose: data})
        }
    });
});

app.post('/mongooses', function(req,res){
    var goose = new Mongoose(req.body)
    goose.save(function(error){
        if(error){
            console.log(error);
            res.redirect('/mongooses/new')
        }
        else {
            console.log("Success");
            res.redirect('/')
        }
    });
});

app.get('/mongooses/edit/:id', function(req,res){
    Mongoose.find({_id:req.params.id}, function(err, data){
        if(err){
            console.log(err);
            res.redirect('/')
        }
        else{
            res.render('goose_edit', {mongoose: data})
        }
    });
});

app.post('/mongoose/:id', function(req, res){
    Mongoose.update({_id:req.params.id}, {$set: {name: req.body.name, age: req.body.age }}, function(err, data){
        if(err){
            console.log(err);
        }
        else{
            console.log("Success");
        }
    })
    res.redirect('/');
});

app.post('/mongoose/destroy/:id', function(req, res){
    console.log(req.params.id);
    Mongoose.remove({_id:req.params.id}, function(err, data){
        if(err){
            console.log(err);
        }
        else{
            console.log("Del Taco");
        }
    })
    res.redirect('/');
});


app.listen(8000, function(){
    console.log("Listening on 8000");
})
