const Cardapio = require('../models/Cardapio');

let cardapioController = {
    verIndex: (req, res) => {
        res.send("Você está vendo o cardápio da pizzaria");
    },
    listarCardapio: (req, res) => {
        let listaDePizza = Cardapio.listarCardapio();
        res.send(listaDePizza);
    },
    cadastrarPizzaPreco: (req, res) => {
        res.send("Cadastrou pizza com sucesso!");
    }
}

module.exports = cardapioController;