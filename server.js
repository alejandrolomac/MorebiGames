const express = require('express');
const router = express.Router();

var app = express(); 
app.use(router);

router.get('/message', function (req, res){
    res.send('Lista de mensajes');
});

router.post('/message', function (req, res){
    res.send('Mensaje añadido');
});

app.use('/', express.static('public'));

app.listen(3000);