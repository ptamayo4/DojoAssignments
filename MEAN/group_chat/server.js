var express = require('express');
var path = require('path');
var session = require('express-session');
var app = express();

app.use(express.static(path.join(__dirname, './static')));
app.use(session({secret: 'hurrdurr'}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render('index')
});

var server = app.listen(8000, function(){
    console.log('Listening on 8000');
});

var io = require('socket.io').listen(server);
var all_messages = [];
io.sockets.on('connection', function(socket){
    socket.on('new_user', function(data){
        var user = data.name;
        for(var i = 0; i < all_messages.length; i++){
            socket.emit('server_response', {message: all_messages[i].message, user: all_messages[i].user})
        }
    });
    socket.on('new_message', function(data){
        all_messages.push({message:data.message, user: data.user})
        io.emit('server_response', {message: data.message, user: data.user})
    })
});
