const express = require('express');
const response = require('../../../network/response')
const secure = require('./secure')

const Controller = require('./index')
const router = express.Router();

router.get('/',list)
router.post('/follow/:id',secure('follow'),follow)
router.post('/:id/following',secure('follow'),following)

router.get('/:id',get)
router.post('/',upsert)
router.put('/',secure('update'),upsert)

function list (req,res,next){
    Controller.list()
        .then((lista)=>{
            //res.send('Todo funciona')
            response.success(req,res,lista,200)
        }).catch(next)   
}

function get (req,res,next){
    Controller.get(req.params.id)
        .then((user)=>{
        //res.send('Todo funciona')
        response.success(req,res,user,200)
        }).catch(next)   
    
}

function upsert (req,res,next){
    Controller.upsert(req.body)
        .then((doc)=>{
            response.success(req,res,doc,200) 
        }).catch(next)   
}
function follow(req, res, next){
    Controller.follow(req.user.id, req.params.id)
    .then(data => {
        response.success(req, res, data, 201)
    }).catch(next)
}
function following(req, res, next){
    return Controller.following(req.params.id)
        .then((data) =>{
            return response.success(req,res,data,200)
        }).catch(next)
}


router.delete('/:id',function(req,res){
    
})

module.exports = router;