const http = require("http");

const server = http.createServer((req,res)=>{
    res.end('Helloo')
});

server.listen(8080,()=>{
    
})