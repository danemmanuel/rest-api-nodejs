'use strict';
module.exports = function(app) {
  var controllerLogin = require('../controllers/loginController');
  var usuarioController = require('../controllers/usuarioController');

  app.route('/login').post(controllerLogin);
  app.route('/cadastro').post(usuarioController.create);
  app.route('/listar').get(usuarioController.findAll);
  app.route('/usuario').get(usuarioController.findByName);
};
