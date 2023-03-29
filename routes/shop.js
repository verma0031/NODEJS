const path = require('path');

const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/' , (req , res , next)=>{
    
    res.sendFile(path.join(rootDir, 'views' , 'shop.html'));
});

router.post('/contact-us' , (req , res , next) =>{
    res.redirect('/contact-us');
})

module.exports = router;

