const express = require('express');
const response = require('../../../network/response')
const Controller = require('./index')
const router = express.Router();

router.get('/',list)
router.post('/posted',posted)
//functions
function list(req, res, next){
    Controller.list()
        .then(data => {
            response.success(req, res, data, 200)
        }).catch(next)
}
function posted(req,res, next){
    Controller.upsert(req.body)
        .then(data => {
            response.success(req, res, data, 200)
        }).catch(next)
}
module.exports = router;