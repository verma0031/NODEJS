const http = require('http');

const express  = require('express');
const bodyParser = require('body-parser');

const port=4000;

const app = express();

app.use(bodyParser.urlencoded({extended : true}));


app.use('/add-Product' , (req , res , next)=>{
    res.send(`
    <form action = "/product" method = "POST">
        <input type ="text" name = "title"><br/>
        <input type ="text" name = "size">
        <button type = "submit">Add Product</button>

    </form>`);
});

app.post('/product' , (req , res , next) =>{

    console.log(req.body);
    res.redirect('/');
});

app.use('/' , (req , res , next)=>{
    
    res.send('<h1>Hello form expressJS</h1>');
});



app.listen(port);