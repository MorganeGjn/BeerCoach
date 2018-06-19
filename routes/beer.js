var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var SchemaBeer = require('../models/Beer.js');
var Beer = mongoose.model('Beer', SchemaBeer);

/* GET ALL BeerS */
router.get('/', function(req, res, next) {
  Beer.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Beer BY ID*/
router.get('/:id', function(req, res, next) {
  Beer.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


router.get('/search/:param', function(req, res, next) {
  /*var para =[];
  var j = 0;
  var size = 0;
  for(var i=0; i<req.params.param; i++){
    if(req.params.param[i] == ""){
      para[j] = req.params.param[(i-size)-i];
      size = size + i;
      j++;
    }
    else if(req.params.param[i] == "\0"){
      para[j] = req.params.param[(i-size)-i];
    }
  }*/
  Beer.find({$or: [{"nom": { $regex: req.params.param, $options: 'x' }},
                   {"brasserie":{ $regex: req.params.param, $options: 'x' }}]},
                   function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Beer */
router.post('/', function(req, res, next) {
  Beer.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Beer */
router.put('/:id', function(req, res, next) {
  Beer.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Beer */
router.delete('/:id', function(req, res, next) {
  Beer.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
