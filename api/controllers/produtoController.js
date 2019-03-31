'use strict';

var mongoose = require('mongoose'),
  Produto = mongoose.model('Produtos');

exports.findAll = (req, res) => {
  Produto.find({}, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.create = (req, res) => {
  var new_task = new Produto(req.body);
  new_task.save((err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.findById = (req, res) => {
  Produto.findById(req.params.taskId, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.updateById = (req, res) => {
  Produto.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true },
    (err, task) => {
      if (err) res.send(err);
      res.json(task);
    }
  );
};

exports.deleteById = (req, res) => {
  req.body.ativo = false;
  Produto.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true },
    (err, task) => {
      if (err) res.send(err);
      res.json(task);
    }
  );
};
