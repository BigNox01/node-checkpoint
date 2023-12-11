const fs=require('fs')
const path = require('path')
// creating a directory
fs.mkdir(path.join(__dirname,'/test'),{},function(err){
    if (err) throw err;
    console.log('folder created')
})
// creating and writing a file
fs.writeFile(path.join(__dirname,"/test",'welcome.txt'),'hello node',
function(err){
if(err) throw err
console.log('file writen to ...')
})