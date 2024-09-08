
const db = require ('./db');

// Definição de modelos
const post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
});

module.exports = post;

//Post.sync({FORCE: true})