var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/quotes');
mongoose.Promise = global.Promise;

var QuoteSchema = new mongoose.Schema({
    user: {type: String, required: true, minlength: 2},
    quote: {type: String, required: true, minlength: 2},
});
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});

app.post('/quotes', function(req, res){
    var quote = new Quote(req.body)
    quote.save(function(err){
        if(err){
            console.log("You dun goofed");
            res.redirect('/')
        }
        else{
            console.log("Success");
            res.redirect('/quotes')
        }
    });
});

app.get('/quotes', function(req, res){
    Quote.find({}, function(err,quotes){
        if(err){
            console.log(err);
        }
        res.render('quotes', {quotes: quotes})
    });
});

app.listen(8000, function(){
    console.log("Listening on 8000");
})
