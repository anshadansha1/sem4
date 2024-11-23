
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) =>{
    let filePath = '';
    let contentType = 'text/html';

    //ROUTE handling based on URL:
    switch(req.url){
        case '/':
            filePath = path.join(__dirname,"views","index.html");
            break;
        case '/contact':
            filePath = path.join(__dirname,"views","contact.html");
            break;
        default:
            filePath = path.join(__dirname,"views","404.html");
            break;

    }

    //Reading the selected file:
    fs.readFile(filePath,"utf-8",(err, data) =>{
        if(err){
            res.writeHead(500, { "Content-Type": "text/plain"});
            return res.end("Server Error");
        }
        res.writeHead(200, { "Content-Type":contentType});
        res.end(data);
    });
    
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`Server is running on ${PORT}`));

    
