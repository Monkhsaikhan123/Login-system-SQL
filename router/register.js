const express = require('express');
const router = express.Router();


const path = require('path');

router.get('/register',(req,res)=>{
    res.render('register');
})


router.post('/register',authController,register)


module.exports = router;