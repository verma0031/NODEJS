const express = require('express');

const router = express.Router();

router.get('/login' , (req , res , next)=>{
    res.send(`
    
<html >
<head>
    <title>Chat</title>
</head>
<body>
        <form onsubmit="localStorage.setItem('username', document.getElementById('userName').value)" action="/add-chats" method = "POST">
            <h2>LOGIN FORM</h2>
            <div class="entries">
                <label for="userName">Username</label>
                <input type="text" name="userName" id="userName" name="title">
            </div>
            <button type = "submit" onclick="onSubmit()">Add Product</button>
        </form>
</body>
</html>  
`);
});

router.post('/add-chats' , (req , res , next) =>{
    console.log(req.body.userName);
    let userName = req.body.userName;
res.redirect('/messages');
});




module.exports = router;