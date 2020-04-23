const express = require('express');
const methodOverride = require('method-override');
const expressSession = require('express-session');

let rotasIndex = require('./routes/indexRoute');
let rotasUsuario = require('./routes/usuarioRoute');
let rotasCardapio = require('./routes/cardapioRoute');


let app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));

app.use(expressSession({
    secret: 'titas',
    resave: true,
    saveUninitialized: true
}))
app.use(rotasIndex);
app.use(rotasUsuario);
app.use('/usuarios', rotasUsuario);
app.use('/cardapio', rotasCardapio);

app.listen(3000, () => console.log("Servidor rodando perfeitamente"));

/*
app.get('/', (req, res) => {
    res.send("Você está no sistema Pizzaria DH");
});
*/