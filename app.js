const http = require('http');

const port=4000;

const server = http.createServer( ( req , res) =>{
    res.write("Hello my name is PEEYUSH VERMA" , 
    console.log("Hello my name is PEEYUSH VERMA"))
    res.end()
})

server.listen(port);