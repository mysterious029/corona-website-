const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 3000;

const server  = http.createServer((req, res)=>{
    
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)
    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('application programing.html'); 
        res.end(data.toString());
    }
    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('2d array.html'); 
        res.end(data.toString());
    }
    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('CODE.html'); 
        res.end(data.toString());
    }
    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('stylephp.css'); 
        res.end(data.toString());
    }
    else{
        
        res.statusCode = 404;
        res.end('<h1> Not Found</h1> <p> Hey this page was not found on this server</p>');
    }
    
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);

});