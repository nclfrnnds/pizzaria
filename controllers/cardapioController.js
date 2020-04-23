const Cardapio = require('../models/Cardapio');
const email = require('../configs/email');

let cardapioController = {

    verIndex: (req, res) => {
        res.send("Você está vendo o cardápio da pizzaria");
    },

    listarCardapio: (req, res) => {
        let listaDePizza = Cardapio.listarCardapio();
        res.render('cardapio', {listaDePizza});
    },

    formCadastro: (req, res) => {
        /*
        let envioEmail = {
            from: 'nicoli-e9600a@inbox.mailtrap.io',
            to: 'nicoli-e9600a@inbox.mailtrap.io',
            subject: 'Novo cadastro de pizza',
            text: 'Oi',
            html: `<h1>A pizza foi cadastrada no sistema!</h1>`
        }
        email.sendMail(envioEmail, (error) => {
            if (error) {
                console.log("Deu ruim")
            } else {
                console.log("Deu bom, email enviado")
            }
        })
        */
        res.render('cadastroCardapio');
    },

    salvarCadastro: (req, res) => {
        const {nomePizza, precoPizza} = req.body;
        const [fotoPizza] = req.files;
        Cardapio.cadastrarPizza(nomePizza, precoPizza, fotoPizza.filename);
        //res.send(req.body);
        res.redirect('/cardapio/ver');
    },

    deletarPizza: (req, res) => {
        let {posicao} = req.params;
        Cardapio.deletarPizza(posicao);
        res.redirect('/cardapio/ver');
    },

    formAlteracao: (req, res) => {
        const {posicao} = req.params;
        const pizza = Cardapio.buscarPizza(posicao);
        return res.render('alterarCardapio', {pizza, posicao});
    },

    alterarPizza: (req, res) => {
        let {nomePizza, precoPizza, posicao} = req.body;
        let pizza = Cardapio.atualizarPizza(nomePizza, precoPizza, posicao);
        return res.render('alterarCardapio', {
            pizza, posicao, msg: "Pizza atualizada com sucesso!"});
    }

}

module.exports = cardapioController;