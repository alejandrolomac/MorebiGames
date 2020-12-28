const express = require('express');

//const router = require('./components/admin/network');
const router = require('./network/routes');
const app = express(); 
const port = process.env.PORT || 5000

router(app);
app.use('/', express.static('public'));
//app.use(router);

app.listen(port);
console.log('La aplicación está escuchando en http://localhost:5000');