const path =require("path");
console.log(path.dirname("D:/Node JS/pathmodule/path.js"));
console.log(path.extname("D:/Node JS/pathmodule/path.js"));
console.log(path.basename("D:/Node JS/pathmodule/path.js"));
const mypath=path.parse("D:/Node JS/pathmodule/path.js");
console.log(mypath.root)
console.log(mypath.base)

