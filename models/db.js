const Sequelize = require('sequelize');    // Conexão com o banco de dados MySQL
const sequelize = new Sequelize('postapp', 'Master', '250508', {
host: 'localhost',
dialect: 'mysql',
query:{raw:true}
});

module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize
}