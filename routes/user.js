var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var SchemaUser = require('../models/User.js');
var User = mongoose.model('User', SchemaUser);
var crypto = require('crypto');

/* GET ALL Users */
router.get('/', function(req, res, next) {
  User.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE User BY ID */
router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/email/:param', function(req, res, next) {
  User.find({'email': req.params.param}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE User */
router.post('/', function(req, res, next) {
  req.body.password = crypto.createHash('sha256').update(req.body.pass).digest('hex');
  User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE USer */
router.put('/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE User */
router.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



module.exports = router;
