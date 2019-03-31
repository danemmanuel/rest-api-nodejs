'use strict';
module.exports = function(app) {
  var produto = require('../controllers/produtoController');
  var valida = require('../../validarJWT');
  // todoList Routes
  app
    .route('/produtos')
    .get(valida, produto.findAll)
    .post(produto.create);

  app
    .route('/produtos/:taskId')
    .get(produto.findById)
    .put(produto.updateById)
    .delete(produto.deleteById);
};
