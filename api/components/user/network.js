const express = require('express');

const response = require('../../../network/response')
const Controller = require('./index')

const router = express.Router();

router.get('/',function (req,res){
    Controller.list()
        .then((lista)=>{
            //res.send('Todo funciona')
            response.success(req,res,lista,200)
        }).catch((err)=>{
            response.error(req,res,err.message,500)
        })
    
})

router.get('/:id',function (req,res){
    Controller.get(req.params.id)
        .then((user)=>{
        //res.send('Todo funciona')
        response.success(req,res,user,200)
        }).catch((err)=>{
            response.error(req,res,err.message,500)
        })
    
})
router.post('/:id/:name',function (req,res){
    let data = {
        id:req.params.id,
        name:req.params.name
    }
    Controller.upsert(data)
        .then((doc)=>{
            response.success(req,res,doc,200) 
        }).catch((err)=>{
            response.error(req,res,err.message,500)
        })
})

module.exports = router;