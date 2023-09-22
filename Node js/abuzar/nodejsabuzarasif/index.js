// FS file FileSystem
const fs= require('fs');
const { stringify } = require('querystring');
// new file created
fs.writeFileSync('read.txt','hellow you have created file with fs  module');
fs.writeFileSync('read.txt','hellow you have created new  file Again ');
// data append 
fs.appendFileSync('read.txt',' hellow how are you ');

// read data 
const buf_data=fs.readFileSync('read.txt',);
console.log(buf_data)
// to show the real data i had to convert it into the string
const org_data=buf_data.toString();
console.log(org_data)
