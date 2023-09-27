const fs = require("fs");
const http =require("http");

const server =http.createServer();
server.on('request',(req,res)=>{
// 1way 

// fs.readFile("input.txt","utf-8",(err,data)=>{
//     if (err) console.log(err);
//     res.end(data)
// })

// 2way

// const rstream=fs.createReadStream("input.txt");
// rstream.on("data",(chunkdata)=>{
//     res.write(chunkdata)
// })
// rstream.on("end",()=>{
//     res.end()
// })
// rstream.on("error",(err)=>{
//     console.log(err)
//     res.end("file not found")
// });

// 3way best way

const rstream=fs.createReadStream("input.txt");
rstream.pipe(res);


});

server.listen(8000,"127.0.0.1")