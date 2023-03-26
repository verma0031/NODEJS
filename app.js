const http = require('http');
const fs = require('fs');

const port=4000;

const server = http.createServer( ( req , res) =>{
    console.log(req);
    res.setHeader('Content-type' , 'text/html')
    if(req.url === '/home'){
        fs.readFile("./home.html" , (err , page)=>{
            if(err)
            throw err;
            res.write(page);
            res.end();
        })
    }
    if(req.url === '/about'){
        fs.readFile("./about.html" , (err , page)=>{
            if(err)
            throw err;
            res.write(page);
            res.end();
        })
    }
    if(req.url === '/node'){
        fs.readFile("./node.html" , (err , page)=>{
            if(err)
            throw err;
            res.write(page);
            res.end();
        })
    }
})

server.listen(port);