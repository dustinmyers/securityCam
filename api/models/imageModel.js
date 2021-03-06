var mongoose = require('mongoose');

var ImageModel = new mongoose.Schema({
    name: {type: String, required: true},
    created_on: Number,
    from_hardware: String,
    image_url: String
});

module.exports = mongoose.model('Image', ImageModel);

