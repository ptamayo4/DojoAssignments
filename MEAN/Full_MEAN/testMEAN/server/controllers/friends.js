console.log('friends controller');

var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = {
    index: function(req,res){
        Friend.find({}, function(err,data){
            if(err){
                res.status(400).send("Error when loading friends");
            }
            res.json(data)
        })
    },
    create: function(req,res){
        var friend = new Friend(req.body)
        friend.save(function(err, data){
            if(err){
                res.status(400).send("Error when adding friend");
            }
            res.sendStatus(200);
        })
    },
    update: function(req,res){
        Friend.update({_id:req.params.id}, req.body, function(err){
            if(err){
                res.status(400).send("Problem Updating");
            }
            res.sendStatus(200)
        })
    },
    delete: function(req,res){
        Friend.findOne({_id:req.params.id}, function(err, data){
            if(data == null){
                res.status(400).send("No Friend Found")
            }
            data.remove()
            res.status(200).send("Friend was deleted")
        })
    },
    show: function(req,res){
        Friend.findOne({_id:req.params.id}, function(err, data){
            if(data == null){
                res.status(400).send("No friend found")
            }
            res.json(data)
        })
    }
}
