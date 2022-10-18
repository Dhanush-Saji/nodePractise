const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url == "/"){ //when the browser address is http://localhost:8080
        return res.end("Welcome to home page")
    }
    else if(req.url == "/web"){ //when the browser address is http://localhost:8080/web
        return res.end("<h1>Welcome to home page</h1>")
    }
    else if(req.url == "/products"){ //when the browser address is http://localhost:8080/products
        res.setHeader("content-type","application/json") //passing headers
        return res.end(JSON.stringify([1,2,3,4,5])) //to pass array you have to convert to json
    }
    else{
        res.writeHead(404) // the status code
        return res.end("404 ERROR")
    }
});

server.listen(8080,()=>{
    console.log("Listening on http://localhost:8080");
})