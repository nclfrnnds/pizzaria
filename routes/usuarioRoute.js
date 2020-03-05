const express = require('express');
const usuarioController = require('../controllers/usuarioController');

let route = express.Router();

route.get('/', usuarioController.verIndex);
route.get('/:nome', usuarioController.verUsuario);

/*
route.get('/:nomeCategoria/:subCategoria', (req, res) => {
    let {nome} = req.params;
    res.send(`Seja, bem-vindo, ${nome}`);
});
*/

module.exports = route;