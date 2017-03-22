var express    = require('express'),
    path       = require('path'),
    bp         = require('body-parser'),
    session    = require('express-session'),
    app        = express();

var seshConfig = {
    secret: "WubbaLubbaDubbDubb",
    resave: false,
    saveUninitialized: true,
    name: 'myCookie',
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 360000000
    }
}
app.use(session(seshConfig));

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(session({secret: 'MEANisMEAN'}));
app.use(bp.urlencoded({extended:true}));
app.use(bp.json());

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

app.listen(8000, function(){
    console.log("Listening on 8000");
});
