const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Teste nodemon!')
});

app.listen(3001);