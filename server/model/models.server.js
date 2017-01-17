module.exports = function() {
    var mongoose = require('mongoose');
    var connectionString = 'mongodb://localhost/shortener';

    if(process.env.MONGODB_URI) {
        connectionString = process.env.MONGODB_URI
    }

    var connection = mongoose.connect(connectionString);

    var models = {
        urlModel: require("./url/url.model.server")(),
    };
    

    return models;
};
