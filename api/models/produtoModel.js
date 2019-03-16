'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProdutoSchema = new Schema({
  nome: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  preco: {
    type: Number
  }
});

module.exports = mongoose.model('Produtos', ProdutoSchema);
