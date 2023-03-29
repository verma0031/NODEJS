const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');
exports.successPage = (req , res , next)=>{
    res.sendFile(path.join(rootDir , 'views' , 'successfull.html'));
};
