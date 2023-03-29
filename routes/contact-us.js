const path = require('path');
const fs = require('fs');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/contact-us' , (req, res ,next) =>{
    res.sendFile(path.join(rootDir , 'views' , 'contact-us.html'))
})

router.post('/successfull' , (req , res , next) =>{
    let userName = req.body.name;
    let mail = req.body.email;
    let number = req.body.phone;

    fs.writeFile("contact-user.txt" , `\n${userName} : ${mail} ${number}` , {flag : 'a'} , (err)=>{
        err ? console.log(err) : res.redirect('/successfull')
    });
})

module.exports = router;