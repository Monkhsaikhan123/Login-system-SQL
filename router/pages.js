const express = require('express');
const router = express.Router();


const path = require('path');

router.get('/',(req,res)=>{
    res.render('index');
})
router.get('/register',(req,res)=>{
    res.render('register');
})
router.get('/login',(req,res)=>{
    res.render('login');
})
router.get('/admin',(req,res)=>{
    res.render('admin');
})



module.exports = router;