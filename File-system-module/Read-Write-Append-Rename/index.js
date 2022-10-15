const fs = require("fs");

//Create new folder
fs.mkdirSync("temp1")
fs.mkdirSync("temp2")

//to delete a folder
fs.rmdirSync("temp1")

//creating new file
fs.writeFileSync("read.txt","This file created using fs")

//If we write some other text over the same file, What happens?
fs.writeFileSync("read.txt","Second time, This file created using fs")
//It will rewrite the new text

//That's a problem right? What if you want to append some data?
fs.appendFileSync("read.txt"," /New append data")

//Now what if we want to read the file from here?
let firstReadData = fs.readFileSync("read.txt")
//Output =>
{/* <Buffer 53 65 63 6f 6e 64 20 74 69 6d 65 2c 20 54 68 69 73 20 66 69 6c 65 20 63 72 65 61 74 65 64 20 75 73 69 6e 67 20 66 73 20 2f 4e 65 77 20 61 70 70 65 6e ... 6 more bytes> */}

//Why we are getting some random value?
//Buffer is mainly used to store binary data in NodeJs, while reading from a file or receiving packets from network.

//So we add the encoding along with it
secondReadData = fs.readFileSync("read.txt","utf-8")
//or
thirdReadData= fs.readFileSync("read.txt");
thirdReadData = thirdReadData.toString()
console.log(thirdReadData);
//you can use either way

//If you want to rename the file
fs.renameSync("read.txt","newFile.txt")

//shall we create two dummy file
fs.writeFileSync("dummy1.txt","dummy1")
fs.writeFileSync("dummy2.txt","dummy2")

//delete one of them
fs.unlinkSync("dummy2.txt")

