var express = require('express');
var path = require('path');

var app = express();


app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render('index')
});


var server = app.listen(8000, function(){
    console.log('listening at port 8000');
})

var io = require('socket.io').listen(server);
// Whenever a connection event happens (the connection event is built in) run the following code
io.sockets.on('connection', function (socket) {
    console.log("WE ARE USING SOCKETS!");
    console.log(socket.id);
    socket.on('button_clicked', function(data){
        console.log('Someone clicked a button! Reason: ' + data.reason);
        socket.emit('server_response', {response: "sockets are the best"});
    });
});
