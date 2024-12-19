var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function(req,res){
    //This makes an object with a lot of usefull keys.
    var query = url.parse(req.url, true);

    //This places a dot in front the url key pathname, pathname gives you /filename.
    var filename = "." + query.pathname;

    //Reads the content of the file inserted into the URL.
    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(404,{"Content-Type":"text/html"});
            return res.end("404 Not Found");
        }
        res.writeHead(200,{"Content-Type":"text/html"});
        console.log(query);
        res.write(data);
        return res.end();
    });
}).listen(8080);