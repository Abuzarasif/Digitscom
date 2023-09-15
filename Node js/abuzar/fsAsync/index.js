const fs =require("fs");

// Assync file System

// to create file and write into the file Async
fs.writeFile("AsyncRead.txt","hellow this is Asynchronous file system",(error)=>{
    console.log("file is created ")
    console.log(error);
})

// to append data async

fs.appendFile("AsyncRead.txt"," congrats you have successfully appended the code  ",(error)=>{
    console.log("file is appended");
})

// to read  the file async

fs.readFile("AsyncRead.txt","utf-8",(error,data)=>{
    console.log(data);
})