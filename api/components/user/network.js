const express = require('express');
const response = require('../../../network/response')
const Controller = require('./index')

const router = express.Router();

router.get('/',list)
router.get('/:id',get)
router.post('/',upsert)

function list (req,res){
    Controller.list()
        .then((lista)=>{
            //res.send('Todo funciona')
            response.success(req,res,lista,200)
        }).catch((err)=>{
            response.error(req,res,err.message,500)
        })    
}

function get (req,res){
    Controller.get(req.params.id)
        .then((user)=>{
        //res.send('Todo funciona')
        response.success(req,res,user,200)
        }).catch((err)=>{
            response.error(req,res,err.message,500)
        })
    
}

function upsert (req,res){
    Controller.upsert(req.body)
        .then((doc)=>{
            response.success(req,res,doc,200) 
        }).catch((err)=>{
            response.error(req,res,err.message,500)
        })
}

router.delete('/:id',function(req,res){
    
})

module.exports = router;