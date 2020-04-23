const fs = require('fs');
const path = require('path');
const arquivoCardapio = path.join('cardapio.json');
const Email = require('../configs/email')

function listarCardapio() {
    const listaDePizzas = JSON.parse(fs.readFileSync(arquivoCardapio, {encoding: 'utf-8'}))
    return listaDePizzas;
}

function cadastrarPizza(nome, preco, nomeImg) {
    let novaPizza = {
        nome,
        preco,
        img:nomeImg
    }
    /*
    let emailEnvio = {
        from: 'nicoli1992@gmail.com',
        to: 'nicoli1992@gmail.com',
        subject: 'Novo cadastro de pizza',
        text: 'Uma nova pizza foi cadastrada no sistema',
        html: `<h1>Uma nova ${nome} foi cadastrada no sistema</h1>`
    }

    Email.sendMail(emailEnvio, (error) => {
        if (error) {
            console.log("Deu ruim")
            console.log(error)
        } else {
            console.log("Email disparado com sucesso")
        }
    })
    */
    let listaDePizzas = JSON.parse(fs.readFileSync(arquivoCardapio, {encoding: 'utf-8'})) 
    listaDePizzas.push(novaPizza);
    fs.writeFileSync(arquivoCardapio, JSON.stringify(listaDePizzas));
    //return cardapio.push(novaPizza);
}

function deletarPizza(posicao) {
    let listaDePizzas = JSON.parse(fs.readFileSync(arquivoCardapio, {encoding:'utf-8'}))
    listaDePizzas.splice(posicao, 1);
    return fs.writeFileSync(arquivoCardapio, JSON.stringify(listaDePizzas)); 
    //cardapio.splice(posicao, 1)
    /* cardapio = cardapio.filter((pizza, index) => {
        return pizza != index;
    })*/
}

function buscarPizza(posicao) {
    let listaDePizzas = JSON.parse(fs.readFileSync(arquivoCardapio, {encoding: 'utf-8'}))
    return listaDePizzas[posicao];
}

function atualizarPizza(nome, preco, posicao) {
    let pizza = {
        nome,
        preco,
        img: 'pizza.jpg'
    };

    var listaDePizzas = JSON.parse(fs.readFileSync(arquivoCardapio, {encoding: 'utf-8'}));
    listaDePizzas[posicao] = pizza;
    fs.writeFileSync(arquivoCardapio, JSON.stringify(listaDePizzas));
    return pizza;
}

module.exports = {listarCardapio, cadastrarPizza, deletarPizza, buscarPizza, atualizarPizza};