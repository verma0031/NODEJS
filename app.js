const http = require('http');

const express  = require('express');

const port=4000;

const app = express();

app.use( (req , res , next)=>{
    console.log("In the middleware");
    next(); //allows the request to continue to next middleware
});

app.use( (req , res , next)=>{
    console.log("In another middleware");
    res.send('<h1>Hello form expressJS</h1>');
});



app.listen(port);