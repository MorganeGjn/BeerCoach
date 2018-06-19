var mongoose = require('mongoose');
var Beer = require('./Beer');
var User = require('./User');

var CommentSchema = new mongoose.Schema({
  titre: String,
  message: String,
  beer: Beer,
  user: User,
  updated_date: { type: Date, default: Date.now },
});

module.exports = CommentSchema;
