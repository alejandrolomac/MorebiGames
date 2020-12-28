const express = require('express');
const router = express.Router();

const app = express(); 
const port = process.env.PORT || 5000
app.use(router);

router.get('/message', function (req, res){
    res.send('Lista de mensajes');
});

router.post('/message', function (req, res){
    res.send('Mensaje añadido');
});

app.use('/', express.static('public'));

app.listen(port);