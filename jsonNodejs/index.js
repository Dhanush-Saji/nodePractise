const fs = require("fs")

const bioData = {
    name:"Dhanush",
    age:26,
    place:"India"
}
const jsonData = JSON.stringify(bioData) //converted and stored JSON data
fs.writeFile('data.json',jsonData,()=>{ //creating jSON file and storing data in it
    console.log("Created file");
})
fs.readFile('data.json','utf-8',(err,data)=>{
    const normalData = JSON.parse(data) //converting jSON file back to normal data
    console.log(normalData);
})