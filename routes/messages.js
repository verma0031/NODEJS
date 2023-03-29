const express = require('express');
const fs = require('fs');

const router = express.Router();

// const data = require('./data');

router.get('/messages' , (req , res , next) =>{

    fs.readFile('message.txt' , (err , data) =>{
        if(err){
            console.log(err);
            data = "No messages right now";
        }
        res.send(`
    <body>
        <form action="/messages" onsubmit = "document.getElementById('userName').value = localStorage.getItem('username')" method = "POST">
            <input id="message" name="message" type="text" placeHolder="message"> 
            <input type="hidden" name="username" id= "userName">
            <button type = "submit">Send Message </button>
        </form>
        <br>
         ${data}
        <br>
    </body>
    `) 
    })
});

router.post('/messages' , (req , res , next )=>{
    let userName = req.body.username;
    let msg = req.body.message;

    fs.writeFile("message.txt" , `\n${userName} : ${msg}` , {flag : 'a'} , (err)=>{
        err ? console.log(err) : res.redirect('/messages')
    });
    
    console.log(userName , msg);
})


module.exports = router;