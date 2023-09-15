const http=require("http");

const server=http.createServer((req,res)=>{
    res.end("Hellow from the other side abuzar asif ");
});
server.listen(8000,'127.0.0.1',()=>{
    console.log('listening on port 8000');
})