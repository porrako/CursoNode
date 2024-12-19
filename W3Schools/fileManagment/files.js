    var http = require("http");


    //  With readFile you can show the content of the file.
            var fs = require("fs");

            http.createServer(function(req,res){
                fs.readFile("file.html",function(err,data){
                    res.writeHead(200,{"Content-Type":"text/html"});
                    res.write(data);
                });
            }).listen(8080);
    

    //With the next 3 methods you are able to create files.

    /*  With appendFile you can append content to a file.

            var fs = require("fs");

            http.createServer(function(req,res){
                fs.appendFile("file.txt","GoodBye World",function(err){
                    if(err) throw err;
                    console.log("Content appended");

                    fs.readFile("file.txt",function(err,data){
                        res.writeHead(200,{"Content-Type":"text/html"});
                        res.write(data);
                    });
                });
            }).listen(8080);
    */

    /*  With writeFile you can overwrite the content of a file
    
            var fs = require('fs');

            http.createServer(function(req,res){
                fs.writeFile('file.txt', 'Hello World!', function (err) {
                    if (err) throw err;
                    console.log('Content overwrited');

                    fs.readFile("file.txt",function(err,data){
                        res.writeHead(200,{"Content-Type":"text/html"});
                        res.write(data);
                    });
                });
            }).listen(8080);
    */

    /*  I do not understand what does open.

            var fs = require('fs');

            http.createServer(function(req,res){
                fs.open('file.txt', 'w', function (err, file) {
                    if (err) throw err;
                    console.log('IDK');
                fs.readFile("file.txt",function(err,data){
                    res.writeHead(200,{"Content-Type":"text/html"});
                    res.write(data);
                });
                }).listen(8080);
            });
    */

    //With unlink and rename you can delete and rename files.

    /*  Delete    

            var fs = require('fs');

            fs.unlink('file.txt', function (err) {
                if (err) throw err;
                console.log('File deleted');
            });
    */

    /*  Rename

            var fs = require('fs');

            fs.rename('file.txt', 'fileRenamed.txt', function (err) {
                if (err) throw err;
                console.log('File Renamed');
            });
    */