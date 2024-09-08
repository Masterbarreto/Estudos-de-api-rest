const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const post = require('./models/post');
const moment = require('moment')

// Configuração
    // Motor de templates
    app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars');   
    // Body Parser
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());



//Rotas

app.get('/home', function(req, res) {
    post.findAll(({order:[["id","DESC"]]})).then(function (posts) {
        res.render('home', {posts: posts});
    }).catch(function (error) {
        console.error('Error:', error);
        res.status(500).send('Error: ' + error);
    });
})


app.get('/cad', function (req, res) {
    res.render('formulario');
})

app.post('/add', function (req, res) {
    // Recebe dados do formulário
    post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function (response) {
        res.redirect("/home")
    }).catch(function (erro) {
        res.send("Erro ao cadastrar o post: " + erro);
        console.log(erro);
    })
    
});

app.get("/deletar/:id",function(res,req){
    Post.destroy({
        where: {'id': req.params.id}
    }.then(function(res,req){
        res.send("Postagem deletada com sucesso!!")
    })).catch(function(erro){ 
        res.send("Erro ao deletar!! "+erro)
    })
})


app.listen(8081, function() {
console.log('Servidor Rodando na url [6](http://localhost:8081)');
});
