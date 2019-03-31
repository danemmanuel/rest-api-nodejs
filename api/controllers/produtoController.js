'use strict';

var mongoose = require('mongoose'),
  Produto = mongoose.model('Produtos');

exports.findAll = function(req, res) {
  Produto.find({}, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.create = function(req, res) {
  var new_task = new Produto(req.body);
  new_task.save(function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.findById = function(req, res) {
  Produto.findById(req.params.taskId, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.updateById = function(req, res) {
  Produto.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true },
    function(err, task) {
      if (err) res.send(err);
      res.json(task);
    }
  );
};

exports.deleteById = function(req, res) {
  req.body.ativo = false;
  Produto.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true },
    function(err, task) {
      if (err) res.send(err);
      res.json(task);
    }
  );
};
