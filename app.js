const express = require('express');

const app = express();
const path = require('path')
const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory));


/* app.use(express.urlencoded({extended: false}));
app.use(express.json()); */


const mysql = require("mysql2");
const database = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Lovemomdadsister3',
    database:process.env.DATA
});

app.set('view engine' , 'ejs');
app.set('views','views');


database.connect((error) => {
    if(error) {
        console.log(error)
    }else{
        console.log("MySQL connected...")
    }
})

const dotenv = require('dotenv');
    dotenv.config({path:'./.env'});

//define Router
/* const registerRouter = require('./router/register');
const indexRouter = require('./router/index');
app.use(registerRouter);
app.use(indexRouter); */

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/',require('./router/pages'));
app.use('/auth',require('./router/auth'));

/* app.use('/auth', require('./router/auth')); */
app.listen(3000,() =>{
    console.log("server started on Port 3000");
});