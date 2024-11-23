
const path = require("path");
const fs = require("fs");

// //1.ADD DIRECTORY:
// fs.mkdir(path.join(__dirname,"/fileOperations"),{recursive:true},(err)=>{
//     if(err) throw err;
// });

//2.CREATE FILE WITH CONTENT:
const user = "Anshad";
fs.writeFile(path.join(__dirname,"/fileOperations","file1.txt"),`Name : ${user}`,(err)=>{
    if(err) throw err;
});

// //3.APPEND CONTENT TO FILE:
// fs.appendFile(path.join(__dirname,"/fileOperations","file1.txt"),`\n Name : Dilsha`,(err)=>{
//     if(err) throw err;
// });

// //4.READ FILE :
// fs.readFile(path.join(__dirname,"/fileOperations","file1.txt"),"utf-8",(err,data)=>{
//     if(err) throw err;

// console.log(data);
// })

// //5.REMOVE FILE:
// fs.unlink(path.join(__dirname,"/fileOperations","file1.txt"),(err)=>{
//     if(err) throw err;

// console.log("File Removed Successfully");
// })

//6.RENAME FILE:
fs.rename(
    path.join(__dirname,"/fileOperations","file1.txt"),
    path.join(__dirname,"/fileOperations","NEWFile.txt"),
    (err)=>{
        if(err) throw err;
        
    console.log("File Renamed Successfully");
    }
)