
    let http = require("http");//Esto es lo más básico de NodeJs


    http.createServer(function (req,res){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("The current date and time is: " + hora());
        res.end();
    }).listen(8080)



    //FUNCIONES

     function hora(){
        let fecha = new Date();
        let h = fecha.getHours();
        let m = fecha.getMinutes();
        let s = fecha.getSeconds();

        if(h < 10) h = "0" + h;
        if(m < 10) m = "0" + m;
        if(s < 10) s = "0" + s;
        return `${h}:${m}:${s}`;
    }
