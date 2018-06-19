var mongoose = require('mongoose');
var User = require('./User');
var comment = require('./Comment');

var BeerSchema = new mongoose.Schema({
  nom: String,
  brasserie: String,
  description: String,
  favorite: Number,
  alcool: Number,
  comments: [comment],
  updated_date: { type: Date, default: Date.now },
});

module.exports = BeerSchema;
