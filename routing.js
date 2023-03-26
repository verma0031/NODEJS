const fs = require('fs');

const requestHandeler = (req , res)=>{
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        // const filePath = path.join(_dirname , "message.txt");
        fs.readFile("message.txt", {encoding: "utf-8"} , (err, data) => {
        if (err){
        console. log (err);
        }

        res.write(`
    <html>
    <body>
    <form action="/message" method="POST">
    <input type="text" name="message">
    <input type="submit" value="SAVE">
    </form>

    <h1 id="demo">${data}</h1>

    </body>
    </html>
    `);
    return res.end();

    });
    }

    else if(url === '/message' && method ==='POST'){
        const body = [];
        req.on('data' , (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end' , ()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const msg = parsedBody.split('=')[1];
            console.log(msg);

            fs.writeFileSync('message.txt' , msg);

        });
        
        res.statusCode = 302;
        res.setHeader('Location' , '/');
        return res.end();
    }


}

module.exports = requestHandeler;