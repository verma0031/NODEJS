const http = require('http');

const express  = require('express');
const bodyParser = require('body-parser');

const port=4000;

const app = express();

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

const login = require('./routes/login');

const msg = require('./routes/messages');


app.use(bodyParser.urlencoded({extended : false}));

app.use('/admin' ,  adminRoutes);

app.use(login);

app.use(msg);

app.use(shopRoutes);

app.use((req , res , next) =>{
    res.status(404).send('<h1>Page Not Found</h1>')
});


app.listen(port);