var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 19,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        maxlength: 19,
        unique: true
    }
}, {timestamps: true});

mongoose.model('User', userSchema);

var postSchema = new mongoose.Schema({
    _user : {type: Schema.Types.ObjectId, ref: 'User'},
    text : {type: String, required: true},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true});

mongoose.model('Post', postSchema)

var commentSchema = new mongoose.Schema({
    _user : {type: Schema.Types.ObjectId, ref: 'User'},
    _post : {type: Schema.Types.ObjectId, ref: 'Post'},
    text : {type: String, required: true}
}, {timestamps: true});

mongoose.model('Comment', commentSchema)
