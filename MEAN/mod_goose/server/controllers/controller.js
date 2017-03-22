var mongoose = require('mongoose');
var Mongoose = mongoose.model('Mongoose');

module.exports = {
    show: function(req, res){
        Mongoose.find({}, function(err, data){
            res.render('index', {mongoose: data});
        });
    },
    show_single: function(req, res){
        Mongoose.find({_id:req.params.id}, function(err, data){
            if(err){
                console.log(err);
                res.redirect('/')
            }
            else{
                res.render('mongoose', {mongoose: data})
            }
        });
    },
    create: function(req, res){
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
    },
    edit: function(req, res){
        Mongoose.find({_id:req.params.id}, function(err, data){
            if(err){
                console.log(err);
                res.redirect('/')
            }
            else{
                res.render('goose_edit', {mongoose: data})
            }
        });
    },
    update: function(req, res){
        Mongoose.update({_id:req.params.id}, {$set: {name: req.body.name, age: req.body.age }}, function(err, data){
            if(err){
                console.log(err);
            }
            else{
                console.log("Success");
            }
        })
        res.redirect('/');
    },
    destroy: function(req, res){
        Mongoose.remove({_id:req.params.id}, function(err, data){
            if(err){
                console.log(err);
            }
            else{
                console.log("Del Taco");
            }
        })
        res.redirect('/');
    }
}
