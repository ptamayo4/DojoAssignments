var express = require('express');
var path = require('path');

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render('index');
});

// app.post('/success', function(req,res){
//     console.log(req.body);
//     form_data = req.body
//     res.render('success', {data: form_data})
// });

var server = app.listen(8000, function(){
    console.log("Herro World");
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
    socket.on('form_submit', function(data){
        var num = (Math.round(Math.random()*999) + 1)
        socket.emit('server_response', {response: data.form_data, num: num})
        socket.emit('random_number', {num: num})
    });
});
