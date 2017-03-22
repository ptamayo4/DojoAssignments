var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
    first_name: {type: String, required: true, minlength: 2},
    last_name: {type: String, required: true, minlength: 2},
    birthday: {type: Date, required: true}
}, {timestamps: true});

mongoose.model('Friend', FriendSchema);
