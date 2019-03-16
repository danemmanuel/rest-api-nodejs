'use strict';
module.exports = function(app) {
  var produto = require('../controllers/produtoController');

  // todoList Routes
  app
    .route('/produtos')
    .get(produto.list_all_tasks)
    .post(produto.create_a_task);

  app
    .route('/produtos/:taskId')
    .get(produto.read_a_task)
    .put(produto.update_a_task)
    .delete(produto.delete_a_task);
};
