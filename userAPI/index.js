const http = require("http");
const fs = require("fs")

const server = http.createServer((req,res)=>{
    if(req.url == "/"){ //when the browser address is http://localhost:8080
        return res.end("Welcome to home page")
    }
    else if(req.url == "/web"){ //when the browser address is http://localhost:8080/web
        return res.end("<h1>Welcome to home page</h1>")
    }
    else if(req.url == "/userapi"){
        fs.readFile(`${__dirname}/userData/db.json`,"utf-8",(err,data)=>{ //__dirname take you to the root folder
            const objData = JSON.parse(data)
            res.writeHead(200,{"Content-type":"application/json"})
            return res.end(objData[2].email)
        })
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"}) // the status code
        return res.end("404 ERROR")
    }
});

server.listen(8080,()=>{
    console.log("Listening on http://localhost:8080");
})