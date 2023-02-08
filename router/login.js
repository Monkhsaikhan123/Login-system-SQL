const express = require('express');
const router = express.Router();


const path = require('path');

router.get('/login',(req,res)=>{
    res.render('login');
})


router.post('/login',authController,login)



router.post('login', (req,res)=>{
    hashedPassword = req.body.name;
    name = req.body.name;
    
})
module.exports = router;