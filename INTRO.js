
    let http = require("http");//Esto es lo más básico de NodeJs

    http.createServer(function (req,res){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end("Hello World");
    }).listen(8080)
