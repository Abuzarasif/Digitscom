// const bioData ={
//     name :"Abuzar Asif",
//     age:23,
// }
// console.log(bioData);

// now to convert object into json

// const jsonData=JSON.stringify(bioData);
// console.log(jsonData)

// now to convert json to object

// const objData=JSON.parse(jsonData)




// challenge
const { error } = require("console");
const fs =require("fs")

// create object 
const myData={
    name:"Abuzar asif",
    age:23,
    Uni:"UET Lahore"
}
// convert it into json
const jsonmyData=JSON.stringify(myData);
// dusre file ma add kare json file ma banaye or add karein
fs.writeFile("json1.Json",jsonmyData,(error)=>{
    console.log("Done");
})
// read file
fs.readFile("json1.json","utf-8",(error,data)=>{
    console.log(data);
})
// again convert back to obj
const objMyData=JSON.parse(jsonmyData);
// console.log
console.log(objMyData)

