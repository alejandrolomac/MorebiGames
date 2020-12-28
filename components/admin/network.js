const { response } = require('express');
const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req, res) {
    res.sendFile('index.html', { root: './public/' });
});

router.get('/ganadores', function (req, res){
    res.sendFile('ganadores.html', { root: './public/' });
});

router.post('/message', function (req, res){
    res.send('Mensaje añadido');
    //controller.winners();
    // .then((fullMessage) => {
    //     response.success(req, res, fullMessage, 201);
    // })
    // .catch(e => {
    //     response.error(req, res, 'Información invalida', 400, 'recarga la pagina porfavor')
    // });
});

module.exports = router;