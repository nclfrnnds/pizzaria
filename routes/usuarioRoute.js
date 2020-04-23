const express = require('express');
const usuarioController = require('../controllers/usuarioController');

const route = express.Router();

//route.get('/', usuarioController.verIndex);
//route.get('/:nome', usuarioController.verUsuario);

route.get('/login', usuarioController.formLogin);
route.post('/login', usuarioController.realizarLogin);
route.get('/registro', usuarioController.formRegistro);
route.post('/registro', usuarioController.realizarRegistro);

/*
route.get('/:nomeCategoria/:subCategoria', (req, res) => {
    let {nome} = req.params;
    res.send(`Seja, bem-vindo, ${nome}`);
});
*/

module.exports = route;