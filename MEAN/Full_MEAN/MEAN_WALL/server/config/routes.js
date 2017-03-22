console.log("Routes");
var sC = require('../controllers/server_controller.js')
module.exports = function(app){
    app.post('/login', sC.login);
    app.post('/register', sC.register);
    app.get('/logout', sC.logout);
    app.get('/current', sC.current);
    app.post('/post', sC.addPost);
    app.get('/post', sC.getPosts);
    app.post('/comment/:post_id', sC.addComment);
}
