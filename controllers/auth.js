const mysql = require("mysql2");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const bcryptjs = require('bcryptjs')
const database = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Lovemomdadsister3',
    database:process.env.DATA
});

exports.register = (req,res) => {
    console.log(req.body);

    const { name, email, password, passwordConfirm} = req.body;

    database.query('SELECT email FROM users WHERE email = ?', [email],async(error, results)=>{
        res.render('login')
        if(error){
            console.log(error);
        }
        if(results.length > 0){
            return res.render('register',{
                message:"That email has already in use"
            })
        }else if(password !== passwordConfirm){
            return res.render('register',{
                message: "Password do not match"
            })
        }
        let hashedPassword = await bcryptjs.hash(password, 8);
        console.log(hashedPassword);
        database.query('INSERT INTO users SET ?', {name: name, email: email, password:hashedPassword} , (error,results) => {
            if(error){
                console.log(error);
            }else{
                return res.render('register', {
                    message:'User registered'
                })
            }
        })
    })
}




