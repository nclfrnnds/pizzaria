const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');

let usuarioController = {

    verIndex: (req, res) => {
        res.send("Você está vendo a página de usuários da pizzaria");
    },

    verUsuario: (req, res) => {
        let {nome} = req.params;
        res.render('usuario', {nome});
    },

    formLogin: (req, res) => {
        return res.render('auth/login');
    },

    realizarLogin: (req, res) => {
        const {email, senha} = req.body;
        const usuariosalvo = Usuario.buscarUsuario(email);

        if (!usuariosalvo) {
            return res.render('auth/login', {mensagem: "Email ou senha invalidos!"})
        };

        if (!bcrypt.compareSync(senha, usuariosalvo.senha)) {
            return res.render('auth/login', {mensagem: "Email ou senha invalidos!"})
        };

        req.session.user = {
            nome: usuariosalvo.nome,
            email: usuariosalvo.email
        }

        return res.redirect('/cardapio/ver')
    },

    formRegistro: (req, res) => {
        return res.render('auth/registro');
    },

    realizarRegistro: (req, res) => {
        let {nome, email, senha} = req.body;
        senha = bcrypt.hashSync(senha, 10);
        Usuario.cadastrarUsuario(nome, email, senha);
        return res.redirect('/login');
    },

}

module.exports = usuarioController;