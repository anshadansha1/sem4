console.log("running")
const array = ["Anshad","Dilsha","Sanjay","Sreekumar"];
array.push("Albin")
const newArray=[...array,"f"];
console.log(newArray)

function newFunc(){
    console.log("Running");
}
newFunc();

const functTwo=()=>10

console.log(functTwo());

// setInterval(()=>{
//     console.log("Running.........");
// },5000);

// setTimeout(()=>{
//     console.log("Running************");
// },2000);

// const interval = setInterval(()=>{
//     console.log("RUNNINGG>>>!!!");
// },1000);

// setTimeout(()=>{
//     clearInterval(interval);
// },3000);


//TO get File name
console.log(__filename);
//To get Directory name
console.log(__dirname);


// const path = require("path");
// console.log(path.basename(__filename));//for file name
// console.log(path.extname(__filename));//for extension name
// console.log(path.dirname(__filename));//for directory
// console.log(path.join(__dirname,"api","script.js"));

//TO ADD DIRECTORY:-
// const path = require("path");
// const fs = require("fs");
// fs.mkdir(path.join(__dirname,"/api2/api3"),{recursive:true},(err)=>{
//     if(err) throw err;
// });
// console.log(fs);


//TO REMOVE DIRECTORY:-
// const path = require("path");
// const fs = require("fs");
// fs.rmdir(path.join(__dirname,"/api2"),{recursive:true},(err)=>{
//     if(err) throw err;
// });

//TO CREATE A FILE AND ADD CONTENTS:-
// const path = require("path");
// const fs = require("fs");
// fs.writeFile(path.join(__dirname,"/api","api.txt"),"User Name: Anshad",(err)=>{
//     if(err) throw err;
// });
// console.log(fs);

// const path = require("path");
// const fs = require("fs");
// const user = "Dilsha"
// fs.writeFile(path.join(__dirname,"/api","api.txt"),`User Name: ${user}`,(err)=>{
//     if(err) throw err;
// });
// console.log(fs);

//APPEND:-

// const path = require("path");
// const fs = require("fs");
// const user = "Anshad"
// fs.appendFile(path.join(__dirname,"/api","api.txt"),`\n \t User Name: ${user}`,(err)=>{
//     if(err) throw err;
// });
// console.log(fs);

//READ FILE:-
const path = require("path");
const fs = require("fs");
const user = "Anshad"
fs.readFile(path.join(__dirname,"/api","api.txt"),"utf-8",(err,data)=>{
    if(err) throw err;

console.log(data);
});


