const fs=require('fs');
const path = require('path');
const rootDir = require('../util/path');

exports.getContact = (req, res ,next) =>{
    res.sendFile(path.join(rootDir , 'views' , 'contact-us.html'))
};

exports.success = (req , res , next) =>{
    let userName = req.body.name;
    let mail = req.body.email;
    let number = req.body.phone;

    fs.writeFile("contact-user.txt" , `\n${userName} : ${mail} ${number}` , {flag : 'a'} , (err)=>{
        err ? console.log(err) : res.redirect('/successfull')
    });
};


