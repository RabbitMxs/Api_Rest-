'use strict'
const express=require('express')
const ProductCtrl=require('../controllers/product')
const userCtrl=require('../controllers/user')
const auth =require('../middlewares/auth')
const api=express.Router()

api.get('/product',ProductCtrl.getProducts)//
api.get('/product/:productId',ProductCtrl.getProduct)//
api.post('/product', auth ,ProductCtrl.saveProduct)//
api.delete('/product/:productId', auth,ProductCtrl.deleteProduct)//
api.put('/product/:productId', auth,ProductCtrl.updateProduct)//
api.post('/singup', userCtrl.singUp)//
api.post('/singin', userCtrl.singIn)
api.get('/private', auth, (req,res)=>{
    res.status(200).send({message: 'Tienes acceso'})
})

module.exports=api