const fs = require('fs');
const path = require('path');
const arquivo = path.join('usuarios.json');

const Usuario = {

    cadastrarUsuario: (nome, email, senha)=> {
        let usuariosJson = fs.readFileSync(arquivo,{encoding:'utf-8'});
        usuariosJson = JSON.parse(usuariosJson);
        usuariosJson.push({nome, email, senha});
        fs.writeFileSync(arquivo, JSON.stringify(usuariosJson));
    },

    buscarUsuario: email => {
        let usuariosJson = fs.readFileSync(arquivo,{encoding:'utf-8'});
        usuariosJson = JSON.parse(usuariosJson);
        for(let i = 0; i < usuariosJson.length; i++) {
            let usuario = usuariosJson[i];
            if(usuario.email == email) {
                return usuario;
            }
        }
        return false;
    }
    
}

module.exports = Usuario;