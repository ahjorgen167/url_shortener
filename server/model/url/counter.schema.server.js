module.exports = function() {
  var mongoose = require('mongoose');

	var CounterSchema = mongoose.Schema({
    _id: {type: String, required: true},
    seq: { type: Number, default: 0 }
	}, {collection: "shortener.counter"});

  return CounterSchema;
};
