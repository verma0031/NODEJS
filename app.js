const path = require('path');

const http = require('http');

const express  = require('express');
const bodyParser = require('body-parser');

const port=4000;

const app = express();

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

const login = require('./routes/login');

const msg = require('./routes/messages');

const contact = require('./routes/contact-us');
const success = require('./routes/successfull');


app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname , 'public')))

app.use('/admin' ,  adminRoutes);

app.use(login);

app.use(msg);

app.use(shopRoutes);

app.use(contact);

app.use(success);


app.use((req , res , next) =>{
    res.status(404).sendFile(path.join(__dirname , 'views' , '404.html'));
});


app.listen(port);