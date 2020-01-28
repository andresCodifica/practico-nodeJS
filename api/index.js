const express = require('express');
const bodyParser = require('body-parser');
const swagerUi = require('swagger-ui-express')

const config = require('../config.js')
const app = express();

//https://editor.swagger.io/

app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

const swaggerDoc = require('./swagger.json')

const user = require('./components/user/network');
const auth = require('./components/auth/network');

app.use('/api/user',user)
app.use('/api/auth',auth)
app.use('/api-docs',swagerUi.serve, swagerUi.setup(swaggerDoc))

app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ',config.api.port)
})