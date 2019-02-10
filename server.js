const express = require("express");
const mongoose = require("mongoose");
const requireDir = require('require-dir')
const cors = require('cors')

// Iniciando o App
const app = express();
// permiti enviar dados no formato json
app.use(express.json())
app.use(cors())

//Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true
});
requireDir("./src/models");

// Rotas
app.use('/api', require('./src/routers'))

app.listen(3001);
