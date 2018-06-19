var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var CommentSchema = require('../models/Comment.js');
var comment = mongoose.model('comment', CommentSchema);

/* GET ALL comments */
router.get('/', function(req, res, next) {
  comment.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE comment BY ID */
/*router.get('/:id', function(req, res, next) {
  comment.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});*/

router.get('/:nomBeer', function(req, res, next) {
  comment.find({"beer.nom": req.params.nomBeer}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE comment */
router.post('/', function(req, res, next) {
  comment.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE comment */
router.put('/:id', function(req, res, next) {
  comment.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE comment */
router.delete('/:id', function(req, res, next) {
  comment.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
