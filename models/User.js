var mongoose = require('mongoose');
var Beer = require('./Beer');

var UserSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  email: String,
  password: String,
  description: String,
  favoriteBeer: [Beer],
  updated_date: { type: Date, default: Date.now },
});

module.exports = UserSchema;
