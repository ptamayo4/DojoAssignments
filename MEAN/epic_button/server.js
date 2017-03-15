var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render('index');
});

var server = app.listen(8000, function(){
    console.log("Listening on 8000");
});

var io = require('socket.io').listen(server)
var count = 0;
io.sockets.on('connection', function(socket){
    socket.emit('zero', {count:count});
    socket.on('epic_clicked', function(data){
        count++;
        console.log(count);
        io.emit('server_response', {count: count})
    });
    socket.on('reset_clicked', function(data){
        count = 0;
        io.emit('server_response', {count: count})
    });
});
