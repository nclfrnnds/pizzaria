const express = require('express');
const cardapioController = require('../controllers/cardapioController');

let route = express.Router();

route.get('/', cardapioController.verIndex);
route.get('/cadastrar/:pizza/:preco', cardapioController.cadastrarPizzaPreco);
route.get('/ver', cardapioController.listarCardapio);

module.exports = route;