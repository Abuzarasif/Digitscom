const http=require("http");
const { type } = require("os");

const server=http.createServer((req,res)=>{
if(req.url=="/")
{
    res.end("hellow on the home side")
}
else if(req.url=="/about")
{
    res.end("hellow on the about side ");
}
else if(req.url=="/Contact")
{
    res.end("hellow on the Contact side ");
}
else{
    res.writeHead(404,{"content-type":"text/html"});
    res.end("<h1>404 error pages ,page does not found </h1>")
}

});

server.listen(8080,'127.0.0.1',()=>{
    console.log('listening on port 8000');
})