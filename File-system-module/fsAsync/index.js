const fs = require("fs");

// fs.writeFile("newText.txt","helloo") //this will give an error why becoz we have to give a callback fn also
fs.writeFile("newText.txt","helloo",(err)=>{console.log()}) //now we're passing a callback fn

//To append
fs.appendFile("newText.txt","hw r u",()=>{
    console.log("Appended file");
})

//to read
fs.readFile("newText.txt","utf-8",(err,data)=>{
    console.log(data);
})
console.log("after");