const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');

router.get('/successfull' , (req , res , next)=>{
    res.sendFile(path.join(rootDir , 'views' , 'successfull.html'));
})

module.exports = router;