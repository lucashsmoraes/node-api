const express = require("express");
const requireDir = require('require-dir')

// Iniciando o App
const app = express();

//Iniciando o DB
// mongoose.connect("mongodb://localhost:27017/nodeapi", {
//   useNewUrlParser: true
// });
requireDir("./src/models");

// Rotas
app.use('/api', require('./src/routers'))

app.listen(3001);
