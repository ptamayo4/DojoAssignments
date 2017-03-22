console.log("Wall Controller");
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Comment = mongoose.model('Comment');
var Post = mongoose.model('Post');

module.exports = {
    login: function(req,res){
        User.findOne({email: req.body.email}, function(err,data){
            if(data == null){
                res.status(400).send("User Not Found")
            }else{
                req.session.user = data;
                console.log("PRINTING SESSION", req.session.user);
                res.sendStatus(200);
            }
        })
    },
    register: function(req,res){
        var user = new User(req.body);
        user.save(function(err, data){
            if(err){
                res.status(400).send("Error when adding user");
            } else {
                req.session.user = data;
                res.sendStatus(200);
            }
        })
    },
    current: function(req,res){
        if(req.session.user){
            res.json(req.session.user);
        } else {
            res.status(401).send("No User in Session")
        }
    },
    logout: function(req,res){
        console.log("Logging user out");
        req.session.destroy();
        res.redirect('/');
    },
    addPost: function(req,res){
        var post = new Post(req.body);
        post._user = (req.session.user._id)
        post.save(function(err, data){
            if(err){
                res.status(400).send("Error when adding post")
            } else {
                res.sendStatus(200);
            }
        })
        console.log(post);
    },
    getPosts: function(req,res){
        Post.find({}).populate('_user').populate({path: 'comments', populate: {path: '_user'}}).exec(function(err, posts){
            if(err){
                res.status(400).send("Whoops")
            } else {
                res.json(posts)
            }
        })
    },
    addComment: function(req,res){
        Post.findOne({_id: req.params.post_id}, function(err, post){
            if(err){
                res.status(400).send("Whoops")
            } else {
                var comment = new Comment(req.body);
                comment._user = req.session.user._id;
                comment._post = post._id;
                comment.save(function(err, newComment){
                    if(err){
                        res.status(400).send("Whoops")
                    } else {
                        post.comments.push(newComment);
                        post.save(function(err, updatedPost){
                            if(err){
                                res.status(400).send("Whoops")
                            } else {
                                res.sendStatus(200)
                            }
                        })
                    }
                })
            }
        })
    }
}
