const express = require('express');
const mongoose = require('mongoose')

// Iniciando o App
const app = express();

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});


// Primeira Rota
app.get('/', (req, res) => {
    res.send('Hello Teste nodemon!')
});

app.listen(3001);