const fs=require('fs');

const create=fs.writeFileSync("bio.txt","my name is abuzar asif ");
const appendfile=fs.appendFileSync("bio.txt","my father name is Muhammad Asif" );
const buf_data=fs.readFileSync("bio.txt","utf8");
// const ordata=buf_data.toString();
fs.renameSync("bio.txt","BIO.txt");

// console.log(ordata);
console.log(buf_data);

