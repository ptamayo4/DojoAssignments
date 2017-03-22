var modgoose = require('../controllers/controller.js')
module.exports = function(app){
    app.get('/', function(req, res){
        modgoose.show(req,res);
    });
    app.get('/mongooses/new', function(req,res){
        res.render('newgoose')
    });
    app.get('/mongooses/:id', function(req,res){
        modgoose.show_single(req,res)
    });
    app.post('/mongooses', function(req,res){
        modgoose.create(req, res);
    });
    app.get('/mongooses/edit/:id', function(req,res){
        modgoose.edit(req,res)
    });
    app.post('/mongoose/:id', function(req, res){
        modgoose.update(req, res);
    });
    app.post('/mongoose/destroy/:id', function(req, res){
        modgoose.destroy(req, res);
    });
}
