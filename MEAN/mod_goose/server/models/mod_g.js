var mongoose = require('mongoose');

var MongooseSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    age: {type: Number, required: true}
});

var Mongoose = mongoose.model('Mongoose', MongooseSchema);
