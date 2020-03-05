const Usuario = require('../models/Usuario');

let usuarioController = {
    verIndex: (req, res) => {
        res.send("Você está vendo a página de usuários da pizzaria");
    },
    verUsuario: (req, res) => {
        let {nome} = req.params;
        res.send(`Seja, bem-vindo, ${nome}`);
    }
}

module.exports = usuarioController;