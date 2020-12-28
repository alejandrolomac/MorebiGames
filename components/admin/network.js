const { response } = require('express');
const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/ganadores', function (req, res){
    res.sendFile('ganadores.html', { root: './public/' });
    //controller.winners();
    // .then((fullMessage) => {
    //     response.success(req, res, fullMessage, 201);
    // })
    // .catch(e => {
    //     response.error(req, res, 'Información invalida', 400, 'recarga la pagina porfavor')
    // });
});

router.post('/message', function (req, res){
    res.send('Mensaje añadido');
});

module.exports = router;