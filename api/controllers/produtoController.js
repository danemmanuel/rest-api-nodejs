'use strict';

var mongoose = require('mongoose'),
  Produto = mongoose.model('Produtos');

exports.list_all_tasks = function(req, res) {
  Produto.find({}, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.create_a_task = function(req, res) {
  var new_task = new Produto(req.body);
  new_task.save(function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.read_a_task = function(req, res) {
  Produto.findById(req.params.taskId, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.update_a_task = function(req, res) {
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

exports.delete_a_task = function(req, res) {
  Produto.remove(
    {
      _id: req.params.taskId
    },
    function(err, task) {
      if (err) res.send(err);
      res.json({ message: 'Task successfully deleted' });
    }
  );
};
