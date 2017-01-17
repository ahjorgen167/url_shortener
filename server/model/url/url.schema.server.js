module.exports = function() {
  var mongoose = require('mongoose');
  var autoIncrement = require('mongoose-auto-increment');
  var CounterSchema = require("./counter.schema.server")();

  autoIncrement.initialize(mongoose.connection);


  var urlSchema = mongoose.Schema({
    _id: {type: Number, index: true},
    decoded_url: String,
    created_at: {type: Date, default: Date.now},
  }, {collection: "shortener.url"});


  urlSchema.plugin(autoIncrement.plugin, 'URL');

/*
  urlSchema.pre('save', function(next){
    var doc = this;
    counter.update({_id: 'url_count'}, {$set: {}}, {upsert: true, setDefaultsOnInsert: true}, {$inc: {seq: 1} }, function(error, counter) {
        if (error)
            return next(error);
        doc.created_at = new Date();
        doc._id = counter.seq;
        next();
    });
  });
 */
//if (id) {
 //   Model.update({_id: id}, obj, {upsert: true}, function (err) {...});
//}

  return urlSchema;
};
