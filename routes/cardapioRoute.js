const express = require('express');
const cardapioController = require('../controllers/cardapioController');
const path = require('path');
const multer = require('multer');
const auth = require('../middlewares/auth');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join('public', 'img'))
    },
    filename: function (req, file, cb) {
        let nomeImg = Date.now() + '-' + req.body.nomePizza.replace(/\s/g, '') + path.extname(file.originalname)
        // 546841651468 - Frango.jpg
        cb(null, nomeImg)
    }
})

const upload = multer({storage: storage});

const route = express.Router();

route.get('/', cardapioController.verIndex);
route.get('/ver', auth, cardapioController.listarCardapio);
route.get('/cadastro', auth, cardapioController.formCadastro);
route.post('/cadastro', auth, upload.any(), cardapioController.salvarCadastro);
route.delete('/deletar/:posicao', cardapioController.deletarPizza);
route.get('/alterar/:posicao', cardapioController.formAlteracao);
route.put('/alterar', cardapioController.alterarPizza);

module.exports = route;

/*route.get('/cadastrar/:pizza/:preco', (req, res)=>{
    res.send("Cadastrou pizza com sucesso!")
})*/