const express = require('express');
const bodyParser = require('body-parser');


const app = express();

//https://editor.swagger.io/

app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

const config = require('../config.js')
const post = require('./components/post/network');
const errors = require('../network/errors')

app.use('/api/post',post)

app.use(errors)

app.listen(config.post.port, () => {
    console.log('Servicio posts escuchando en el puerto ',config.post.port)
})