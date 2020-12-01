const express = require('express');
const bodyParser = require('body-parser')

const config = require('../config');
const router = require('./network');
const app = express();

app.use(bodyParser.json())

//Rutas

app.use('/',router)

app.listen(config.mysqlservice.port, () => {
    console.log('servicio de mysql escuchando en el puerto ',config.mysqlservice.port)
})