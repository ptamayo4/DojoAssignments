console.log("Routes!!!");
console.log('routes');

var friends = require('../controllers/friends.js')

module.exports = function(app){
    app.get('/friends', function(req, res) {
      friends.index(req, res);
    });
    app.get('/friends/:id', function(req, res) {
      friends.show(req, res);
    });
    app.post('/friends', function(req, res) {
      friends.create(req, res);
    });
    app.put('/friends/:id', function(req, res) {
      friends.update(req, res);
    });
    app.delete('/friends/:id', function(req, res) {
      friends.delete(req, res);
});
}
