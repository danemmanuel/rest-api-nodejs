'use strict';

var mongoose = require('mongoose'),
  Usuario = mongoose.model('Usuario');

exports.create = (req, res) => {
  var usuario = new Usuario(req.body);
  Usuario.findOne({ username: req.body.username }).then(user => {
    if (user) {
      return res.status(400).json({ usuario: 'Email already exists' });
    }
    usuario.save((err, task) => {
      if (err) res.send(err);
      return res.status(201).json(task);
    });
  });
};
